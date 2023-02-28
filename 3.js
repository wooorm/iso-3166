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
export const iso31663 = [
  {
    alpha4: 'AIDJ',
    type: 'change',
    from: {
      state: 'formerly-assigned',
      alpha2: 'AI',
      alpha3: 'AFI',
      name: 'French Afars and Issas'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'DJ',
        alpha3: 'DJI',
        numeric: '262',
        name: 'Djibouti'
      }
    ]
  },
  {
    alpha4: 'ANHH',
    type: 'split',
    from: {
      state: 'formerly-assigned',
      alpha2: 'AN',
      alpha3: 'ANT',
      numeric: '530',
      name: 'Netherlands Antilles'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'BQ',
        alpha3: 'BES',
        numeric: '535',
        name: 'Bonaire, Sint Eustatius and Saba'
      },
      {
        state: 'assigned',
        alpha2: 'CW',
        alpha3: 'CUW',
        numeric: '531',
        name: 'Curaçao'
      },
      {
        state: 'assigned',
        alpha2: 'SX',
        alpha3: 'SXM',
        numeric: '534',
        name: 'Sint Maarten (Dutch part)'
      }
    ]
  },
  {
    alpha4: 'BQAQ',
    type: 'merge',
    from: {
      state: 'formerly-assigned',
      alpha2: 'BQ',
      alpha3: 'ATB',
      name: 'British Antarctic Territory'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'AQ',
        alpha3: 'ATA',
        numeric: '010',
        name: 'Antarctica'
      }
    ]
  },
  {
    alpha4: 'BUMM',
    type: 'change',
    from: {
      state: 'formerly-assigned',
      alpha2: 'BU',
      alpha3: 'BUR',
      numeric: '104',
      name: 'Burma'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'MM',
        alpha3: 'MMR',
        numeric: '104',
        name: 'Myanmar'
      }
    ]
  },
  {
    alpha4: 'BYAA',
    type: 'change',
    from: {
      state: 'formerly-assigned',
      alpha2: 'BY',
      alpha3: 'BYS',
      numeric: '112',
      name: 'Byelorussian SSR'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'BY',
        alpha3: 'BLR',
        numeric: '112',
        name: 'Belarus'
      }
    ]
  },
  {
    alpha4: 'CSHH',
    type: 'split',
    from: {
      state: 'formerly-assigned',
      alpha2: 'CS',
      alpha3: 'CSK',
      numeric: '200',
      name: 'Czechoslovakia'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'CZ',
        alpha3: 'CZE',
        numeric: '203',
        name: 'Czechia'
      },
      {
        state: 'assigned',
        alpha2: 'SK',
        alpha3: 'SVK',
        numeric: '703',
        name: 'Slovakia'
      }
    ]
  },
  {
    alpha4: 'CSXX',
    type: 'split',
    from: {
      state: 'formerly-assigned',
      alpha2: 'CS',
      alpha3: 'SCG',
      numeric: '891',
      name: 'Serbia and Montenegro'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'ME',
        alpha3: 'MNE',
        numeric: '499',
        name: 'Montenegro'
      },
      {
        state: 'assigned',
        alpha2: 'RS',
        alpha3: 'SRB',
        numeric: '688',
        name: 'Serbia'
      }
    ]
  },
  {
    alpha4: 'CTKI',
    type: 'merge',
    from: {
      state: 'formerly-assigned',
      alpha2: 'CT',
      alpha3: 'CTE',
      numeric: '128',
      name: 'Canton and Enderbury Islands'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'KI',
        alpha3: 'KIR',
        numeric: '296',
        name: 'Kiribati'
      }
    ]
  },
  {
    alpha4: 'DDDE',
    type: 'merge',
    from: {
      state: 'formerly-assigned',
      alpha2: 'DD',
      alpha3: 'DDR',
      numeric: '278',
      name: 'German Democratic Republic'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'DE',
        alpha3: 'DEU',
        numeric: '276',
        name: 'Germany'
      }
    ]
  },
  {
    alpha4: 'DYBJ',
    type: 'change',
    from: {
      state: 'formerly-assigned',
      alpha2: 'DY',
      alpha3: 'DHY',
      name: 'Dahomey'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'BJ',
        alpha3: 'BEN',
        numeric: '204',
        name: 'Benin'
      }
    ]
  },
  {
    alpha4: 'FQHH',
    type: 'split',
    from: {
      state: 'formerly-assigned',
      alpha2: 'FQ',
      alpha3: 'ATF',
      name: 'French Southern and Antarctic Territories'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'AQ',
        alpha3: 'ATA',
        numeric: '010',
        name: 'Antarctica'
      }
    ]
  },
  {
    alpha4: 'FXFR',
    type: 'merge',
    from: {
      state: 'formerly-assigned',
      alpha2: 'FX',
      alpha3: 'FXX',
      numeric: '249',
      name: 'France, Metropolitan'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'FR',
        alpha3: 'FRA',
        numeric: '250',
        name: 'France'
      }
    ]
  },
  {
    alpha4: 'GEHH',
    type: 'change',
    from: {
      state: 'formerly-assigned',
      alpha2: 'GE',
      alpha3: 'GEL',
      name: 'Gilbert Islands'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'KI',
        alpha3: 'KIR',
        numeric: '296',
        name: 'Kiribati'
      }
    ]
  },
  {
    alpha4: 'HVBF',
    type: 'change',
    from: {
      state: 'formerly-assigned',
      alpha2: 'HV',
      alpha3: 'HVO',
      numeric: '854',
      name: 'Upper Volta'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'BF',
        alpha3: 'BFA',
        numeric: '854',
        name: 'Burkina Faso'
      }
    ]
  },
  {
    alpha4: 'JTUM',
    type: 'merge',
    from: {
      state: 'formerly-assigned',
      alpha2: 'JT',
      alpha3: 'JTN',
      numeric: '396',
      name: 'Johnston Island'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'UM',
        alpha3: 'UMI',
        numeric: '581',
        name: 'United States Minor Outlying Islands'
      }
    ]
  },
  {
    alpha4: 'MIUM',
    type: 'merge',
    from: {
      state: 'formerly-assigned',
      alpha2: 'MI',
      alpha3: 'MID',
      numeric: '488',
      name: 'Midway Islands'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'UM',
        alpha3: 'UMI',
        numeric: '581',
        name: 'United States Minor Outlying Islands'
      }
    ]
  },
  {
    alpha4: 'NHVU',
    type: 'change',
    from: {
      state: 'formerly-assigned',
      alpha2: 'NH',
      alpha3: 'NHB',
      name: 'New Hebrides'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'VU',
        alpha3: 'VUT',
        numeric: '548',
        name: 'Vanuatu'
      }
    ]
  },
  {
    alpha4: 'NQAQ',
    type: 'merge',
    from: {
      state: 'formerly-assigned',
      alpha2: 'NQ',
      alpha3: 'ATN',
      numeric: '216',
      name: 'Dronning Maud Land'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'AQ',
        alpha3: 'ATA',
        numeric: '010',
        name: 'Antarctica'
      }
    ]
  },
  {
    alpha4: 'NTHH',
    type: 'split',
    from: {
      state: 'formerly-assigned',
      alpha2: 'NT',
      alpha3: 'NTZ',
      numeric: '536',
      name: 'Neutral Zone'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'IQ',
        alpha3: 'IRQ',
        numeric: '368',
        name: 'Iraq'
      },
      {
        state: 'assigned',
        alpha2: 'SA',
        alpha3: 'SAU',
        numeric: '682',
        name: 'Saudi Arabia'
      }
    ]
  },
  {
    alpha4: 'PCHH',
    type: 'split',
    from: {
      state: 'formerly-assigned',
      alpha2: 'PC',
      alpha3: 'PCI',
      numeric: '582',
      name: 'Pacific Islands (Trust Territory)'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'MH',
        alpha3: 'MHL',
        numeric: '584',
        name: 'Marshall Islands'
      },
      {
        state: 'assigned',
        alpha2: 'FM',
        alpha3: 'FSM',
        numeric: '583',
        name: 'Micronesia (Federated States of)'
      },
      {
        state: 'assigned',
        alpha2: 'MP',
        alpha3: 'MNP',
        numeric: '580',
        name: 'Northern Mariana Islands'
      },
      {
        state: 'assigned',
        alpha2: 'PW',
        alpha3: 'PLW',
        numeric: '585',
        name: 'Palau'
      }
    ]
  },
  {
    alpha4: 'PUUM',
    type: 'merge',
    from: {
      state: 'formerly-assigned',
      alpha2: 'PU',
      alpha3: 'PUS',
      numeric: '849',
      name: 'United States Miscellaneous Pacific Islands'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'UM',
        alpha3: 'UMI',
        numeric: '581',
        name: 'United States Minor Outlying Islands'
      }
    ]
  },
  {
    alpha4: 'PZPA',
    type: 'merge',
    from: {
      state: 'formerly-assigned',
      alpha2: 'PZ',
      alpha3: 'PCZ',
      name: 'Panama Canal Zone'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'PA',
        alpha3: 'PAN',
        numeric: '591',
        name: 'Panama'
      }
    ]
  },
  {
    alpha4: 'RHZW',
    type: 'change',
    from: {
      state: 'formerly-assigned',
      alpha2: 'RH',
      alpha3: 'RHO',
      name: 'Southern Rhodesia'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'ZW',
        alpha3: 'ZWE',
        numeric: '716',
        name: 'Zimbabwe'
      }
    ]
  },
  {
    alpha4: 'SKIN',
    type: 'merge',
    from: {
      state: 'formerly-assigned',
      alpha2: 'SK',
      alpha3: 'SKM',
      name: 'Sikkim'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'IN',
        alpha3: 'IND',
        numeric: '356',
        name: 'India'
      }
    ]
  },
  {
    alpha4: 'SUHH',
    type: 'split',
    from: {
      state: 'formerly-assigned',
      alpha2: 'SU',
      alpha3: 'SUN',
      numeric: '810',
      name: 'USSR'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'AM',
        alpha3: 'ARM',
        numeric: '051',
        name: 'Armenia'
      },
      {
        state: 'assigned',
        alpha2: 'AZ',
        alpha3: 'AZE',
        numeric: '031',
        name: 'Azerbaijan'
      },
      {
        state: 'assigned',
        alpha2: 'EE',
        alpha3: 'EST',
        numeric: '233',
        name: 'Estonia'
      },
      {
        state: 'assigned',
        alpha2: 'GE',
        alpha3: 'GEO',
        numeric: '268',
        name: 'Georgia'
      },
      {
        state: 'assigned',
        alpha2: 'KZ',
        alpha3: 'KAZ',
        numeric: '398',
        name: 'Kazakhstan'
      },
      {
        state: 'assigned',
        alpha2: 'KG',
        alpha3: 'KGZ',
        numeric: '417',
        name: 'Kyrgyzstan'
      },
      {
        state: 'assigned',
        alpha2: 'LV',
        alpha3: 'LVA',
        numeric: '428',
        name: 'Latvia'
      },
      {
        state: 'assigned',
        alpha2: 'LT',
        alpha3: 'LTU',
        numeric: '440',
        name: 'Lithuania'
      },
      {
        state: 'assigned',
        alpha2: 'MD',
        alpha3: 'MDA',
        numeric: '498',
        name: 'Moldova, Republic of'
      },
      {
        state: 'assigned',
        alpha2: 'RU',
        alpha3: 'RUS',
        numeric: '643',
        name: 'Russian Federation'
      },
      {
        state: 'assigned',
        alpha2: 'TJ',
        alpha3: 'TJK',
        numeric: '762',
        name: 'Tajikistan'
      },
      {
        state: 'assigned',
        alpha2: 'TM',
        alpha3: 'TKM',
        numeric: '795',
        name: 'Turkmenistan'
      },
      {
        state: 'assigned',
        alpha2: 'UZ',
        alpha3: 'UZB',
        numeric: '860',
        name: 'Uzbekistan'
      }
    ]
  },
  {
    alpha4: 'TPTL',
    type: 'change',
    from: {
      state: 'formerly-assigned',
      alpha2: 'TP',
      alpha3: 'TMP',
      numeric: '626',
      name: 'East Timor'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'TL',
        alpha3: 'TLS',
        numeric: '626',
        name: 'Timor-Leste'
      }
    ]
  },
  {
    alpha4: 'VDVN',
    type: 'merge',
    from: {
      state: 'formerly-assigned',
      alpha2: 'VD',
      alpha3: 'VDR',
      name: 'Viet-Nam, Democratic Republic of'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'VN',
        alpha3: 'VNM',
        numeric: '704',
        name: 'Viet Nam'
      }
    ]
  },
  {
    alpha4: 'WKUM',
    type: 'merge',
    from: {
      state: 'formerly-assigned',
      alpha2: 'WK',
      alpha3: 'WAK',
      numeric: '872',
      name: 'Wake Island'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'UM',
        alpha3: 'UMI',
        numeric: '581',
        name: 'United States Minor Outlying Islands'
      }
    ]
  },
  {
    alpha4: 'YDYE',
    type: 'merge',
    from: {
      state: 'formerly-assigned',
      alpha2: 'YD',
      alpha3: 'YMD',
      numeric: '720',
      name: 'Yemen, Democratic'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'YE',
        alpha3: 'YEM',
        numeric: '887',
        name: 'Yemen'
      }
    ]
  },
  {
    alpha4: 'YUCS',
    type: 'change',
    from: {
      state: 'formerly-assigned',
      alpha2: 'YU',
      alpha3: 'YUG',
      numeric: '891',
      name: 'Yugoslavia'
    },
    to: [
      {
        state: 'formerly-assigned',
        alpha2: 'CS',
        alpha3: 'SCG',
        numeric: '891',
        name: 'Serbia and Montenegro'
      }
    ]
  },
  {
    alpha4: 'ZRCD',
    type: 'change',
    from: {
      state: 'formerly-assigned',
      alpha2: 'ZR',
      alpha3: 'ZAR',
      numeric: '180',
      name: 'Zaire'
    },
    to: [
      {
        state: 'assigned',
        alpha2: 'CD',
        alpha3: 'COD',
        numeric: '180',
        name: 'Congo, Democratic Republic of the'
      }
    ]
  }
]
