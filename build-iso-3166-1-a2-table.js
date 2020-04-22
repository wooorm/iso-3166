var unified = require('unified')
var format = require('rehype-format')
var stringify = require('rehype-stringify')
var h = require('hastscript')
var u = require('unist-builder')
var range = require('mdast-util-heading-range')
var i31661R = require('./1-reserved.json')
var i31661 = require('.')

module.exports = table

var fromCode = String.fromCharCode
var a = 65
var z = 90

var a2ToState = {}
var a2ToName = {}
i31661.concat(i31661R).forEach((d) => {
  a2ToState[d.alpha2] = d.state
  a2ToName[d.alpha2] = d.name
})

var processor = unified().use(format).use(stringify)

function table() {
  return transform
}

function transform(tree) {
  range(tree, 'matrix', onrun)
}

function onrun(start, nodes, end) {
  var head = [h('th')]
  var rows = []
  var cells
  var x = a
  var y
  var code
  var state
  var title

  while (x <= z) {
    y = a
    head.push(h('th', fromCode(x)))
    cells = [h('th', {scope: 'row'}, fromCode(x))]

    while (y <= z) {
      code = fromCode(x) + fromCode(y)
      state = a2ToState[code]
      title = a2ToName[code]

      switch (state) {
        case 'assigned':
          code = h(
            'a',
            {href: 'https://en.wikipedia.org/wiki/ISO_3166-1:' + code},
            code
          )
          break
        case 'exceptionally-reserved':
        case 'transitionally-reserved':
        case 'indeterminately-reserved':
        case 'formerly-assigned':
          code = h('s', code)
          break
        default:
          break
      }

      cells.push(h('td', {title: title}, code))
      ++y
    }

    rows.push(h('tr', cells))
    ++x
  }

  var node = processor.runSync(
    h('details', [
      h('summary', 'ISO 3166-1 alpha-2 code matrix'),
      h('table', [h('thead', h('tr', head)), h('tbody', rows)])
    ])
  )

  var html = processor.stringify(node)

  return [start].concat(
    u('html', '<!--lint ignore no-html-->'),
    u('html', html),
    end || []
  )
}
