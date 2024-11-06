const zipFormats = {
  AD: {
    pattern: /^\d{3}$/, // Andorra
    format: "$1",
  },
  AE: {
    pattern: /^\d{5}$/, // United Arab Emirates
    format: "$1",
  },
  AF: {
    pattern: /^\d{4}$/, // Afghanistan
    format: "$1",
  },
  AG: {
    pattern: /^\d{4}$/, // Antigua and Barbuda
    format: "$1",
  },
  AI: {
    pattern: /^\d{4}$/, // Anguilla
    format: "$1",
  },
  AL: {
    pattern: /^\d{4}$/, // Albania
    format: "$1",
  },
  AM: {
    pattern: /^\d{4}$/, // Armenia
    format: "$1",
  },
  AO: {
    pattern: /^\d{6}$/, // Angola
    format: "$1",
  },
  AR: {
    pattern: /^\d{4}$/, // Argentina
    format: "$1",
  },
  AS: {
    pattern: /^\d{5}$/, // American Samoa
    format: "$1",
  },
  AT: {
    pattern: /^\d{4}$/, // Austria
    format: "$1",
  },
  AU: {
    pattern: /^\d{4}$/, // Australia
    format: "$1",
  },
  AW: {
    pattern: /^\d{4}$/, // Aruba
    format: "$1",
  },
  AX: {
    pattern: /^\d{5}$/, // Åland Islands
    format: "$1",
  },
  AZ: {
    pattern: /^\d{4}$/, // Azerbaijan
    format: "$1",
  },
  BA: {
    pattern: /^\d{5}$/, // Bosnia and Herzegovina
    format: "$1",
  },
  BB: {
    pattern: /^\d{5}$/, // Barbados
    format: "$1",
  },
  BD: {
    pattern: /^\d{4}$/, // Bangladesh
    format: "$1",
  },
  BE: {
    pattern: /^\d{4}$/, // Belgium
    format: "$1",
  },
  BF: {
    pattern: /^\d{5}$/, // Burkina Faso
    format: "$1",
  },
  BG: {
    pattern: /^\d{4}$/, // Bulgaria
    format: "$1",
  },
  BH: {
    pattern: /^\d{3}$/, // Bahrain
    format: "$1",
  },
  BI: {
    pattern: /^\d{4}$/, // Burundi
    format: "$1",
  },
  BJ: {
    pattern: /^\d{4}$/, // Benin
    format: "$1",
  },
  BL: {
    pattern: /^\d{5}$/, // Saint Barthélemy
    format: "$1",
  },
  BM: {
    pattern: /^\d{5}$/, // Bermuda
    format: "$1",
  },
  BN: {
    pattern: /^\d{5}$/, // Brunei
    format: "$1",
  },
  BO: {
    pattern: /^\d{4}$/, // Bolivia
    format: "$1",
  },
  BQ: {
    pattern: /^\d{5}$/, // Bonaire, Sint Eustatius, and Saba
    format: "$1",
  },
  BR: {
    pattern: /^\d{5}-\d{3}$/, // Brazil
    format: "$1-$2",
  },
  BS: {
    pattern: /^\d{5}$/, // Bahamas
    format: "$1",
  },
  BT: {
    pattern: /^\d{5}$/, // Bhutan
    format: "$1",
  },
  BV: {
    pattern: /^\d{5}$/, // Bouvet Island
    format: "$1",
  },
  BW: {
    pattern: /^\d{5}$/, // Botswana
    format: "$1",
  },
  BY: {
    pattern: /^\d{6}$/, // Belarus
    format: "$1",
  },
  BZ: {
    pattern: /^\d{5}$/, // Belize
    format: "$1",
  },
  CA: {
    pattern: /^[A-Z]\d[A-Z] \d[A-Z]\d$/, // Canada
    format: "$1 $2",
  },
  CC: {
    pattern: /^\d{4}$/, // Cocos (Keeling) Islands
    format: "$1",
  },
  CD: {
    pattern: /^\d{5}$/, // Democratic Republic of the Congo
    format: "$1",
  },
  CF: {
    pattern: /^\d{5}$/, // Central African Republic
    format: "$1",
  },
  CG: {
    pattern: /^\d{5}$/, // Republic of the Congo
    format: "$1",
  },
  CH: {
    pattern: /^\d{4}$/, // Switzerland
    format: "$1",
  },
  CI: {
    pattern: /^\d{5}$/, // Ivory Coast
    format: "$1",
  },
  CK: {
    pattern: /^\d{4}$/, // Cook Islands
    format: "$1",
  },
  CL: {
    pattern: /^\d{7}$/, // Chile
    format: "$1",
  },
  CM: {
    pattern: /^\d{5}$/, // Cameroon
    format: "$1",
  },
  CN: {
    pattern: /^\d{6}$/, // China
    format: "$1",
  },
  CO: {
    pattern: /^\d{6}$/, // Colombia
    format: "$1",
  },
  CR: {
    pattern: /^\d{5}$/, // Costa Rica
    format: "$1",
  },
  CU: {
    pattern: /^\d{5}$/, // Cuba
    format: "$1",
  },
  CV: {
    pattern: /^\d{4}$/, // Cape Verde
    format: "$1",
  },
  CW: {
    pattern: /^\d{4}$/, // Curaçao
    format: "$1",
  },
  CX: {
    pattern: /^\d{4}$/, // Christmas Island
    format: "$1",
  },
  CY: {
    pattern: /^\d{4}$/, // Cyprus
    format: "$1",
  },
  CZ: {
    pattern: /^(\d{3})\s?(\d{2})$/, // Czech Republic
    format: "$1 $2",
  },
  DE: {
    pattern: /^\d{5}$/, // Germany
    format: "$1",
  },
  DJ: {
    pattern: /^\d{5}$/, // Djibouti
    format: "$1",
  },
  DK: {
    pattern: /^\d{4}$/, // Denmark
    format: "$1",
  },
  DM: {
    pattern: /^\d{5}$/, // Dominica
    format: "$1",
  },
  DO: {
    pattern: /^\d{5}$/, // Dominican Republic
    format: "$1",
  },
  DZ: {
    pattern: /^\d{5}$/, // Algeria
    format: "$1",
  },
  EC: {
    pattern: /^\d{6}$/, // Ecuador
    format: "$1",
  },
  EE: {
    pattern: /^\d{5}$/, // Estonia
    format: "$1",
  },
  EG: {
    pattern: /^\d{5}$/, // Egypt
    format: "$1",
  },
  EH: {
    pattern: /^\d{5}$/, // Western Sahara
    format: "$1",
  },
  ER: {
    pattern: /^\d{5}$/, // Eritrea
    format: "$1",
  },
  ES: {
    pattern: /^\d{5}$/, // Spain
    format: "$1",
  },
  ET: {
    pattern: /^\d{4}$/, // Ethiopia
    format: "$1",
  },
  FI: {
    pattern: /^\d{5}$/, // Finland
    format: "$1",
  },
  FJ: {
    pattern: /^\d{4}$/, // Fiji
    format: "$1",
  },
  FM: {
    pattern: /^\d{5}$/, // Federated States of Micronesia
    format: "$1",
  },
  FO: {
    pattern: /^\d{4}$/, // Faroe Islands
    format: "$1",
  },
  FR: {
    pattern: /^\d{5}$/, // France
    format: "$1",
  },
  GA: {
    pattern: /^\d{5}$/, // Gabon
    format: "$1",
  },
  GB: {
    pattern: /^[A-Z]{1,2}\d[A-Z\d]? \d[A-Z]{2}$/, // United Kingdom
    format: "$1 $2",
  },
  GD: {
    pattern: /^\d{5}$/, // Grenada
    format: "$1",
  },
  GE: {
    pattern: /^\d{4}$/, // Georgia
    format: "$1",
  },
  GF: {
    pattern: /^\d{5}$/, // French Guiana
    format: "$1",
  },
  GG: {
    pattern: /^\d{5}$/, // Guernsey
    format: "$1",
  },
  GH: {
    pattern: /^\d{5}$/, // Ghana
    format: "$1",
  },
  GI: {
    pattern: /^\d{4}$/, // Gibraltar
    format: "$1",
  },
  GL: {
    pattern: /^\d{4}$/, // Greenland
    format: "$1",
  },
  GM: {
    pattern: /^\d{5}$/, // Gambia
    format: "$1",
  },
  GN: {
    pattern: /^\d{5}$/, // Guinea
    format: "$1",
  },
  GP: {
    pattern: /^\d{5}$/, // Guadeloupe
    format: "$1",
  },
  GQ: {
    pattern: /^\d{5}$/, // Equatorial Guinea
    format: "$1",
  },
  GR: {
    pattern: /^\d{5}$/, // Greece
    format: "$1",
  },
  GT: {
    pattern: /^\d{5}$/, // Guatemala
    format: "$1",
  },
  GU: {
    pattern: /^\d{5}$/, // Guam
    format: "$1",
  },
  GW: {
    pattern: /^\d{5}$/, // Guinea-Bissau
    format: "$1",
  },
  GY: {
    pattern: /^\d{5}$/, // Guyana
    format: "$1",
  },
  HK: {
    pattern: /^\d{5}$/, // Hong Kong
    format: "$1",
  },
  HN: {
    pattern: /^\d{5}$/, // Honduras
    format: "$1",
  },
  HR: {
    pattern: /^\d{5}$/, // Croatia
    format: "$1",
  },
  HT: {
    pattern: /^\d{5}$/, // Haiti
    format: "$1",
  },
  HU: {
    pattern: /^\d{4}$/, // Hungary
    format: "$1",
  },
  ID: {
    pattern: /^\d{5}$/, // Indonesia
    format: "$1",
  },
  IE: {
    pattern: /^\d{4}$/, // Ireland
    format: "$1",
  },
  IL: {
    pattern: /^\d{5}$/, // Israel
    format: "$1",
  },
  IM: {
    pattern: /^\d{5}$/, // Isle of Man
    format: "$1",
  },
  IN: {
    pattern: /^\d{6}$/, // India
    format: "$1",
  },
  IO: {
    pattern: /^\d{5}$/, // British Indian Ocean Territory
    format: "$1",
  },
  IQ: {
    pattern: /^\d{5}$/, // Iraq
    format: "$1",
  },
  IR: {
    pattern: /^\d{5}$/, // Iran
    format: "$1",
  },
  IS: {
    pattern: /^\d{3}$/, // Iceland
    format: "$1",
  },
  IT: {
    pattern: /^\d{5}$/, // Italy
    format: "$1",
  },
  JE: {
    pattern: /^\d{5}$/, // Jersey
    format: "$1",
  },
  JM: {
    pattern: /^\d{5}$/, // Jamaica
    format: "$1",
  },
  JO: {
    pattern: /^\d{5}$/, // Jordan
    format: "$1",
  },
  JP: {
    pattern: /^\d{3}-\d{4}$/, // Japan
    format: "$1-$2",
  },
  KE: {
    pattern: /^\d{5}$/, // Kenya
    format: "$1",
  },
  KG: {
    pattern: /^\d{6}$/, // Kyrgyzstan
    format: "$1",
  },
  KH: {
    pattern: /^\d{5}$/, // Cambodia
    format: "$1",
  },
  KI: {
    pattern: /^\d{5}$/, // Kiribati
    format: "$1",
  },
  KM: {
    pattern: /^\d{5}$/, // Comoros
    format: "$1",
  },
  KN: {
    pattern: /^\d{5}$/, // Saint Kitts and Nevis
    format: "$1",
  },
  KP: {
    pattern: /^\d{5}$/, // North Korea
    format: "$1",
  },
  KR: {
    pattern: /^\d{5}$/, // South Korea
    format: "$1",
  },
  KW: {
    pattern: /^\d{5}$/, // Kuwait
    format: "$1",
  },
  KY: {
    pattern: /^\d{5}$/, // Cayman Islands
    format: "$1",
  },
  KZ: {
    pattern: /^\d{6}$/, // Kazakhstan
    format: "$1",
  },
  LA: {
    pattern: /^\d{5}$/, // Laos
    format: "$1",
  },
  LB: {
    pattern: /^\d{5}$/, // Lebanon
    format: "$1",
  },
  LC: {
    pattern: /^\d{5}$/, // Saint Lucia
    format: "$1",
  },
  LI: {
    pattern: /^\d{5}$/, // Liechtenstein
    format: "$1",
  },
  LK: {
    pattern: /^\d{5}$/, // Sri Lanka
    format: "$1",
  },
  LR: {
    pattern: /^\d{5}$/, // Liberia
    format: "$1",
  },
  LS: {
    pattern: /^\d{5}$/, // Lesotho
    format: "$1",
  },
  LT: {
    pattern: /^\d{5}$/, // Lithuania
    format: "$1",
  },
  LU: {
    pattern: /^\d{5}$/, // Luxembourg
    format: "$1",
  },
  LV: {
    pattern: /^\d{4}$/, // Latvia
    format: "$1",
  },
  LY: {
    pattern: /^\d{5}$/, // Libya
    format: "$1",
  },
  MA: {
    pattern: /^\d{5}$/, // Morocco
    format: "$1",
  },
  MC: {
    pattern: /^\d{5}$/, // Monaco
    format: "$1",
  },
  MD: {
    pattern: /^\d{5}$/, // Moldova
    format: "$1",
  },
  ME: {
    pattern: /^\d{5}$/, // Montenegro
    format: "$1",
  },
  MF: {
    pattern: /^\d{5}$/, // Saint Martin
    format: "$1",
  },
  MG: {
    pattern: /^\d{5}$/, // Madagascar
    format: "$1",
  },
  MH: {
    pattern: /^\d{5}$/, // Marshall Islands
    format: "$1",
  },
  MK: {
    pattern: /^\d{5}$/, // North Macedonia
    format: "$1",
  },
  ML: {
    pattern: /^\d{5}$/, // Mali
    format: "$1",
  },
  MM: {
    pattern: /^\d{5}$/, // Myanmar
    format: "$1",
  },
  MN: {
    pattern: /^\d{5}$/, // Mongolia
    format: "$1",
  },
  MO: {
    pattern: /^\d{5}$/, // Macau
    format: "$1",
  },
  MP: {
    pattern: /^\d{5}$/, // Northern Mariana Islands
    format: "$1",
  },
  MQ: {
    pattern: /^\d{5}$/, // Martinique
    format: "$1",
  },
  MR: {
    pattern: /^\d{5}$/, // Mauritania
    format: "$1",
  },
  MS: {
    pattern: /^\d{5}$/, // Montserrat
    format: "$1",
  },
  MT: {
    pattern: /^\d{4}$/, // Malta
    format: "$1",
  },
  MU: {
    pattern: /^\d{5}$/, // Mauritius
    format: "$1",
  },
  MV: {
    pattern: /^\d{5}$/, // Maldives
    format: "$1",
  },
  MW: {
    pattern: /^\d{5}$/, // Malawi
    format: "$1",
  },
  MX: {
    pattern: /^\d{5}$/, // Mexico
    format: "$1",
  },
  MY: {
    pattern: /^\d{5}$/, // Malaysia
    format: "$1",
  },
  MZ: {
    pattern: /^\d{5}$/, // Mozambique
    format: "$1",
  },
  NA: {
    pattern: /^\d{5}$/, // Namibia
    format: "$1",
  },
  NC: {
    pattern: /^\d{5}$/, // New Caledonia
    format: "$1",
  },
  NE: {
    pattern: /^\d{5}$/, // Niger
    format: "$1",
  },
  NF: {
    pattern: /^\d{5}$/, // Norfolk Island
    format: "$1",
  },
  NG: {
    pattern: /^\d{5}$/, // Nigeria
    format: "$1",
  },
  NI: {
    pattern: /^\d{5}$/, // Nicaragua
    format: "$1",
  },
  NL: {
    pattern: /^\d{4} \d{2}$/, // Netherlands
    format: "$1 $2",
  },
  NO: {
    pattern: /^\d{4}$/, // Norway
    format: "$1",
  },
  NP: {
    pattern: /^\d{5}$/, // Nepal
    format: "$1",
  },
  NR: {
    pattern: /^\d{5}$/, // Nauru
    format: "$1",
  },
  NU: {
    pattern: /^\d{5}$/, // Niue
    format: "$1",
  },
  NZ: {
    pattern: /^\d{4}$/, // New Zealand
    format: "$1",
  },
  OM: {
    pattern: /^\d{5}$/, // Oman
    format: "$1",
  },
  PA: {
    pattern: /^\d{5}$/, // Panama
    format: "$1",
  },
  PE: {
    pattern: /^\d{5}$/, // Peru
    format: "$1",
  },
  PF: {
    pattern: /^\d{5}$/, // French Polynesia
    format: "$1",
  },
  PG: {
    pattern: /^\d{5}$/, // Papua New Guinea
    format: "$1",
  },
  PH: {
    pattern: /^\d{4}$/, // Philippines
    format: "$1",
  },
  PK: {
    pattern: /^\d{5}$/, // Pakistan
    format: "$1",
  },
  PL: {
    pattern: /^\d{5}$/, // Poland
    format: "$1",
  },
  PM: {
    pattern: /^\d{5}$/, // Saint Pierre and Miquelon
    format: "$1",
  },
  PN: {
    pattern: /^\d{5}$/, // Pitcairn Islands
    format: "$1",
  },
  PR: {
    pattern: /^\d{5}$/, // Puerto Rico
    format: "$1",
  },
  PT: {
    pattern: /^\d{4}-\d{3}$/, // Portugal
    format: "$1-$2",
  },
  PW: {
    pattern: /^\d{5}$/, // Palau
    format: "$1",
  },
  PY: {
    pattern: /^\d{5}$/, // Paraguay
    format: "$1",
  },
  QA: {
    pattern: /^\d{5}$/, // Qatar
    format: "$1",
  },
  RE: {
    pattern: /^\d{5}$/, // Réunion
    format: "$1",
  },
  RO: {
    pattern: /^\d{6}$/, // Romania
    format: "$1",
  },
  RS: {
    pattern: /^\d{6}$/, // Serbia
    format: "$1",
  },
  RU: {
    pattern: /^\d{6}$/, // Russia
    format: "$1",
  },
  RW: {
    pattern: /^\d{5}$/, // Rwanda
    format: "$1",
  },
  SA: {
    pattern: /^\d{5}$/, // Saudi Arabia
    format: "$1",
  },
  SB: {
    pattern: /^\d{5}$/, // Solomon Islands
    format: "$1",
  },
  SC: {
    pattern: /^\d{5}$/, // Seychelles
    format: "$1",
  },
  SD: {
    pattern: /^\d{5}$/, // Sudan
    format: "$1",
  },
  SE: {
    pattern: /^(\d{3})(\d{2})$/,
    format: "$1 $2",
  },
  SG: {
    pattern: /^\d{6}$/, // Singapore
    format: "$1",
  },
  SH: {
    pattern: /^\d{5}$/, // Saint Helena
    format: "$1",
  },
  SI: {
    pattern: /^\d{5}$/, // Slovenia
    format: "$1",
  },
  SJ: {
    pattern: /^\d{5}$/, // Svalbard and Jan Mayen
    format: "$1",
  },
  SK: {
    pattern: /^(\d{3})\s?(\d{2})$/, //Slovakia
    format: "$1 $2",
  },
  SL: {
    pattern: /^\d{5}$/, // Sierra Leone
    format: "$1",
  },
  SM: {
    pattern: /^\d{5}$/, // San Marino
    format: "$1",
  },
  SN: {
    pattern: /^\d{5}$/, // Senegal
    format: "$1",
  },
  SO: {
    pattern: /^\d{5}$/, // Somalia
    format: "$1",
  },
  SR: {
    pattern: /^\d{5}$/, // Suriname
    format: "$1",
  },
  SS: {
    pattern: /^\d{5}$/, // South Sudan
    format: "$1",
  },
  ST: {
    pattern: /^\d{5}$/, // São Tomé and Príncipe
    format: "$1",
  },
  SV: {
    pattern: /^\d{5}$/, // El Salvador
    format: "$1",
  },
  SX: {
    pattern: /^\d{5}$/, // Sint Maarten (Dutch part)
    format: "$1",
  },
  SY: {
    pattern: /^\d{5}$/, // Syria
    format: "$1",
  },
  SZ: {
    pattern: /^\d{5}$/, // Eswatini
    format: "$1",
  },
  TC: {
    pattern: /^\d{5}$/, // Turks and Caicos Islands
    format: "$1",
  },
  TD: {
    pattern: /^\d{5}$/, // Chad
    format: "$1",
  },
  TF: {
    pattern: /^\d{5}$/, // French Southern and Antarctic Lands
    format: "$1",
  },
  TG: {
    pattern: /^\d{5}$/, // Togo
    format: "$1",
  },
  TH: {
    pattern: /^\d{5}$/, // Thailand
    format: "$1",
  },
  TJ: {
    pattern: /^\d{5}$/, // Tajikistan
    format: "$1",
  },
  TK: {
    pattern: /^\d{5}$/, // Tokelau
    format: "$1",
  },
  TL: {
    pattern: /^\d{5}$/, // Timor-Leste (East Timor)
    format: "$1",
  },
  TM: {
    pattern: /^\d{5}$/, // Turkmenistan
    format: "$1",
  },
  TN: {
    pattern: /^\d{5}$/, // Tunisia
    format: "$1",
  },
  TO: {
    pattern: /^\d{5}$/, // Tonga
    format: "$1",
  },
  TR: {
    pattern: /^\d{5}$/, // Turkey
    format: "$1",
  },
  TT: {
    pattern: /^\d{5}$/, // Trinidad and Tobago
    format: "$1",
  },
  TV: {
    pattern: /^\d{5}$/, // Tuvalu
    format: "$1",
  },
  TZ: {
    pattern: /^\d{5}$/, // Tanzania
    format: "$1",
  },
  UA: {
    pattern: /^\d{5}$/, // Ukraine
    format: "$1",
  },
  UG: {
    pattern: /^\d{5}$/, // Uganda
    format: "$1",
  },
  UM: {
    pattern: /^\d{5}$/, // United States Minor Outlying Islands
    format: "$1",
  },
  US: {
    pattern: /^\d{5}(-\d{4})?|\d{9}$/,// United States
    format: "$1-$2",
  },
  UY: {
    pattern: /^\d{5}$/, // Uruguay
    format: "$1",
  },
  UZ: {
    pattern: /^\d{5}$/, // Uzbekistan
    format: "$1",
  },
  VA: {
    pattern: /^\d{5}$/, // Vatican City
    format: "$1",
  },
  VC: {
    pattern: /^\d{5}$/, // Saint Vincent and the Grenadines
    format: "$1",
  },
  VE: {
    pattern: /^\d{4}$/, // Venezuela
    format: "$1",
  },
  VG: {
    pattern: /^\d{5}$/, // British Virgin Islands
    format: "$1",
  },
  VI: {
    pattern: /^\d{5}$/, // United States Virgin Islands
    format: "$1",
  },
  VN: {
    pattern: /^\d{5}$/, // Vietnam
    format: "$1",
  },
  VU: {
    pattern: /^\d{5}$/, // Vanuatu
    format: "$1",
  },
  WF: {
    pattern: /^\d{5}$/, // Wallis and Futuna
    format: "$1",
  },
  WS: {
    pattern: /^\d{5}$/, // Samoa
    format: "$1",
  },
  YE: {
    pattern: /^\d{5}$/, // Yemen
    format: "$1",
  },
  YT: {
    pattern: /^\d{5}$/, // Mayotte
    format: "$1",
  },
  ZA: {
    pattern: /^\d{4}$/, // South Africa
    format: "$1",
  },
  ZM: {
    pattern: /^\d{5}$/, // Zambia
    format: "$1",
  },
  ZW: {
    pattern: /^\d{5}$/, // Zimbabwe
    format: "$1",
  },
};
module.exports = zipFormats;
