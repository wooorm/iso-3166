/**
 * @typedef ISO31662Entry
 *   Object representing a subdivision.
 * @property {string} code
 *   ISO 3166-2 code (example: `'GB-BFS'`)
 * @property {string} parent
 *    ISO 3166-1 alpha-2 code or ISO 3166-2 code (example: `'GB'`)
 * @property {string} name
 *   Name (example: `'Belfast'`)
 */
/**
 * List of subdivisions.
 *
 * @type {Array<ISO31662Entry>}
 */
export const iso31662: Array<ISO31662Entry>;
/**
 * Object representing a subdivision.
 */
export type ISO31662Entry = {
    /**
     *   ISO 3166-2 code (example: `'GB-BFS'`)
     */
    code: string;
    /**
     *    ISO 3166-1 alpha-2 code or ISO 3166-2 code (example: `'GB'`)
     */
    parent: string;
    /**
     *   Name (example: `'Belfast'`)
     */
    name: string;
};
