import fs from 'fs'
import pMap from 'p-map'
import {bail} from 'bail'
import fetch from 'node-fetch'
import unified from 'unified'
import parse from 'rehype-parse'
import $ from 'hast-util-select'
import toString from 'hast-util-to-string'

var html = unified().use(parse)

var wiki = 'https://en.wikipedia.org'
var iso31661Main = wiki + '/wiki/ISO_3166-1'
var iso31661Overview = wiki + '/wiki/ISO_3166-1_alpha-2'
var iso31662Base = wiki + '/wiki/ISO_3166-2:'
var iso31663Main = wiki + '/wiki/ISO_3166-3'

var assigned = []
var iso31661 = []
var iso31662 = []
var iso31663 = []

Promise.resolve()
  // ISO 3166-1:
  .then(() => fetch(iso31661Main))
  .then(textIfSuccessful)
  .then((doc) => {
    var tree = html.parse(doc)

    var table = $.selectAll('table.wikitable', tree)[1]
    var rows = $.selectAll('tr', table)

    rows.forEach(function (row) {
      var cells = $.selectAll('td', row)
      var [name, alpha2, alpha3, numeric] = cells.map(cleanNode)

      if (!name) {
        return
      }

      assigned.push({name, alpha2, alpha3, numeric})
    })
  })
  .then(() => fetch(iso31661Overview))
  .then(textIfSuccessful)
  .then((doc) => {
    var tree = html.parse(doc)
    var map = {
      'user-assigned': 'user-assigned',
      'exceptionally reserved': 'exceptionally-reserved',
      'transitionally reserved': 'transitionally-reserved',
      'indeterminately reserved': 'indeterminately-reserved',
      deleted: 'formerly-assigned',
      unassigned: 'unassigned',
      assigned: 'assigned'
    }
    var states = [
      'user-assigned',
      'exceptionally reserved',
      'transitionally reserved',
      'indeterminately reserved',
      'deleted',
      'unassigned'
    ]

    var table = $.selectAll('table.wikitable', tree)[1]
    var cells = $.selectAll('td', table)
    var entries = []

    cells.forEach((d) => {
      var alpha2 = cleanNode(d)
      var title = d.properties.title
      var state = 'assigned'
      var index = -1
      var length = states.length

      if (!/^[A-Z]{2}$/.test(alpha2)) {
        return
      }

      // `OO` is an intentional escape code, one of its kind; ISO ignores it,
      // but it’s also not a user-assigned code.
      if (title === 'Escape code') {
        title = 'unassigned'
      }

      while (++index < length) {
        if (new RegExp('^' + states[index], 'i').test(title)) {
          state = map[states[index]]
          break
        }
      }

      var colon = title.indexOf(':')
      var semicolon = colon === -1 ? -1 : title.indexOf(';', colon)
      var note =
        colon === -1
          ? undefined
          : title
              .slice(colon + 1, semicolon === -1 ? title.length : semicolon)
              .replace(/\([^)]*\)/g, '')
              .replace(/\)/g, '')
              .trim()

      entries.push({state, alpha2, note})
    })

    entries.forEach((entry) => {
      var {state, note, alpha2} = entry
      var record = assigned.find((d) => d.alpha2 === alpha2)
      var {name, alpha3, numeric} = record || {}

      if (entry.state === 'assigned') {
        if (!record) {
          console.error('Cannot handle missing assigned entry', entry, record)
          throw new Error('Cannot handle missing assigned entry')
        }
      } else if (record) {
        console.error('Cannot handle unassigned entry', entry, record)
        throw new Error('Cannot handle assigned entry')
      }

      iso31661.push({
        state,
        alpha2,
        alpha3,
        numeric,
        name: name || note || undefined
      })
    })

    iso31661 = iso31661.sort(sort)
  })
  // ISO 3166-2:
  .then(() => {
    // . var codes = iso31661.filter(d => d.alpha2 === 'IL')
    var codes = iso31661.filter((d) => d.state === 'assigned')

    return pMap(codes, map, {concurrency: 1})

    function map(d) {
      return new Promise((resolve) => {
        setTimeout(resolve, 1000)
      })
        .then(() => fetch(iso31662Base + d.alpha2))
        .then(textIfSuccessful)
        .then((doc) => {
          var tree = html.parse(doc)
          var prefix = d.alpha2 + '-'
          var tables = $.selectAll('table.wikitable', tree)
          var tableLength = tables.length
          var tableIndex = -1
          var headers
          var headerSpans
          var columnIndex
          var table
          var rows
          var found = false
          var rowIndex
          var rowLength
          var cellIndex
          var cellLength
          var cells
          var row
          var cell
          var field
          var column
          var result
          var match
          var byCode = {}
          var key

          while (++tableIndex < tableLength) {
            table = tables[tableIndex]
            headers = []
            headerSpans = []
            rows = $.selectAll('tr', table)
            rowIndex = 0
            rowLength = rows.length

            while (rowIndex < rowLength) {
              row = rows[rowIndex]
              cells = $.selectAll('th', row)
              cellLength = cells.length

              // Not a header row.
              if (cellLength === 0) {
                break
              }

              cellIndex = 0
              columnIndex = 0

              while (cellIndex < cellLength) {
                if (headerSpans[columnIndex]) {
                  headerSpans[columnIndex]--
                  columnIndex++
                  continue
                }

                cell = cells[cellIndex]

                if (cell.properties.rowSpan) {
                  headerSpans[columnIndex] =
                    Number.parseInt(cell.properties.rowSpan, 10) - 1
                }

                if (cell.properties.colSpan) {
                  columnIndex += Number.parseInt(cell.properties.colSpan, 10)
                } else {
                  headers[columnIndex] = cleanNode(cell).toLowerCase()
                  columnIndex++
                }

                cellIndex++
              }

              rowIndex++
            }

            if (headers.length === 0 || headers[0] !== 'code') {
              if (
                !/newsletter|date of change|date issued/.test(headers.join(' '))
              ) {
                console.warn('Not a code table', d.alpha2, headers)
              }

              break
            }

            rowIndex--

            while (++rowIndex < rowLength) {
              row = rows[rowIndex]
              cells = $.selectAll('td', row).map(cleanNode)
              cellLength = cells.length

              if (cellLength === 0) {
                console.warn('Empty row', d.alpha2)
                continue
              }

              result = {}
              cellIndex = -1

              while (++cellIndex < cellLength) {
                cell = cells[cellIndex]
                column = headers[cellIndex]
                field = null

                if (!result.code && /code/.test(column)) {
                  field = 'code'
                } else if (!result.name && /name|bgn\/pcgn/.test(column)) {
                  // Some regions have different languages, and then the
                  // primary names are also in different languages (e.g.,
                  // Belgium).
                  // For Switzerland, it gets more confusing, because the
                  // column contains multiple translations.
                  // E.g., `Fribourg (fr), Freiburg (de)`
                  match = cell.match(/\([a-z]{2}\)/)

                  // Pick the first translation:
                  if (match) {
                    cell = clean(cell.slice(0, match.index))
                  }

                  field = 'name'
                } else if (!result.parent && /^parent |^in /i.test(column)) {
                  if (
                    // Used by `AZ` and `FR` to show non-parent.
                    cell === '—'
                  ) {
                    cell = undefined
                  } else {
                    // Make sure the full code is used.
                    if (cell.slice(0, 3) !== prefix) {
                      cell = prefix + cell
                    }

                    if (!/[A-Z]{2}-[A-Z\d]{1,3}/.test(cell)) {
                      console.warn(
                        'Cannot handle invalid ISO 3166-2 code',
                        cell,
                        column
                      )
                      cell = undefined
                    }
                  }

                  field = 'parent'
                }

                if (field) {
                  result[field] = cell
                }
              }

              if (!result.code || !result.name) {
                console.warn(
                  'Cannot handle result w/o code or name',
                  d.code,
                  result,
                  cells
                )
              } else {
                byCode[result.code] = {
                  code: result.code,
                  name: result.name,
                  parent: result.parent || d.alpha2
                }
              }
            }
          }

          for (key in byCode) {
            iso31662.push(byCode[key])
            found = true
          }

          if (tables.length === 0) {
            console.warn('No tables in %s', d.alpha2)
          } else if (found === false) {
            console.warn('Tables in %s but no subdivisions', d.alpha2)
          }

          iso31662 = iso31662.sort(sort)
        })
    }
  })
  // ISO 3166-3:
  .then(() => {
    // . console.log(iso31662)
    // . throw new Error('break')
    return fetch(iso31663Main)
  })
  .then(textIfSuccessful)
  .then((doc) => {
    var tree = html.parse(doc)

    var table = $.selectAll('table.wikitable', tree)[0]
    var rows = $.selectAll('tr', table)

    var types = {
      merge: /^merged into /i,
      change: /^name changed to /i,
      split: /^divided into: /i
    }

    rows.forEach(function (row) {
      // Exit if there is no row data.
      if (!$.select('td', row)) {
        return
      }

      var cells = $.selectAll('th, td', row)
      var [alpha4, name, before, , after] = cells.map(cleanNode)
      var kind = null
      var key
      var match
      var alpha3
      var numeric
      var changeTo = []
      var lastIndex = 0
      var alpha2
      var re

      for (key in types) {
        match = after.match(types[key])

        if (match) {
          kind = key
          after =
            after.slice(0, match.index) +
            after.slice(match.index + match[0].length)

          break
        }
      }

      ;[alpha2, alpha3, numeric] = before.split(/,\s+/g)
      re = /\([A-Z]{2}, [A-Z]{3}, (\d{3}|-)\)/g

      iso31663.push({
        alpha4,
        type: kind,
        from: {
          state: undefined,
          alpha2,
          alpha3,
          numeric: numeric === '-' ? undefined : numeric,
          name
        },
        to: changeTo
      })

      while ((match = re.exec(after))) {
        ;[alpha2, alpha3, numeric] = match[0].slice(1, -1).split(/,\s+/g)

        name = clean(
          after.slice(lastIndex, match.index).replace(/part of/i, '')
        )

        changeTo.push({
          state: undefined,
          alpha2,
          alpha3,
          numeric: numeric === '-' ? undefined : numeric,
          name
        })

        lastIndex = match.index + match[0].length
      }
    })

    iso31663 = iso31663.sort(sort)
  })
  .then(() => {
    // Check which ISO 3166-3 changes are (formerly) assigned:
    iso31663.forEach((d) => {
      var entries = [].concat(d.from, d.to)
      entries.forEach((entry) => {
        var i1 = iso31661.find((d) => d.alpha2 === entry.alpha2)
        var same =
          i1 &&
          i1.state === 'assigned' &&
          i1.alpha3 === entry.alpha3 &&
          i1.numeric === entry.numeric

        entry.state = (same ? '' : 'formerly-') + 'assigned'
      })
    })

    var iso31661Assigned = []
    var iso31661Reserved = []
    var a2ToA3 = {}
    var a2ToN = {}
    var a2To2 = {}
    var a3ToA2 = {}
    var nToA2 = {}

    iso31661.forEach((d) => {
      if (d.state === 'assigned') {
        iso31661Assigned.push(d)
      } else if (
        d.state === 'indeterminately-reserved' ||
        d.state === 'exceptionally-reserved' ||
        d.state === 'transitionally-reserved' ||
        d.state === 'formerly-assigned'
      ) {
        iso31661Reserved.push(d)
      }
    })

    iso31661Assigned.forEach(({alpha2, alpha3, numeric}) => {
      a2ToA3[alpha2] = alpha3
      a2ToN[alpha2] = numeric
      nToA2[numeric] = alpha2
      a3ToA2[alpha3] = alpha2
    })

    iso31662.forEach(({code}) => {
      var country = code.slice(0, 2)
      a2To2[country] = [].concat(a2To2[country] || [], code)
    })

    Object.keys(a2To2).forEach((alpha2) => {
      a2To2[alpha2].sort((a, b) => a.localeCompare(b))
    })

    write('1', 'iso31661', iso31661Assigned)
    write('1-reserved', 'iso31661Reserved', iso31661Reserved)
    write('1-a2-to-1-a3', 'iso31661Alpha2ToAlpha3', a2ToA3)
    write('1-a2-to-1-n', 'iso31661Alpha2ToNumeric', a2ToN)
    write('1-a3-to-1-a2', 'iso31661Alpha3ToAlpha2', a3ToA2)
    write('1-n-to-1-a2', 'iso31661NumericToAlpha2', nToA2)
    write('2', 'iso31662', iso31662)
    write('3', 'iso31663', iso31663)

    function write(name, id, data) {
      fs.writeFile(
        name + '.js',
        'export var ' + id + ' = ' + JSON.stringify(data, null, 2) + '\n',
        bail
      )
    }
  })
  .catch((error) => {
    console.log('Error:', error)
  })

function sort(a, b) {
  return pick(a).localeCompare(pick(b))
}

function textIfSuccessful(response) {
  if (response.status !== 200) {
    throw new Error('Unsuccessful response: `' + response.status + '`')
  }

  return response.text()
}

function pick(d) {
  return d.alpha2 || d.code || d.alpha4
}

function cleanNode(d) {
  return clean(toString(d))
}

function clean(d) {
  return d
    .replace(/\[[^\]]+]/g, '')
    .replace(/\(i\.e\., [^\]]+\)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}
