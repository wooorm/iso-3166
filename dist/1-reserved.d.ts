/**
 * @typedef ISO31661ReservedEntry
 *   Object representing a reserved country.
 * @property {'indeterminately-reserved'|'exceptionally-reserved'|'transitionally-reserved'|'formerly-assigned'} state
 *   State (example: `'assigned'`)
 * @property {string} alpha2
 *   ISO 3166-1 alpha-2 code (example: `'GB'`)
 * @property {string} name
 *   Name (example: `'United Kingdom of Great Britain and Northern Ireland'`)
 */
/**
 * List of reserved country codes.
 *
 * @type {Array<ISO31661ReservedEntry>}
 */
export const iso31661Reserved: Array<ISO31661ReservedEntry>;
/**
 * Object representing a reserved country.
 */
export type ISO31661ReservedEntry = {
    /**
     *   State (example: `'assigned'`)
     */
    state: 'indeterminately-reserved' | 'exceptionally-reserved' | 'transitionally-reserved' | 'formerly-assigned';
    /**
     *   ISO 3166-1 alpha-2 code (example: `'GB'`)
     */
    alpha2: string;
    /**
     *   Name (example: `'United Kingdom of Great Britain and Northern Ireland'`)
     */
    name: string;
};
