(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/pages/admin/util/countries-iso.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/pages/admin/util/countries-iso.jsx ***!
  \*********************************************************/
/*! exports provided: countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// export const countries = [{ "text": "Afghanistan", "key": "AF", "value": "AF", "flag": "AF" }, { "text": "Åland Islands", "key": "AX", "value": "AX", "flag": "AX" }, { "text": "Albania", "key": "AL", "value": "AL", "flag": "AL" }, { "text": "Algeria", "key": "DZ", "value": "DZ", "flag": "DZ" }, { "text": "American Samoa", "key": "AS", "value": "AS", "flag": "AS" }, { "text": "Andorra", "key": "AD", "value": "AD", "flag": "AD" }, { "text": "Angola", "key": "AO", "value": "AO", "flag": "AO" }, { "text": "Anguilla", "key": "AI", "value": "AI", "flag": "AI" }, { "text": "Antarctica", "key": "AQ", "value": "AQ", "flag": "AQ" }, { "text": "Antigua and Barbuda", "key": "AG", "value": "AG", "flag": "AG" }, { "text": "Argentina", "key": "AR", "value": "AR", "flag": "AR" }, { "text": "Armenia", "key": "AM", "value": "AM", "flag": "AM" }, { "text": "Aruba", "key": "AW", "value": "AW", "flag": "AW" }, { "text": "Australia", "key": "AU", "value": "AU", "flag": "AU" }, { "text": "Austria", "key": "AT", "value": "AT", "flag": "AT" }, { "text": "Azerbaijan", "key": "AZ", "value": "AZ", "flag": "AZ" }, { "text": "Bahamas", "key": "BS", "value": "BS", "flag": "BS" }, { "text": "Bahrain", "key": "BH", "value": "BH", "flag": "BH" }, { "text": "Bangladesh", "key": "BD", "value": "BD", "flag": "BD" }, { "text": "Barbados", "key": "BB", "value": "BB", "flag": "BB" }, { "text": "Belarus", "key": "BY", "value": "BY", "flag": "BY" }, { "text": "Belgium", "key": "BE", "value": "BE", "flag": "BE" }, { "text": "Belize", "key": "BZ", "value": "BZ", "flag": "BZ" }, { "text": "Benin", "key": "BJ", "value": "BJ", "flag": "BJ" }, { "text": "Bermuda", "key": "BM", "value": "BM", "flag": "BM" }, { "text": "Bhutan", "key": "BT", "value": "BT", "flag": "BT" }, { "text": "Bolivia, Plurinational State of", "key": "BO", "value": "BO", "flag": "BO" }, { "text": "Bonaire, Sint Eustatius and Saba", "key": "BQ", "value": "BQ", "flag": "BQ" }, { "text": "Bosnia and Herzegovina", "key": "BA", "value": "BA", "flag": "BA" }, { "text": "Botswana", "key": "BW", "value": "BW", "flag": "BW" }, { "text": "Bouvet Island", "key": "BV", "value": "BV", "flag": "BV" }, { "text": "Brazil", "key": "BR", "value": "BR", "flag": "BR" }, { "text": "British Indian Ocean Territory", "key": "IO", "value": "IO", "flag": "IO" }, { "text": "Brunei Darussalam", "key": "BN", "value": "BN", "flag": "BN" }, { "text": "Bulgaria", "key": "BG", "value": "BG", "flag": "BG" }, { "text": "Burkina Faso", "key": "BF", "value": "BF", "flag": "BF" }, { "text": "Burundi", "key": "BI", "value": "BI", "flag": "BI" }, { "text": "Cambodia", "key": "KH", "value": "KH", "flag": "KH" }, { "text": "Cameroon", "key": "CM", "value": "CM", "flag": "CM" }, { "text": "Canada", "key": "CA", "value": "CA", "flag": "CA" }, { "text": "Cape Verde", "key": "CV", "value": "CV", "flag": "CV" }, { "text": "Cayman Islands", "key": "KY", "value": "KY", "flag": "KY" }, { "text": "Central African Republic", "key": "CF", "value": "CF", "flag": "CF" }, { "text": "Chad", "key": "TD", "value": "TD", "flag": "TD" }, { "text": "Chile", "key": "CL", "value": "CL", "flag": "CL" }, { "text": "China", "key": "CN", "value": "CN", "flag": "CN" }, { "text": "Christmas Island", "key": "CX", "value": "CX", "flag": "CX" }, { "text": "Cocos (Keeling) Islands", "key": "CC", "value": "CC", "flag": "CC" }, { "text": "Colombia", "key": "CO", "value": "CO", "flag": "CO" }, { "text": "Comoros", "key": "KM", "value": "KM", "flag": "KM" }, { "text": "Congo", "key": "CG", "value": "CG", "flag": "CG" }, { "text": "Congo, the Democratic Republic of the", "key": "CD", "value": "CD", "flag": "CD" }, { "text": "Cook Islands", "key": "CK", "value": "CK", "flag": "CK" }, { "text": "Costa Rica", "key": "CR", "value": "CR", "flag": "CR" }, { "text": "Côte d'Ivoire", "key": "CI", "value": "CI", "flag": "CI" }, { "text": "Croatia", "key": "HR", "value": "HR", "flag": "HR" }, { "text": "Cuba", "key": "CU", "value": "CU", "flag": "CU" }, { "text": "Curaçao", "key": "CW", "value": "CW", "flag": "CW" }, { "text": "Cyprus", "key": "CY", "value": "CY", "flag": "CY" }, { "text": "Czech Republic", "key": "CZ", "value": "CZ", "flag": "CZ" }, { "text": "Denmark", "key": "DK", "value": "DK", "flag": "DK" }, { "text": "Djibouti", "key": "DJ", "value": "DJ", "flag": "DJ" }, { "text": "Dominica", "key": "DM", "value": "DM", "flag": "DM" }, { "text": "Dominican Republic", "key": "DO", "value": "DO", "flag": "DO" }, { "text": "Ecuador", "key": "EC", "value": "EC", "flag": "EC" }, { "text": "Egypt", "key": "EG", "value": "EG", "flag": "EG" }, { "text": "El Salvador", "key": "SV", "value": "SV", "flag": "SV" }, { "text": "Equatorial Guinea", "key": "GQ", "value": "GQ", "flag": "GQ" }, { "text": "Eritrea", "key": "ER", "value": "ER", "flag": "ER" }, { "text": "Estonia", "key": "EE", "value": "EE", "flag": "EE" }, { "text": "Ethiopia", "key": "ET", "value": "ET", "flag": "ET" }, { "text": "Falkland Islands (Malvinas)", "key": "FK", "value": "FK", "flag": "FK" }, { "text": "Faroe Islands", "key": "FO", "value": "FO", "flag": "FO" }, { "text": "Fiji", "key": "FJ", "value": "FJ", "flag": "FJ" }, { "text": "Finland", "key": "FI", "value": "FI", "flag": "FI" }, { "text": "France", "key": "FR", "value": "FR", "flag": "FR" }, { "text": "French Guiana", "key": "GF", "value": "GF", "flag": "GF" }, { "text": "French Polynesia", "key": "PF", "value": "PF", "flag": "PF" }, { "text": "French Southern Territories", "key": "TF", "value": "TF", "flag": "TF" }, { "text": "Gabon", "key": "GA", "value": "GA", "flag": "GA" }, { "text": "Gambia", "key": "GM", "value": "GM", "flag": "GM" }, { "text": "Georgia", "key": "GE", "value": "GE", "flag": "GE" }, { "text": "Germany", "key": "DE", "value": "DE", "flag": "DE" }, { "text": "Ghana", "key": "GH", "value": "GH", "flag": "GH" }, { "text": "Gibraltar", "key": "GI", "value": "GI", "flag": "GI" }, { "text": "Greece", "key": "GR", "value": "GR", "flag": "GR" }, { "text": "Greenland", "key": "GL", "value": "GL", "flag": "GL" }, { "text": "Grenada", "key": "GD", "value": "GD", "flag": "GD" }, { "text": "Guadeloupe", "key": "GP", "value": "GP", "flag": "GP" }, { "text": "Guam", "key": "GU", "value": "GU", "flag": "GU" }, { "text": "Guatemala", "key": "GT", "value": "GT", "flag": "GT" }, { "text": "Guernsey", "key": "GG", "value": "GG", "flag": "GG" }, { "text": "Guinea", "key": "GN", "value": "GN", "flag": "GN" }, { "text": "Guinea-Bissau", "key": "GW", "value": "GW", "flag": "GW" }, { "text": "Guyana", "key": "GY", "value": "GY", "flag": "GY" }, { "text": "Haiti", "key": "HT", "value": "HT", "flag": "HT" }, { "text": "Heard Island and McDonald Islands", "key": "HM", "value": "HM", "flag": "HM" }, { "text": "Holy See (Vatican City State)", "key": "VA", "value": "VA", "flag": "VA" }, { "text": "Honduras", "key": "HN", "value": "HN", "flag": "HN" }, { "text": "Hong Kong", "key": "HK", "value": "HK", "flag": "HK" }, { "text": "Hungary", "key": "HU", "value": "HU", "flag": "HU" }, { "text": "Iceland", "key": "IS", "value": "IS", "flag": "IS" }, { "text": "India", "key": "IN", "value": "IN", "flag": "IN" }, { "text": "Indonesia", "key": "ID", "value": "ID", "flag": "ID" }, { "text": "Iran, Islamic Republic of", "key": "IR", "value": "IR", "flag": "IR" }, { "text": "Iraq", "key": "IQ", "value": "IQ", "flag": "IQ" }, { "text": "Ireland", "key": "IE", "value": "IE", "flag": "IE" }, { "text": "Isle of Man", "key": "IM", "value": "IM", "flag": "IM" }, { "text": "Israel", "key": "IL", "value": "IL", "flag": "IL" }, { "text": "Italy", "key": "IT", "value": "IT", "flag": "IT" }, { "text": "Jamaica", "key": "JM", "value": "JM", "flag": "JM" }, { "text": "Japan", "key": "JP", "value": "JP", "flag": "JP" }, { "text": "Jersey", "key": "JE", "value": "JE", "flag": "JE" }, { "text": "Jordan", "key": "JO", "value": "JO", "flag": "JO" }, { "text": "Kazakhstan", "key": "KZ", "value": "KZ", "flag": "KZ" }, { "text": "Kenya", "key": "KE", "value": "KE", "flag": "KE" }, { "text": "Kiribati", "key": "KI", "value": "KI", "flag": "KI" }, { "text": "Korea, Democratic People's Republic of", "key": "KP", "value": "KP", "flag": "KP" }, { "text": "Korea, Republic of", "key": "KR", "value": "KR", "flag": "KR" }, { "text": "Kuwait", "key": "KW", "value": "KW", "flag": "KW" }, { "text": "Kyrgyzstan", "key": "KG", "value": "KG", "flag": "KG" }, { "text": "Lao People's Democratic Republic", "key": "LA", "value": "LA", "flag": "LA" }, { "text": "Latvia", "key": "LV", "value": "LV", "flag": "LV" }, { "text": "Lebanon", "key": "LB", "value": "LB", "flag": "LB" }, { "text": "Lesotho", "key": "LS", "value": "LS", "flag": "LS" }, { "text": "Liberia", "key": "LR", "value": "LR", "flag": "LR" }, { "text": "Libya", "key": "LY", "value": "LY", "flag": "LY" }, { "text": "Liechtenstein", "key": "LI", "value": "LI", "flag": "LI" }, { "text": "Lithuania", "key": "LT", "value": "LT", "flag": "LT" }, { "text": "Luxembourg", "key": "LU", "value": "LU", "flag": "LU" }, { "text": "Macao", "key": "MO", "value": "MO", "flag": "MO" }, { "text": "Macedonia, the Former Yugoslav Republic of", "key": "MK", "value": "MK", "flag": "MK" }, { "text": "Madagascar", "key": "MG", "value": "MG", "flag": "MG" }, { "text": "Malawi", "key": "MW", "value": "MW", "flag": "MW" }, { "text": "Malaysia", "key": "MY", "value": "MY", "flag": "MY" }, { "text": "Maldives", "key": "MV", "value": "MV", "flag": "MV" }, { "text": "Mali", "key": "ML", "value": "ML", "flag": "ML" }, { "text": "Malta", "key": "MT", "value": "MT", "flag": "MT" }, { "text": "Marshall Islands", "key": "MH", "value": "MH", "flag": "MH" }, { "text": "Martinique", "key": "MQ", "value": "MQ", "flag": "MQ" }, { "text": "Mauritania", "key": "MR", "value": "MR", "flag": "MR" }, { "text": "Mauritius", "key": "MU", "value": "MU", "flag": "MU" }, { "text": "Mayotte", "key": "YT", "value": "YT", "flag": "YT" }, { "text": "Mexico", "key": "MX", "value": "MX", "flag": "MX" }, { "text": "Micronesia, Federated States of", "key": "FM", "value": "FM", "flag": "FM" },
//  { "text": "Moldova, Republic of", "key": "MD", "value": "MD", "flag": "MD" }, { "text": "Monaco", "key": "MC", "value": "MC", "flag": "MC" }, { "text": "Mongolia", "key": "MN", "value": "MN", "flag": "MN" }, { "text": "Montenegro", "key": "ME", "value": "ME", "flag": "ME" }, { "text": "Montserrat", "key": "MS", "value": "MS", "flag": "MS" }, { "text": "Morocco", "key": "MA", "value": "MA", "flag": "MA" }, { "text": "Mozambique", "key": "MZ", "value": "MZ", "flag": "MZ" }, { "text": "Myanmar", "key": "MM", "value": "MM", "flag": "MM" }, { "text": "Namibia", "key": "NA", "value": "NA", "flag": "NA" }, { "text": "Nauru", "key": "NR", "value": "NR", "flag": "NR" }, { "text": "Nepal", "key": "NP", "value": "NP", "flag": "NP" }, { "text": "Netherlands", "key": "NL", "value": "NL", "flag": "NL" }, { "text": "New Caledonia", "key": "NC", "value": "NC", "flag": "NC" }, { "text": "New Zealand", "key": "NZ", "value": "NZ", "flag": "NZ" }, { "text": "Nicaragua", "key": "NI", "value": "NI", "flag": "NI" }, { "text": "Niger", "key": "NE", "value": "NE", "flag": "NE" }, { "text": "Nigeria", "key": "NG", "value": "NG", "flag": "NG" }, { "text": "Niue", "key": "NU", "value": "NU", "flag": "NU" }, { "text": "Norfolk Island", "key": "NF", "value": "NF", "flag": "NF" }, { "text": "Northern Mariana Islands", "key": "MP", "value": "MP", "flag": "MP" }, { "text": "Norway", "key": "NO", "value": "NO", "flag": "NO" }, { "text": "Oman", "key": "OM", "value": "OM", "flag": "OM" }, { "text": "Pakistan", "key": "PK", "value": "PK", "flag": "PK" }, { "text": "Palau", "key": "PW", "value": "PW", "flag": "PW" }, { "text": "Palestine, State of", "key": "PS", "value": "PS", "flag": "PS" }, { "text": "Panama", "key": "PA", "value": "PA", "flag": "PA" }, { "text": "Papua New Guinea", "key": "PG", "value": "PG", "flag": "PG" }, { "text": "Paraguay", "key": "PY", "value": "PY", "flag": "PY" }, { "text": "Peru", "key": "PE", "value": "PE", "flag": "PE" }, { "text": "Philippines", "key": "PH", "value": "PH", "flag": "PH" }, { "text": "Pitcairn", "key": "PN", "value": "PN", "flag": "PN" }, { "text": "Poland", "key": "PL", "value": "PL", "flag": "PL" }, { "text": "Portugal", "key": "PT", "value": "PT", "flag": "PT" }, { "text": "Puerto Rico", "key": "PR", "value": "PR", "flag": "PR" }, { "text": "Qatar", "key": "QA", "value": "QA", "flag": "QA" }, { "text": "Réunion", "key": "RE", "value": "RE", "flag": "RE" }, { "text": "Romania", "key": "RO", "value": "RO", "flag": "RO" }, { "text": "Russian Federation", "key": "RU", "value": "RU", "flag": "RU" }, { "text": "Rwanda", "key": "RW", "value": "RW", "flag": "RW" }, { "text": "Saint Barthélemy", "key": "BL", "value": "BL", "flag": "BL" }, { "text": "Saint Helena, Ascension and Tristan da Cunha", "key": "SH", "value": "SH", "flag": "SH" }, { "text": "Saint Kitts and Nevis", "key": "KN", "value": "KN", "flag": "KN" }, { "text": "Saint Lucia", "key": "LC", "value": "LC", "flag": "LC" }, { "text": "Saint Martin (French part)", "key": "MF", "value": "MF", "flag": "MF" }, { "text": "Saint Pierre and Miquelon", "key": "PM", "value": "PM", "flag": "PM" }, { "text": "Saint Vincent and the Grenadines", "key": "VC", "value": "VC", "flag": "VC" }, { "text": "Samoa", "key": "WS", "value": "WS", "flag": "WS" }, { "text": "San Marino", "key": "SM", "value": "SM", "flag": "SM" }, { "text": "Sao Tome and Principe", "key": "ST", "value": "ST", "flag": "ST" }, { "text": "Saudi Arabia", "key": "SA", "value": "SA", "flag": "SA" }, { "text": "Senegal", "key": "SN", "value": "SN", "flag": "SN" }, { "text": "Serbia", "key": "RS", "value": "RS", "flag": "RS" }, { "text": "Seychelles", "key": "SC", "value": "SC", "flag": "SC" }, { "text": "Sierra Leone", "key": "SL", "value": "SL", "flag": "SL" }, { "text": "Singapore", "key": "SG", "value": "SG", "flag": "SG" }, { "text": "Sint Maarten (Dutch part)", "key": "SX", "value": "SX", "flag": "SX" }, { "text": "Slovakia", "key": "SK", "value": "SK", "flag": "SK" }, { "text": "Slovenia", "key": "SI", "value": "SI", "flag": "SI" }, { "text": "Solomon Islands", "key": "SB", "value": "SB", "flag": "SB" }, { "text": "Somalia", "key": "SO", "value": "SO", "flag": "SO" }, { "text": "South Africa", "key": "ZA", "value": "ZA", "flag": "ZA" }, { "text": "South Georgia and the South Sandwich Islands", "key": "GS", "value": "GS", "flag": "GS" }, { "text": "South Sudan", "key": "SS", "value": "SS", "flag": "SS" }, { "text": "Spain", "key": "ES", "value": "ES", "flag": "ES" }, { "text": "Sri Lanka", "key": "LK", "value": "LK", "flag": "LK" }, { "text": "Sudan", "key": "SD", "value": "SD", "flag": "SD" }, { "text": "Suriname", "key": "SR", "value": "SR", "flag": "SR" }, { "text": "Svalbard and Jan Mayen", "key": "SJ", "value": "SJ", "flag": "SJ" }, { "text": "Swaziland", "key": "SZ", "value": "SZ", "flag": "SZ" }, { "text": "Sweden", "key": "SE", "value": "SE", "flag": "SE" }, { "text": "Switzerland", "key": "CH", "value": "CH", "flag": "CH" }, { "text": "Syrian Arab Republic", "key": "SY", "value": "SY", "flag": "SY" }, { "text": "Taiwan, Province of China", "key": "TW", "value": "TW", "flag": "TW" }, { "text": "Tajikistan", "key": "TJ", "value": "TJ", "flag": "TJ" }, { "text": "Tanzania, United Republic of", "key": "TZ", "value": "TZ", "flag": "TZ" }, { "text": "Thailand", "key": "TH", "value": "TH", "flag": "TH" }, { "text": "Timor-Leste", "key": "TL", "value": "TL", "flag": "TL" }, { "text": "Togo", "key": "TG", "value": "TG", "flag": "TG" }, { "text": "Tokelau", "key": "TK", "value": "TK", "flag": "TK" }, { "text": "Tonga", "key": "TO", "value": "TO", "flag": "TO" }, { "text": "Trinidad and Tobago", "key": "TT", "value": "TT", "flag": "TT" }, { "text": "Tunisia", "key": "TN", "value": "TN", "flag": "TN" }, { "text": "Turkey", "key": "TR", "value": "TR", "flag": "TR" }, { "text": "Turkmenistan", "key": "TM", "value": "TM", "flag": "TM" }, { "text": "Turks and Caicos Islands", "key": "TC", "value": "TC", "flag": "TC" }, { "text": "Tuvalu", "key": "TV", "value": "TV", "flag": "TV" }, { "text": "Uganda", "key": "UG", "value": "UG", "flag": "UG" }, { "text": "Ukraine", "key": "UA", "value": "UA", "flag": "UA" }, { "text": "United Arab Emirates", "key": "AE", "value": "AE", "flag": "AE" }, { "text": "United Kingdom", "key": "GB", "value": "GB", "flag": "GB" }, { "text": "United States", "key": "US", "value": "US", "flag": "US" }, { "text": "United States Minor Outlying Islands", "key": "UM", "value": "UM", "flag": "UM" }, { "text": "Uruguay", "key": "UY", "value": "UY", "flag": "UY" }, { "text": "Uzbekistan", "key": "UZ", "value": "UZ", "flag": "UZ" }, { "text": "Vanuatu", "key": "VU", "value": "VU", "flag": "VU" }, { "text": "Venezuela, Bolivarian Republic of", "key": "VE", "value": "VE", "flag": "VE" }, { "text": "Viet Nam", "key": "VN", "value": "VN", "flag": "VN" }, { "text": "Virgin Islands, British", "key": "VG", "value": "VG", "flag": "VG" }, { "text": "Virgin Islands, U.S.", "key": "VI", "value": "VI", "flag": "VI" }, { "text": "Wallis and Futuna", "key": "WF", "value": "WF", "flag": "WF" }, { "text": "Western Sahara", "key": "EH", "value": "EH", "flag": "EH" }, { "text": "Yemen", "key": "YE", "value": "YE", "flag": "YE" }, { "text": "Zambia", "key": "ZM", "value": "ZM", "flag": "ZM" }, { "text": "Zimbabwe", "key": "ZW", "value": "ZW", "flag": "ZW" }]
//  .map(item=>{
//      return {
//          ...item,flag:item.flag.toLowerCase()
//      }
//  })
//aq bq cw gg im je bl" mf sx ss
var countries = [{
  key: "af",
  value: "af",
  flag: "af",
  text: "Afghanistan"
}, {
  key: "ax",
  value: "ax",
  flag: "ax",
  text: "Åland"
}, {
  key: "al",
  value: "al",
  flag: "al",
  text: "The Republic of Albania"
}, {
  key: "dz",
  value: "dz",
  flag: "dz",
  text: "The Peoples Democratic Republic of Algeria"
}, {
  key: "as",
  value: "as",
  flag: "as",
  text: "The Territory of American Samoa"
}, {
  key: "ad",
  value: "ad",
  flag: "ad",
  text: "The Principality of Andorra"
}, {
  key: "ao",
  value: "ao",
  flag: "ao",
  text: "The Republic of Angola"
}, {
  key: "ai",
  value: "ai",
  flag: "ai",
  text: "Anguilla"
}, //   {
//     key: "aq",
//     value: "aq",
//     flag: "aq",
//     text:
//       "All land and ice shelves south of the 60th parallel south",
//   },
{
  key: "ag",
  value: "ag",
  flag: "ag",
  text: "Antigua and Barbuda"
}, {
  key: "ar",
  value: "ar",
  flag: "ar",
  text: "The Argentine Republic"
}, {
  key: "am",
  value: "am",
  flag: "am",
  text: "The Republic of Armenia"
}, {
  key: "aw",
  value: "aw",
  flag: "aw",
  text: "Aruba"
}, {
  key: "au",
  value: "au",
  flag: "au",
  text: "The Commonwealth of Australia"
}, {
  key: "at",
  value: "at",
  flag: "at",
  text: "The Republic of Austria"
}, {
  key: "az",
  value: "az",
  flag: "az",
  text: "The Republic of Azerbaijan"
}, {
  key: "bs",
  value: "bs",
  flag: "bs",
  text: "The Commonwealth of The Bahamas"
}, {
  key: "bh",
  value: "bh",
  flag: "bh",
  text: "The Kingdom of Bahrain"
}, {
  key: "bd",
  value: "bd",
  flag: "bd",
  text: "The Peoples Republic of Bangladesh"
}, {
  key: "bb",
  value: "bb",
  flag: "bb",
  text: "Barbados"
}, {
  key: "by",
  value: "by",
  flag: "by",
  text: "The Republic of Belarus"
}, {
  key: "be",
  value: "be",
  flag: "be",
  text: "The Kingdom of Belgium"
}, {
  key: "bz",
  value: "bz",
  flag: "bz",
  text: "Belize"
}, {
  key: "bj",
  value: "bj",
  flag: "bj",
  text: "The Republic of Benin"
}, {
  key: "bm",
  value: "bm",
  flag: "bm",
  text: "Bermuda"
}, {
  key: "bt",
  value: "bt",
  flag: "bt",
  text: "The Kingdom of Bhutan"
}, {
  key: "bo",
  value: "bo",
  flag: "bo",
  text: "The Plurinational State of Bolivia"
}, //   {
//     key: "bq",
//     value: "bq",
//     flag: "bq",
//     text: "Bonaire, Sint Eustatius and Saba",
//   },
{
  key: "ba",
  value: "ba",
  flag: "ba",
  text: "Bosnia and Herzegovina"
}, {
  key: "bw",
  value: "bw",
  flag: "bw",
  text: "The Republic of Botswana"
}, {
  key: "bv",
  value: "bv",
  flag: "bv",
  text: "Bouvet Island"
}, {
  key: "br",
  value: "br",
  flag: "br",
  text: "The Federative Republic of Brazil"
}, {
  key: "io",
  value: "io",
  flag: "io",
  text: "The British Indian Ocean Territory"
}, {
  key: "bn",
  value: "bn",
  flag: "bn",
  text: "The Nation of Brunei, the Abode of Peace"
}, {
  key: "bg",
  value: "bg",
  flag: "bg",
  text: "The Republic of Bulgaria"
}, {
  key: "bf",
  value: "bf",
  flag: "bf",
  text: "Burkina Faso"
}, {
  key: "bi",
  value: "bi",
  flag: "bi",
  text: "The Republic of Burundi"
}, {
  key: "cv",
  value: "cv",
  flag: "cv",
  text: "The Republic of Cabo Verde"
}, {
  key: "kh",
  value: "kh",
  flag: "kh",
  text: "The Kingdom of Cambodia"
}, {
  key: "cm",
  value: "cm",
  flag: "cm",
  text: "The Republic of Cameroon"
}, {
  key: "ca",
  value: "ca",
  flag: "ca",
  text: "Canada"
}, {
  key: "ky",
  value: "ky",
  flag: "ky",
  text: "The Cayman Islands"
}, {
  key: "cf",
  value: "cf",
  flag: "cf",
  text: "The Central African Republic"
}, {
  key: "td",
  value: "td",
  flag: "td",
  text: "The Republic of Chad"
}, {
  key: "cl",
  value: "cl",
  flag: "cl",
  text: "The Republic of Chile"
}, {
  key: "cn",
  value: "cn",
  flag: "cn",
  text: "The Peoples Republic of China"
}, {
  key: "cx",
  value: "cx",
  flag: "cx",
  text: "The Territory of Christmas Island"
}, {
  key: "cc",
  value: "cc",
  flag: "cc",
  text: "The Territory of Cocos (Keeling) Islands"
}, {
  key: "co",
  value: "co",
  flag: "co",
  text: "The Republic of Colombia"
}, {
  key: "km",
  value: "km",
  flag: "km",
  text: "The Union of the Comoros"
}, {
  key: "cd",
  value: "cd",
  flag: "cd",
  text: "The Democratic Republic of the Congo"
}, {
  key: "cg",
  value: "cg",
  flag: "cg",
  text: "The Republic of the Congo"
}, {
  key: "ck",
  value: "ck",
  flag: "ck",
  text: "The Cook Islands"
}, {
  key: "cr",
  value: "cr",
  flag: "cr",
  text: "The Republic of Costa Rica"
}, {
  key: "ci",
  value: "ci",
  flag: "ci",
  text: "The Republic of Côte dIvoire"
}, {
  key: "hr",
  value: "hr",
  flag: "hr",
  text: "The Republic of Croatia"
}, {
  key: "cu",
  value: "cu",
  flag: "cu",
  text: "The Republic of Cuba"
}, //   {
//     key: "cw",
//     value: "cw",
//     flag: "cw",
//     text: "The Country of Curaçao",
//   },
{
  key: "cy",
  value: "cy",
  flag: "cy",
  text: "The Republic of Cyprus"
}, {
  key: "cz",
  value: "cz",
  flag: "cz",
  text: "The Czech Republic"
}, {
  key: "dk",
  value: "dk",
  flag: "dk",
  text: "The Kingdom of Denmark"
}, {
  key: "dj",
  value: "dj",
  flag: "dj",
  text: "The Republic of Djibouti"
}, {
  key: "dm",
  value: "dm",
  flag: "dm",
  text: "The Commonwealth of Dominica"
}, {
  key: "do",
  value: "do",
  flag: "do",
  text: "The Dominican Republic"
}, {
  key: "ec",
  value: "ec",
  flag: "ec",
  text: "The Republic of Ecuador"
}, {
  key: "eg",
  value: "eg",
  flag: "eg",
  text: "The Arab Republic of Egypt"
}, {
  key: "sv",
  value: "sv",
  flag: "sv",
  text: "The Republic of El Salvador"
}, {
  key: "gq",
  value: "gq",
  flag: "gq",
  text: "The Republic of Equatorial Guinea"
}, {
  key: "er",
  value: "er",
  flag: "er",
  text: "The State of Eritrea"
}, {
  key: "ee",
  value: "ee",
  flag: "ee",
  text: "The Republic of Estonia"
}, {
  key: "sz",
  value: "sz",
  flag: "sz",
  text: "The Kingdom of Eswatini"
}, {
  key: "et",
  value: "et",
  flag: "et",
  text: "The Federal Democratic Republic of Ethiopia"
}, {
  key: "fk",
  value: "fk",
  flag: "fk",
  text: "The Falkland Islands"
}, {
  key: "fo",
  value: "fo",
  flag: "fo",
  text: "The Faroe Islands"
}, {
  key: "fj",
  value: "fj",
  flag: "fj",
  text: "The Republic of Fiji"
}, {
  key: "fi",
  value: "fi",
  flag: "fi",
  text: "The Republic of Finland"
}, {
  key: "fr",
  value: "fr",
  flag: "fr",
  text: "The French Republic"
}, {
  key: "gf",
  value: "gf",
  flag: "gf",
  text: "Guyane"
}, {
  key: "pf",
  value: "pf",
  flag: "pf",
  text: "French Polynesia"
}, {
  key: "tf",
  value: "tf",
  flag: "tf",
  text: "The French Southern and Antarctic Lands"
}, {
  key: "ga",
  value: "ga",
  flag: "ga",
  text: "The Gabonese Republic"
}, {
  key: "gm",
  value: "gm",
  flag: "gm",
  text: "The Republic of The Gambia"
}, {
  key: "ge",
  value: "ge",
  flag: "ge",
  text: "Georgia"
}, {
  key: "de",
  value: "de",
  flag: "de",
  text: "The Federal Republic of Germany"
}, {
  key: "gh",
  value: "gh",
  flag: "gh",
  text: "The Republic of Ghana"
}, {
  key: "gi",
  value: "gi",
  flag: "gi",
  text: "Gibraltar"
}, {
  key: "gr",
  value: "gr",
  flag: "gr",
  text: "The Hellenic Republic"
}, {
  key: "gl",
  value: "gl",
  flag: "gl",
  text: "Kalaallit Nunaat"
}, {
  key: "gd",
  value: "gd",
  flag: "gd",
  text: "Grenada"
}, {
  key: "gp",
  value: "gp",
  flag: "gp",
  text: "Guadeloupe"
}, {
  key: "gu",
  value: "gu",
  flag: "gu",
  text: "The Territory of Guam"
}, {
  key: "gt",
  value: "gt",
  flag: "gt",
  text: "The Republic of Guatemala"
}, //   {
//     key: "gg",
//     value: "gg",
//     flag: "gg",
//     text: "The Bailiwick of Guernsey",
//   },
{
  key: "gn",
  value: "gn",
  flag: "gn",
  text: "The Republic of Guinea"
}, {
  key: "gw",
  value: "gw",
  flag: "gw",
  text: "The Republic of Guinea-Bissau"
}, {
  key: "gy",
  value: "gy",
  flag: "gy",
  text: "The Co-operative Republic of Guyana"
}, {
  key: "ht",
  value: "ht",
  flag: "ht",
  text: "The Republic of Haiti"
}, {
  key: "hm",
  value: "hm",
  flag: "hm",
  text: "The Territory of Heard Island and McDonald Islands"
}, {
  key: "va",
  value: "va",
  flag: "va",
  text: "The Holy See"
}, {
  key: "hn",
  value: "hn",
  flag: "hn",
  text: "The Republic of Honduras"
}, {
  key: "hk",
  value: "hk",
  flag: "hk",
  text: "The Hong Kong Special Administrative Region of China[10]"
}, {
  key: "hu",
  value: "hu",
  flag: "hu",
  text: "Hungary"
}, {
  key: "is",
  value: "is",
  flag: "is",
  text: "Iceland"
}, {
  key: "in",
  value: "in",
  flag: "in",
  text: "The Republic of India"
}, {
  key: "id",
  value: "id",
  flag: "id",
  text: "The Republic of Indonesia"
}, {
  key: "ir",
  value: "ir",
  flag: "ir",
  text: "The Islamic Republic of Iran"
}, {
  key: "iq",
  value: "iq",
  flag: "iq",
  text: "The Republic of Iraq"
}, {
  key: "ie",
  value: "ie",
  flag: "ie",
  text: "Ireland"
}, //   {
//     key: "im",
//     value: "im",
//     flag: "im",
//     text: "The Isle of Man",
//   },
{
  key: "il",
  value: "il",
  flag: "il",
  text: "The State of Israel"
}, {
  key: "it",
  value: "it",
  flag: "it",
  text: "The Italian Republic"
}, {
  key: "jm",
  value: "jm",
  flag: "jm",
  text: "Jamaica"
}, {
  key: "jp",
  value: "jp",
  flag: "jp",
  text: "Japan"
}, //   {
//     key: "je",
//     value: "je",
//     flag: "je",
//     text: "The Bailiwick of Jersey",
//   },
{
  key: "jo",
  value: "jo",
  flag: "jo",
  text: "The Hashemite Kingdom of Jordan"
}, {
  key: "kz",
  value: "kz",
  flag: "kz",
  text: "The Republic of Kazakhstan"
}, {
  key: "ke",
  value: "ke",
  flag: "ke",
  text: "The Republic of Kenya"
}, {
  key: "ki",
  value: "ki",
  flag: "ki",
  text: "The Republic of Kiribati"
}, {
  key: "kp",
  value: "kp",
  flag: "kp",
  text: "The Democratic Peoples Republic of Korea"
}, {
  key: "kr",
  value: "kr",
  flag: "kr",
  text: "The Republic of Korea"
}, {
  key: "kw",
  value: "kw",
  flag: "kw",
  text: "The State of Kuwait"
}, {
  key: "kg",
  value: "kg",
  flag: "kg",
  text: "The Kyrgyz Republic"
}, {
  key: "la",
  value: "la",
  flag: "la",
  text: "The Lao Peoples Democratic Republic"
}, {
  key: "lv",
  value: "lv",
  flag: "lv",
  text: "The Republic of Latvia"
}, {
  key: "lb",
  value: "lb",
  flag: "lb",
  text: "The Lebanese Republic"
}, {
  key: "ls",
  value: "ls",
  flag: "ls",
  text: "The Kingdom of Lesotho"
}, {
  key: "lr",
  value: "lr",
  flag: "lr",
  text: "The Republic of Liberia"
}, {
  key: "ly",
  value: "ly",
  flag: "ly",
  text: "The State of Libya"
}, {
  key: "li",
  value: "li",
  flag: "li",
  text: "The Principality of Liechtenstein"
}, {
  key: "lt",
  value: "lt",
  flag: "lt",
  text: "The Republic of Lithuania"
}, {
  key: "lu",
  value: "lu",
  flag: "lu",
  text: "The Grand Duchy of Luxembourg"
}, {
  key: "mo",
  value: "mo",
  flag: "mo",
  text: "Macao Special Administrative Region of China[11]"
}, {
  key: "mk",
  value: "mk",
  flag: "mk",
  text: "Republic of North Macedonia[12]"
}, {
  key: "mg",
  value: "mg",
  flag: "mg",
  text: "The Republic of Madagascar"
}, {
  key: "mw",
  value: "mw",
  flag: "mw",
  text: "The Republic of Malawi"
}, {
  key: "my",
  value: "my",
  flag: "my",
  text: "Malaysia"
}, {
  key: "mv",
  value: "mv",
  flag: "mv",
  text: "The Republic of Maldives"
}, {
  key: "ml",
  value: "ml",
  flag: "ml",
  text: "The Republic of Mali"
}, {
  key: "mt",
  value: "mt",
  flag: "mt",
  text: "The Republic of Malta"
}, {
  key: "mh",
  value: "mh",
  flag: "mh",
  text: "The Republic of the Marshall Islands"
}, {
  key: "mq",
  value: "mq",
  flag: "mq",
  text: "Martinique"
}, {
  key: "mr",
  value: "mr",
  flag: "mr",
  text: "The Islamic Republic of Mauritania"
}, {
  key: "mu",
  value: "mu",
  flag: "mu",
  text: "The Republic of Mauritius"
}, {
  key: "yt",
  value: "yt",
  flag: "yt",
  text: "The Department of Mayotte"
}, {
  key: "mx",
  value: "mx",
  flag: "mx",
  text: "The United Mexican States"
}, {
  key: "fm",
  value: "fm",
  flag: "fm",
  text: "The Federated States of Micronesia"
}, {
  key: "md",
  value: "md",
  flag: "md",
  text: "The Republic of Moldova"
}, {
  key: "mc",
  value: "mc",
  flag: "mc",
  text: "The Principality of Monaco"
}, {
  key: "mn",
  value: "mn",
  flag: "mn",
  text: "The State of Mongolia"
}, {
  key: "me",
  value: "me",
  flag: "me",
  text: "Montenegro"
}, {
  key: "ms",
  value: "ms",
  flag: "ms",
  text: "Montserrat"
}, {
  key: "ma",
  value: "ma",
  flag: "ma",
  text: "The Kingdom of Morocco"
}, {
  key: "mz",
  value: "mz",
  flag: "mz",
  text: "The Republic of Mozambique"
}, {
  key: "mm",
  value: "mm",
  flag: "mm",
  text: "The Republic of the Union of Myanmar"
}, {
  key: "na",
  value: "na",
  flag: "na",
  text: "The Republic of Namibia"
}, {
  key: "nr",
  value: "nr",
  flag: "nr",
  text: "The Republic of Nauru"
}, {
  key: "np",
  value: "np",
  flag: "np",
  text: "The Federal Democratic Republic of Nepal"
}, {
  key: "nl",
  value: "nl",
  flag: "nl",
  text: "The Kingdom of the Netherlands"
}, {
  key: "nc",
  value: "nc",
  flag: "nc",
  text: "New Caledonia"
}, {
  key: "nz",
  value: "nz",
  flag: "nz",
  text: "New Zealand"
}, {
  key: "ni",
  value: "ni",
  flag: "ni",
  text: "The Republic of Nicaragua"
}, {
  key: "ne",
  value: "ne",
  flag: "ne",
  text: "The Republic of the Niger"
}, {
  key: "ng",
  value: "ng",
  flag: "ng",
  text: "The Federal Republic of Nigeria"
}, {
  key: "nu",
  value: "nu",
  flag: "nu",
  text: "Niue"
}, {
  key: "nf",
  value: "nf",
  flag: "nf",
  text: "The Territory of Norfolk Island"
}, {
  key: "mp",
  value: "mp",
  flag: "mp",
  text: "The Commonwealth of the Northern Mariana Islands"
}, {
  key: "no",
  value: "no",
  flag: "no",
  text: "The Kingdom of Norway"
}, {
  key: "om",
  value: "om",
  flag: "om",
  text: "The Sultanate of Oman"
}, {
  key: "pk",
  value: "pk",
  flag: "pk",
  text: "The Islamic Republic of Pakistan"
}, {
  key: "pw",
  value: "pw",
  flag: "pw",
  text: "The Republic of Palau"
}, {
  key: "ps",
  value: "ps",
  flag: "ps",
  text: "The State of Palestine"
}, {
  key: "pa",
  value: "pa",
  flag: "pa",
  text: "The Republic of Panamá"
}, {
  key: "pg",
  value: "pg",
  flag: "pg",
  text: "The Independent State of Papua New Guinea"
}, {
  key: "py",
  value: "py",
  flag: "py",
  text: "The Republic of Paraguay"
}, {
  key: "pe",
  value: "pe",
  flag: "pe",
  text: "The Republic of Perú"
}, {
  key: "ph",
  value: "ph",
  flag: "ph",
  text: "The Republic of the Philippines"
}, {
  key: "pn",
  value: "pn",
  flag: "pn",
  text: "The Pitcairn, Henderson, Ducie and Oeno Islands"
}, {
  key: "pl",
  value: "pl",
  flag: "pl",
  text: "The Republic of Poland"
}, {
  key: "pt",
  value: "pt",
  flag: "pt",
  text: "The Portuguese Republic"
}, {
  key: "pr",
  value: "pr",
  flag: "pr",
  text: "The Commonwealth of Puerto Rico"
}, {
  key: "qa",
  value: "qa",
  flag: "qa",
  text: "The State of Qatar"
}, {
  key: "re",
  value: "re",
  flag: "re",
  text: "Réunion"
}, {
  key: "ro",
  value: "ro",
  flag: "ro",
  text: "Romania"
}, {
  key: "ru",
  value: "ru",
  flag: "ru",
  text: "The Russian Federation"
}, {
  key: "rw",
  value: "rw",
  flag: "rw",
  text: "The Republic of Rwanda"
}, //   {
//     key: "bl",
//     value: "bl",
//     flag: "bl",
//     text: "The Collectivity of Saint-Barthélemy",
//   },
{
  key: "sh",
  value: "sh",
  flag: "sh",
  text: "Saint Helena, Ascension and Tristan da Cunha"
}, {
  key: "kn",
  value: "kn",
  flag: "kn",
  text: "Saint Kitts and Nevis"
}, {
  key: "lc",
  value: "lc",
  flag: "lc",
  text: "Saint Lucia"
}, //   {
//     key: "mf",
//     value: "mf",
//     flag: "mf",
//     text: "The Collectivity of Saint-Martin",
//   },
{
  key: "pm",
  value: "pm",
  flag: "pm",
  text: "The Overseas Collectivity of Saint-Pierre and Miquelon"
}, {
  key: "vc",
  value: "vc",
  flag: "vc",
  text: "Saint Vincent and the Grenadines"
}, {
  key: "ws",
  value: "ws",
  flag: "ws",
  text: "The Independent State of Samoa"
}, {
  key: "sm",
  value: "sm",
  flag: "sm",
  text: "The Republic of San Marino"
}, {
  key: "st",
  value: "st",
  flag: "st",
  text: "The Democratic Republic of São Tomé and Príncipe"
}, {
  key: "sa",
  value: "sa",
  flag: "sa",
  text: "The Kingdom of Saudi Arabia"
}, {
  key: "sn",
  value: "sn",
  flag: "sn",
  text: "The Republic of Senegal"
}, {
  key: "rs",
  value: "rs",
  flag: "rs",
  text: "The Republic of Serbia"
}, {
  key: "sc",
  value: "sc",
  flag: "sc",
  text: "The Republic of Seychelles"
}, {
  key: "sl",
  value: "sl",
  flag: "sl",
  text: "The Republic of Sierra Leone"
}, {
  key: "sg",
  value: "sg",
  flag: "sg",
  text: "The Republic of Singapore"
}, //   {
//     key: "sx",
//     value: "sx",
//     flag: "sx",
//     text: "Sint Maarten",
//   },
{
  key: "sk",
  value: "sk",
  flag: "sk",
  text: "The Slovak Republic"
}, {
  key: "si",
  value: "si",
  flag: "si",
  text: "The Republic of Slovenia"
}, {
  key: "sb",
  value: "sb",
  flag: "sb",
  text: "The Solomon Islands"
}, {
  key: "so",
  value: "so",
  flag: "so",
  text: "The Federal Republic of Somalia"
}, {
  key: "za",
  value: "za",
  flag: "za",
  text: "The Republic of South Africa"
}, {
  key: "gs",
  value: "gs",
  flag: "gs",
  text: "South Georgia and the South Sandwich Islands"
}, //   {
//     key: "ss",
//     value: "ss",
//     flag: "ss",
//     text: "The Republic of South Sudan",
//   },
{
  key: "es",
  value: "es",
  flag: "es",
  text: "The Kingdom of Spain"
}, {
  key: "lk",
  value: "lk",
  flag: "lk",
  text: "The Democratic Socialist Republic of Sri Lanka"
}, {
  key: "sd",
  value: "sd",
  flag: "sd",
  text: "The Republic of the Sudan"
}, {
  key: "sr",
  value: "sr",
  flag: "sr",
  text: "The Republic of Suriname"
}, {
  key: "sj",
  value: "sj",
  flag: "sj",
  text: "Svalbard and Jan Mayen"
}, {
  key: "se",
  value: "se",
  flag: "se",
  text: "The Kingdom of Sweden"
}, {
  key: "ch",
  value: "ch",
  flag: "ch",
  text: "The Swiss Confederation"
}, {
  key: "sy",
  value: "sy",
  flag: "sy",
  text: "The Syrian Arab Republic"
}, {
  key: "tw",
  value: "tw",
  flag: "tw",
  text: "The Republic of China"
}, {
  key: "tj",
  value: "tj",
  flag: "tj",
  text: "The Republic of Tajikistan"
}, {
  key: "tz",
  value: "tz",
  flag: "tz",
  text: "The United Republic of Tanzania"
}, {
  key: "th",
  value: "th",
  flag: "th",
  text: "The Kingdom of Thailand"
}, {
  key: "tl",
  value: "tl",
  flag: "tl",
  text: "The Democratic Republic of Timor-Leste"
}, {
  key: "tg",
  value: "tg",
  flag: "tg",
  text: "The Togolese Republic"
}, {
  key: "tk",
  value: "tk",
  flag: "tk",
  text: "Tokelau"
}, {
  key: "to",
  value: "to",
  flag: "to",
  text: "The Kingdom of Tonga"
}, {
  key: "tt",
  value: "tt",
  flag: "tt",
  text: "The Republic of Trinidad and Tobago"
}, {
  key: "tn",
  value: "tn",
  flag: "tn",
  text: "The Republic of Tunisia"
}, {
  key: "tr",
  value: "tr",
  flag: "tr",
  text: "The Republic of Turkey"
}, {
  key: "tc",
  value: "tc",
  flag: "tc",
  text: "The Turks and Caicos Islands"
}, {
  key: "tv",
  value: "tv",
  flag: "tv",
  text: "Tuvalu"
}, {
  key: "ug",
  value: "ug",
  flag: "ug",
  text: "The Republic of Uganda"
}, {
  key: "ua",
  value: "ua",
  flag: "ua",
  text: "Ukraine"
}, {
  key: "ae",
  value: "ae",
  flag: "ae",
  text: "The United Arab Emirates"
}, {
  key: "gb",
  value: "gb",
  flag: "gb",
  text: "The United Kingdom of Great Britain and Northern Ireland"
}, {
  key: "um",
  value: "um",
  flag: "um",
  text: "Baker Island, Howland Island, Jarvis Island, Johnston Atoll, Kingman Reef, Midway Atoll, Navassa Island, Palmyra Atoll, and Wake Island"
}, {
  key: "us",
  value: "us",
  flag: "us",
  text: "The United States of America"
}, {
  key: "uy",
  value: "uy",
  flag: "uy",
  text: "The Oriental Republic of Uruguay"
}, {
  key: "uz",
  value: "uz",
  flag: "uz",
  text: "The Republic of Uzbekistan"
}, {
  key: "vu",
  value: "vu",
  flag: "vu",
  text: "The Republic of Vanuatu"
}, {
  key: "ve",
  value: "ve",
  flag: "ve",
  text: "The Bolivarian Republic of Venezuela"
}, {
  key: "vn",
  value: "vn",
  flag: "vn",
  text: "The Socialist Republic of Viet Nam"
}, {
  key: "vg",
  value: "vg",
  flag: "vg",
  text: "The Virgin Islands"
}, {
  key: "vi",
  value: "vi",
  flag: "vi",
  text: "The Virgin Islands of the United States"
}, {
  key: "wf",
  value: "wf",
  flag: "wf",
  text: "The Territory of the Wallis and Futuna Islands"
}, {
  key: "eh",
  value: "eh",
  flag: "eh",
  text: "The Sahrawi Arab Democratic Republic"
}, {
  key: "ye",
  value: "ye",
  flag: "ye",
  text: "The Republic of Yemen"
}, {
  key: "zm",
  value: "zm",
  flag: "zm",
  text: "The Republic of Zambia"
}, {
  key: "zw",
  value: "zw",
  flag: "zw",
  text: "The Republic of Zimbabwe"
}].map(function (item) {
  return _objectSpread(_objectSpread({}, item), {}, {
    value: item.flag.toUpperCase()
  });
});

/***/ })

}]);