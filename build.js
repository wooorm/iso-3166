import fs from 'node:fs'
import pMap from 'p-map'
import {bail} from 'bail'
import fetch from 'node-fetch'
import {unified} from 'unified'
import parse from 'rehype-parse'
import {select, selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'

var html = unified().use(parse)

var wiki = 'https://en.wikipedia.org'
var iso31661Main = wiki + '/wiki/ISO_3166-1'
var iso31661Overview = wiki + '/wiki/ISO_3166-1_alpha-2'
var iso31662Base = wiki + '/wiki/ISO_3166-2:'
var iso31663Main = wiki + '/wiki/ISO_3166-3'

/**
 * @typedef {import('hast').Element} Element
 *
 * @typedef {{name?: string, alpha2: string, alpha3: string, numeric: string}} Reserved
 *
 * @typedef {{name: string, alpha2: string, alpha3: string, numeric: string}} Assigned
 *
 * @typedef {{state: string, alpha2: string, alpha3: string, numeric: string, name?: string}} Iso31661
 *
 * @typedef {{code: string, name: string, parent?: string}} Iso31662
 *
 * @typedef {{alpha4: string, type: string, from: Iso31663From, to: Array.<Iso31663To>}} Iso31663
 *
 * @typedef {{state: string, alpha2: string, alpha3: string, numeric?: string, name: string}} Iso31663From
 *
 * @typedef {{state: string, alpha2: string, alpha3: string, numeric: string, name: string}} Iso31663To
 */

/** @type {Array.<Assigned>} */
var assigned = []
/** @type {Array.<Iso31661>} */
var iso31661 = []
/** @type {Array.<Iso31662>} */
var iso31662 = []
/** @type {Array.<Iso31663>} */
var iso31663 = []

Promise.resolve()
  // ISO 3166-1:
  .then(() => fetch(iso31661Main))
  .then(textIfSuccessful)
  .then((doc) => {
    var tree = html.parse(doc)

    var table = selectAll('table.wikitable', tree)[1]
    var rows = selectAll('tr', table)

    rows.forEach(
      /** @param {Element} row **/
      function (row) {
        /** @type {Element[]} **/
        var cells = selectAll('td', row)
        var [name, alpha2, alpha3, numeric] = cells.map(cleanNode)

        if (!name) {
          return
        }

        assigned.push({name, alpha2, alpha3, numeric})
      }
    )
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

    /**
     * @typedef {{state: string, alpha2: string, note: string}} Entry
     */

    /** @type {Element} */
    var table = selectAll('table.wikitable', tree)[1]
    /** @type {Element[]} */
    var cells = selectAll('td', table)
    /** @type {Entry[]} */
    var entries = []

    cells.forEach((d) => {
      var alpha2 = cleanNode(d)
      var title = String(d.properties.title)
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
    var codes = iso31661.filter((d) => d.state === 'assigned')

    return pMap(codes, map, {concurrency: 1})

    /**
     * @param {Iso31661} d
     */
    function map(d) {
      return new Promise((resolve) => {
        setTimeout(resolve, 1000)
      })
        .then(() => fetch(iso31662Base + d.alpha2))
        .then(textIfSuccessful)
        .then((doc) => {
          var tree = html.parse(doc)
          var prefix = d.alpha2 + '-'
          /** @type {Element[]} */
          var tables = selectAll('table.wikitable', tree)
          var tableLength = tables.length
          var tableIndex = -1
          var found = false
          /** @type {Object.<string, Iso31662>} */
          var byCode = {}
          /** @type {string[]} */
          var headers
          /** @type {number[]} */
          var headerSpans
          /** @type {number} */
          var columnIndex
          /** @type {Element} */
          var table
          /** @type {Element[]} */
          var rows
          /** @type {number} */
          var rowIndex
          /** @type {number} */
          var rowLength
          /** @type {number} */
          var cellIndex
          /** @type {number} */
          var cellLength
          /** @type {Element[]} */
          var cellNodes
          /** @type {string[]} */
          var cells
          /** @type {Element} */
          var row
          /** @type {Element} */
          var cellNode
          /** @type {string} */
          var cell
          /** @type {string} */
          var field
          /** @type {string} */
          var column
          /** @type {Iso31662} */
          var result
          /** @type {RegExpMatchArray} */
          var match
          /** @type {string} */
          var key

          while (++tableIndex < tableLength) {
            table = tables[tableIndex]
            headers = []
            headerSpans = []
            rows = selectAll('tr', table)
            rowIndex = 0
            rowLength = rows.length

            while (rowIndex < rowLength) {
              row = rows[rowIndex]
              cellNodes = selectAll('th', row)
              cellLength = cellNodes.length

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

                cellNode = cellNodes[cellIndex]

                if (cellNode.properties.rowSpan) {
                  headerSpans[columnIndex] =
                    Number.parseInt(String(cellNode.properties.rowSpan), 10) - 1
                }

                if (cellNode.properties.colSpan) {
                  columnIndex += Number.parseInt(
                    String(cellNode.properties.colSpan),
                    10
                  )
                } else {
                  headers[columnIndex] = cleanNode(cellNode).toLowerCase()
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
              cells = selectAll('td', row).map(cleanNode)
              cellLength = cells.length

              if (cellLength === 0) {
                console.warn('Empty row', d.alpha2)
                continue
              }

              result = {code: '', name: ''}
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
                  pick(d),
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
  .then(() => fetch(iso31663Main))
  .then(textIfSuccessful)
  .then((doc) => {
    var tree = html.parse(doc)
    /** @type {Element} */
    var table = selectAll('table.wikitable', tree)[0]
    /** @type {Element[]} */
    var rows = selectAll('tr', table)

    var types = {
      merge: /^merged into /i,
      change: /^name changed to /i,
      split: /^divided into: /i
    }

    rows.forEach(function (row) {
      // Exit if there is no row data.
      if (!select('td', row)) {
        return
      }

      /** @type {Element[]} */
      var cells = selectAll('th, td', row)
      var [alpha4, name, before, , after] = cells.map(cleanNode)
      /** @type {string} */
      var kind = null
      var lastIndex = 0
      var re = /\([A-Z]{2}, [A-Z]{3}, (\d{3}|-)\)/g
      /** @type {string} */
      var key
      /** @type {RegExpMatchArray} */
      var match
      /** @type {string} */
      var alpha2
      /** @type {string} */
      var alpha3
      /** @type {string} */
      var numeric
      /** @type {Iso31663To[]} */
      var changeTo = []

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
      /** @type {Array.<Iso31663From|Iso31663To>} */
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

    /** @type {Array.<Assigned>} */
    var iso31661Assigned = []
    /** @type {Array.<Reserved>} */
    var iso31661Reserved = []
    /** @type {Object.<string, string>} */
    var a2ToA3 = {}
    /** @type {Object.<string, string>} */
    var a2ToN = {}
    /** @type {Object.<string, string[]>} */
    var a2To2 = {}
    /** @type {Object.<string, string>} */
    var a3ToA2 = {}
    /** @type {Object.<string, string>} */
    var nToA2 = {}

    iso31661.forEach((d) => {
      if (d.state === 'assigned') {
        iso31661Assigned.push({name: '', ...d})
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

    /**
     * @param {string} name
     * @param {string} id
     * @param {unknown} data
     * @returns {void}
     */
    function write(name, id, data) {
      fs.writeFile(
        name + '.js',
        'export var ' + id + ' = ' + JSON.stringify(data, null, 2) + '\n',
        bail
      )
    }
  })
  .catch(
    /** @param {Error} error */ (error) => {
      console.log('Error:', error)
    }
  )

/**
 * @param {Iso31661|Iso31662|Iso31663} a
 * @param {Iso31661|Iso31662|Iso31663} b
 * @returns {number}
 */
function sort(a, b) {
  return pick(a).localeCompare(pick(b))
}

/**
 * @param {import('node-fetch').Response} response
 * @returns {Promise.<string>}
 */
function textIfSuccessful(response) {
  if (response.status !== 200) {
    throw new Error('Unsuccessful response: `' + response.status + '`')
  }

  return response.text()
}

/**
 * @param {Iso31661|Iso31662|Iso31663} d
 * @returns {string}
 */
function pick(d) {
  // @ts-ignore TS making life difficult.
  return d.alpha2 || d.code || d.alpha4
}

/**
 * @param {Element} d
 * @returns {string}
 */
function cleanNode(d) {
  return clean(toString(d))
}

/**
 * @param {string} d
 * @returns {string}
 */
function clean(d) {
  return d
    .replace(/\[[^\]]+]/g, '')
    .replace(/\(i\.e\., [^\]]+\)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}
