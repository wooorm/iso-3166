/**
 * @typedef ISO31661AssignedEntry
 *   Object representing an assigned country.
 * @property {'assigned'} state
 *   State (example: `'assigned'`)
 * @property {string} alpha2
 *   ISO 3166-1 alpha-2 code (example: `'GB'`)
 * @property {string} alpha3
 *   ISO 3166-1 alpha-3 code (example: `'GBR'`)
 * @property {string} numeric
 *   ISO 3166-1 numeric (UN M49) code (example: `'826'`)
 * @property {string} name
 *   Name (example: `'United Kingdom of Great Britain and Northern Ireland'`)
 */
/**
 * List of assigned countries.
 *
 * @type {Array<ISO31661AssignedEntry>}
 */
export declare const iso31661: {
    name: string;
    state: string;
    alpha2: string;
    alpha3: string;
    numeric: string;
}[];
