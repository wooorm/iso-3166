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
export const iso31661Reserved = [
  {
    state: 'exceptionally-reserved',
    alpha2: 'AC',
    name: 'Ascension Island'
  },
  {
    state: 'transitionally-reserved',
    alpha2: 'AN',
    name: 'Netherlands Antilles'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'AP',
    name: 'African Regional Industrial Property Organization'
  },
  {
    state: 'transitionally-reserved',
    alpha2: 'BU',
    name: 'Burma'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'BX',
    name: 'Benelux Trademarks and Designs Office'
  },
  {
    state: 'exceptionally-reserved',
    alpha2: 'CP',
    name: 'Clipperton Island'
  },
  {
    state: 'exceptionally-reserved',
    alpha2: 'CQ',
    name: 'Island of Sark'
  },
  {
    state: 'transitionally-reserved',
    alpha2: 'CS',
    name: 'Serbia and Montenegro'
  },
  {
    state: 'formerly-assigned',
    alpha2: 'CT',
    name: 'Canton and Enderbury Islands'
  },
  {
    state: 'formerly-assigned',
    alpha2: 'DD',
    name: 'German Democratic Republic'
  },
  {
    state: 'exceptionally-reserved',
    alpha2: 'DG',
    name: 'Diego Garcia'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'DY',
    name: 'Benin'
  },
  {
    state: 'exceptionally-reserved',
    alpha2: 'EA',
    name: 'Ceuta, Melilla'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'EF',
    name: 'Union of Countries under the European Community Patent Convention'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'EM',
    name: 'European Trademark Office'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'EP',
    name: 'European Patent Organization'
  },
  {
    state: 'exceptionally-reserved',
    alpha2: 'EU',
    name: 'European Union'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'EV',
    name: 'Eurasian Patent Organization'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'EW',
    name: 'Estonia'
  },
  {
    state: 'exceptionally-reserved',
    alpha2: 'EZ',
    name: 'Eurozone'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'FL',
    name: 'Liechtenstein'
  },
  {
    state: 'formerly-assigned',
    alpha2: 'FQ',
    name: 'French Southern and Antarctic Territories'
  },
  {
    state: 'exceptionally-reserved',
    alpha2: 'FX',
    name: 'France, Metropolitan'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'GC',
    name: 'Patent Office of the Cooperation Council for the Arab States of the Gulf'
  },
  {
    state: 'formerly-assigned',
    alpha2: 'HV',
    name: 'Upper Volta'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'IB',
    name: 'International Bureau of WIPO'
  },
  {
    state: 'exceptionally-reserved',
    alpha2: 'IC',
    name: 'Canary Islands'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'JA',
    name: 'Jamaica'
  },
  {
    state: 'formerly-assigned',
    alpha2: 'JT',
    name: 'Johnston Island'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'LF',
    name: 'Libya Fezzan'
  },
  {
    state: 'formerly-assigned',
    alpha2: 'MI',
    name: 'Midway Islands'
  },
  {
    state: 'formerly-assigned',
    alpha2: 'NH',
    name: 'New Hebrides'
  },
  {
    state: 'formerly-assigned',
    alpha2: 'NQ',
    name: 'Dronning Maud Land'
  },
  {
    state: 'transitionally-reserved',
    alpha2: 'NT',
    name: 'Neutral Zone'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'OA',
    name: 'African Intellectual Property Organization'
  },
  {
    state: 'formerly-assigned',
    alpha2: 'PC',
    name: 'Pacific Islands'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'PI',
    name: 'Philippines'
  },
  {
    state: 'formerly-assigned',
    alpha2: 'PU',
    name: 'United States Miscellaneous Pacific Islands'
  },
  {
    state: 'formerly-assigned',
    alpha2: 'PZ',
    name: 'Panama Canal Zone'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'RA',
    name: 'Argentina'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'RB',
    name: 'Bolivia'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'RC',
    name: 'China'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'RH',
    name: 'Haiti'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'RI',
    name: 'Indonesia'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'RL',
    name: 'Lebanon'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'RM',
    name: 'Madagascar'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'RN',
    name: 'Niger'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'RP',
    name: 'Philippines'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'SF',
    name: 'Finland'
  },
  {
    state: 'exceptionally-reserved',
    alpha2: 'SU',
    name: 'USSR'
  },
  {
    state: 'exceptionally-reserved',
    alpha2: 'TA',
    name: 'Tristan da Cunha'
  },
  {
    state: 'transitionally-reserved',
    alpha2: 'TP',
    name: 'East Timor'
  },
  {
    state: 'exceptionally-reserved',
    alpha2: 'UK',
    name: 'United Kingdom'
  },
  {
    state: 'exceptionally-reserved',
    alpha2: 'UN',
    name: 'United Nations'
  },
  {
    state: 'formerly-assigned',
    alpha2: 'VD',
    name: 'Viet-Nam, Democratic Republic of'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'WG',
    name: 'Grenada'
  },
  {
    state: 'formerly-assigned',
    alpha2: 'WK',
    name: 'Wake Island'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'WL',
    name: 'Saint Lucia'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'WO',
    name: 'World Intellectual Property Organization'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'WV',
    name: 'Saint Vincent'
  },
  {
    state: 'formerly-assigned',
    alpha2: 'YD',
    name: 'Yemen, Democratic'
  },
  {
    state: 'transitionally-reserved',
    alpha2: 'YU',
    name: 'Yugoslavia'
  },
  {
    state: 'indeterminately-reserved',
    alpha2: 'YV',
    name: 'Venezuela'
  },
  {
    state: 'transitionally-reserved',
    alpha2: 'ZR',
    name: 'Zaire'
  }
]
