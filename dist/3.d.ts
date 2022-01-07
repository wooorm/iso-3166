/**
 * @typedef {'merge'|'change'|'split'} Type
 *
 * @typedef ISO31661FromEntry
 * @property {'formerly-assigned'} state
 * @property {string} alpha2
 * @property {string} alpha3
 * @property {string} [numeric]
 * @property {string} name
 *
 * @typedef ISO31661ToEntry
 * @property {'formerly-assigned'|'assigned'} state
 * @property {string} alpha2
 * @property {string} alpha3
 * @property {string} numeric
 * @property {string} name
 *
 * @typedef ISO31663Entry
 *   Object representing a former country.
 * @property {string} alpha4
 *   ISO 3166-3 alpha-4 code (example: `ANHH`)
 * @property {Type} type
 *   Type of revision (example: `'split'`)
 * @property {ISO31661FromEntry} from
 *   Country before revision
 * @property {Array<ISO31661ToEntry>} to
 *   List of countries after revision
 */
/**
 * List of former countries.
 *
 * @type {Array<ISO31663Entry>}
 */
export const iso31663: Array<ISO31663Entry>;
export type Type = 'merge' | 'change' | 'split';
export type ISO31661FromEntry = {
    state: 'formerly-assigned';
    alpha2: string;
    alpha3: string;
    numeric?: string | undefined;
    name: string;
};
export type ISO31661ToEntry = {
    state: 'formerly-assigned' | 'assigned';
    alpha2: string;
    alpha3: string;
    numeric: string;
    name: string;
};
/**
 * Object representing a former country.
 */
export type ISO31663Entry = {
    /**
     * ISO 3166-3 alpha-4 code (example: `ANHH`)
     */
    alpha4: string;
    /**
     * Type of revision (example: `'split'`)
     */
    type: Type;
    /**
     * Country before revision
     */
    from: ISO31661FromEntry;
    /**
     * List of countries after revision
     */
    to: Array<ISO31661ToEntry>;
};
