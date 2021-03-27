import unified from 'unified'
import format from 'rehype-format'
import stringify from 'rehype-stringify'
import h from 'hastscript'
import u from 'unist-builder'
import range from 'mdast-util-heading-range'
import {iso31661Reserved} from './1-reserved.js'
import {iso31661} from './1.js'

var processor = unified().use(format).use(stringify)

export default function table() {
  return transform

  function transform(tree) {
    var fromCode = String.fromCharCode
    var a = 65
    var z = 90

    var a2ToState = {}
    var a2ToName = {}
    iso31661.concat(iso31661Reserved).forEach((d) => {
      a2ToState[d.alpha2] = d.state
      a2ToName[d.alpha2] = d.name
    })

    range(tree, 'matrix', onrun)

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

          cells.push(h('td', {title}, code))
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
  }
}
