/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Root} Root
 */

import {unified} from 'unified'
import rehypeFormat from 'rehype-format'
import {h} from 'hastscript'
import {toHtml} from 'hast-util-to-html'
import {u} from 'unist-builder'
import {headingRange} from 'mdast-util-heading-range'
import {iso31661Reserved} from './1-reserved.js'
import {iso31661} from './1.js'

export default function table() {
  /**
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return (tree) => {
    const a = 65
    const z = 90

    /** @type {Record<string, string>} */
    const a2ToState = {}
    /** @type {Record<string, string>} */
    const a2ToName = {}

    let index = -1
    while (++index < iso31661.length) {
      const d = iso31661[index]
      a2ToState[d.alpha2] = d.state
      a2ToName[d.alpha2] = d.name
    }

    index = -1
    while (++index < iso31661Reserved.length) {
      const d = iso31661Reserved[index]
      a2ToState[d.alpha2] = d.state
      a2ToName[d.alpha2] = d.name
    }

    headingRange(tree, 'matrix', (start, _, end) => {
      const head = [h('th')]
      /** @type {Array<import('hast').Element>} */
      const rows = []
      /** @type {Array<import('hast').Element>} */
      let cells
      /** @type {number} */
      let x = a
      /** @type {number} */
      let y
      /** @type {import('hast').Element|string} */
      let code
      /** @type {string} */
      let state
      /** @type {string} */
      let title

      while (x <= z) {
        y = a
        head.push(h('th', String.fromCodePoint(x)))
        cells = [h('th', {scope: 'row'}, String.fromCodePoint(x))]

        while (y <= z) {
          code = String.fromCodePoint(x) + String.fromCodePoint(y)
          state = a2ToState[code]
          title = a2ToName[code]

          switch (state) {
            case 'assigned': {
              code = h(
                'a',
                {href: 'https://en.wikipedia.org/wiki/ISO_3166-1:' + code},
                code
              )
              break
            }

            case 'exceptionally-reserved':
            case 'transitionally-reserved':
            case 'indeterminately-reserved':
            case 'formerly-assigned': {
              code = h('s', code)
              break
            }

            default: {
              break
            }
          }

          cells.push(h('td', {title}, code))
          ++y
        }

        rows.push(h('tr', cells))
        ++x
      }

      const node = /** @type {Element} */ (
        unified()
          .use(rehypeFormat)
          .runSync(
            // @ts-expect-error: fine to pass an element.
            h('details', [
              h('summary', 'Show ISO 3166-1 alpha-2 code matrix'),
              h('table', [h('thead', h('tr', head)), h('tbody', rows)])
            ])
          )
      )

      const html = toHtml(node)

      return [
        start,
        u('html', '<!--lint ignore no-html-->'),
        u('html', html),
        end
      ]
    })
  }
}
