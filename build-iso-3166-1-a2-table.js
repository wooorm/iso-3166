import unified from 'unified'
// @ts-ignore To do: remove when types are added
import format from 'rehype-format'
import stringify from 'rehype-stringify'
import h from 'hastscript'
import u from 'unist-builder'
// @ts-ignore To do: remove when types are added
import range from 'mdast-util-heading-range'
import {iso31661Reserved} from './1-reserved.js'
import {iso31661} from './1.js'

var processor = unified().use(format).use(stringify)

export default function table() {
  return transform

  /**
   * @param {import('mdast').Root} tree
   */
  function transform(tree) {
    var a = 65
    var z = 90

    var a2ToState = {}
    var a2ToName = {}
    iso31661
      .map(({alpha2, state, name}) => ({alpha2, state, name}))
      .concat(
        iso31661Reserved.map(({alpha2, state, name}) => ({alpha2, state, name}))
      )
      .forEach((d) => {
        a2ToState[d.alpha2] = d.state
        a2ToName[d.alpha2] = d.name
      })

    range(tree, 'matrix', onrun)

    /**
     * @param {import('unist').Node?} start
     * @param {import('unist').Node[]} _
     * @param {import('unist').Node?} end
     */
    function onrun(start, _, end) {
      var head = [h('th')]
      /** @type {import('hast').Element[]} */
      var rows = []
      /** @type {import('hast').Element[]} */
      var cells
      /** @type {number} */
      var x = a
      /** @type {number} */
      var y
      /** @type {import('hast').Element|string} */
      var code
      /** @type {string} */
      var state
      /** @type {string} */
      var title

      while (x <= z) {
        y = a
        head.push(h('th', String.fromCharCode(x)))
        cells = [h('th', {scope: 'row'}, String.fromCharCode(x))]

        while (y <= z) {
          code = String.fromCharCode(x) + String.fromCharCode(y)
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
