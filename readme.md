# iso-3166

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Info on [ISO 3166][i3166].

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Matrix](#matrix)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`iso31661`](#iso31661)
    *   [`iso31661Reserved`](#iso31661reserved)
    *   [`iso31662`](#iso31662)
    *   [`iso31663`](#iso31663)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package contains info on ISO 3166.
The purpose of ISO 3166 is to define internationally recognized codes that we
can use when we refer to countries and their subdivisions.

ISO 3166 includes three parts:

*   **ISO 3166-1** defines codes for countries (such as `US` `USA` `United
    States of America`)
*   **ISO 3166-2** defines codes for subdivisions (such as `US-CA` for
    `California` in `US` `USA` `United States of America`)
*   **ISO 3166-3** defines codes for former countries (such as `BUMM` to refer
    to when `BU` `BUR` `Burma` revised its name to `MM` `MMR` `Myanmar` in 1989)

While the information in ISO 3166 is well known and freely available through for
example WikiPedia, it is not freely available in a machine readable format from
ISO.
That’s where this project comes in: it scrapes WikiPedia.

ISO 3166 is closely tied to the work of the United Nations: the names for
countries stem from the UN and ISO 3166 maps to numerical [UN M49][um49] codes
and vice versa.
UN M49 also includes information on bigger regions between our earth and
countries.

This project includes all three parts of ISO 3166 as separate exports:

*   [`iso31661`][1]
    — countries: list of [assigned][] ISO 3166-1 entries
*   [`iso31662`][2]
    — subdivisions: list of ISO 3166-2 entries
*   [`iso31663`][3]
    — revisions: list of ISO 3166-3 entries

Additionally, a list of reserved ISO 3166-1 entries is available:

*   [`iso31661Reserved`][1-reserved]
    — list of [reserved][] ISO 3166-1 entries

Finally, indexes are available to map between different codes:

*   [`iso31661Alpha2ToAlpha3`][1-a2-to-1-a3]
    — map ISO 3166-1 alpha-2 codes to ISO 3166-1 alpha-3 codes
*   [`iso31661Alpha2ToNumeric`][1-a2-to-1-n]
    — map ISO 3166-1 alpha-2 codes to ISO 3166-1 numeric (UN M49) codes
*   [`iso31661Alpha3ToAlpha2`][1-a3-to-1-a2]
    — map ISO 3166-1 alpha-3 codes to ISO 3166-1 alpha-2 codes
*   [`iso31661NumericToAlpha2`][1-n-to-1-a2]
    — map ISO 3166-1 numeric (UN M49) codes to ISO 3166-1 alpha-2 codes

## When should I use this?

You can use this package any time you have to deal with countries and
subdivisions or ISO 3166 in particular.
The alphabetical codes from ISO 3166 are more useful to humans, but the
numerical codes from [UN M49][um49] are more resilient to changes.
UN M49 also encodes regions bigger than countries, such as (sub)contintents.

## Matrix

<!--lint ignore no-html-->

<details>
<summary>Show ISO 3166-1 alpha-2 code matrix</summary>
<table>
  <thead>
    <tr>
      <th></th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
      <th>E</th>
      <th>F</th>
      <th>G</th>
      <th>H</th>
      <th>I</th>
      <th>J</th>
      <th>K</th>
      <th>L</th>
      <th>M</th>
      <th>N</th>
      <th>O</th>
      <th>P</th>
      <th>Q</th>
      <th>R</th>
      <th>S</th>
      <th>T</th>
      <th>U</th>
      <th>V</th>
      <th>W</th>
      <th>X</th>
      <th>Y</th>
      <th>Z</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">A</th>
      <td>AA</td>
      <td>AB</td>
      <td title="Ascension Island"><s>AC</s></td>
      <td title="Andorra"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:AD">AD</a></td>
      <td title="United Arab Emirates"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:AE">AE</a></td>
      <td title="Afghanistan"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:AF">AF</a></td>
      <td title="Antigua and Barbuda"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:AG">AG</a></td>
      <td>AH</td>
      <td title="Anguilla"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:AI">AI</a></td>
      <td>AJ</td>
      <td>AK</td>
      <td title="Albania"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:AL">AL</a></td>
      <td title="Armenia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:AM">AM</a></td>
      <td title="Netherlands Antilles"><s>AN</s></td>
      <td title="Angola"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:AO">AO</a></td>
      <td title="African Regional Industrial Property Organization"><s>AP</s></td>
      <td title="Antarctica"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:AQ">AQ</a></td>
      <td title="Argentina"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:AR">AR</a></td>
      <td title="American Samoa"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:AS">AS</a></td>
      <td title="Austria"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:AT">AT</a></td>
      <td title="Australia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:AU">AU</a></td>
      <td>AV</td>
      <td title="Aruba"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:AW">AW</a></td>
      <td title="Åland Islands"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:AX">AX</a></td>
      <td>AY</td>
      <td title="Azerbaijan"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:AZ">AZ</a></td>
    </tr>
    <tr>
      <th scope="row">B</th>
      <td title="Bosnia and Herzegovina"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BA">BA</a></td>
      <td title="Barbados"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BB">BB</a></td>
      <td>BC</td>
      <td title="Bangladesh"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BD">BD</a></td>
      <td title="Belgium"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BE">BE</a></td>
      <td title="Burkina Faso"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BF">BF</a></td>
      <td title="Bulgaria"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BG">BG</a></td>
      <td title="Bahrain"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BH">BH</a></td>
      <td title="Burundi"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BI">BI</a></td>
      <td title="Benin"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BJ">BJ</a></td>
      <td>BK</td>
      <td title="Saint Barthélemy"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BL">BL</a></td>
      <td title="Bermuda"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BM">BM</a></td>
      <td title="Brunei Darussalam"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BN">BN</a></td>
      <td title="Bolivia (Plurinational State of)"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BO">BO</a></td>
      <td>BP</td>
      <td title="Bonaire, Sint Eustatius and Saba"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BQ">BQ</a></td>
      <td title="Brazil"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BR">BR</a></td>
      <td title="Bahamas"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BS">BS</a></td>
      <td title="Bhutan"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BT">BT</a></td>
      <td title="Burma"><s>BU</s></td>
      <td title="Bouvet Island"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BV">BV</a></td>
      <td title="Botswana"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BW">BW</a></td>
      <td title="Benelux Trademarks and Designs Office"><s>BX</s></td>
      <td title="Belarus"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BY">BY</a></td>
      <td title="Belize"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:BZ">BZ</a></td>
    </tr>
    <tr>
      <th scope="row">C</th>
      <td title="Canada"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CA">CA</a></td>
      <td>CB</td>
      <td title="Cocos (Keeling) Islands"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CC">CC</a></td>
      <td title="Congo, Democratic Republic of the"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CD">CD</a></td>
      <td>CE</td>
      <td title="Central African Republic"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CF">CF</a></td>
      <td title="Congo"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CG">CG</a></td>
      <td title="Switzerland"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CH">CH</a></td>
      <td title="Côte d&#x27;Ivoire"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CI">CI</a></td>
      <td>CJ</td>
      <td title="Cook Islands"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CK">CK</a></td>
      <td title="Chile"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CL">CL</a></td>
      <td title="Cameroon"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CM">CM</a></td>
      <td title="China"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CN">CN</a></td>
      <td title="Colombia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CO">CO</a></td>
      <td title="Clipperton Island"><s>CP</s></td>
      <td title="Island of Sark"><s>CQ</s></td>
      <td title="Costa Rica"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CR">CR</a></td>
      <td title="Serbia and Montenegro"><s>CS</s></td>
      <td title="Canton and Enderbury Islands"><s>CT</s></td>
      <td title="Cuba"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CU">CU</a></td>
      <td title="Cabo Verde"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CV">CV</a></td>
      <td title="Curaçao"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CW">CW</a></td>
      <td title="Christmas Island"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CX">CX</a></td>
      <td title="Cyprus"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CY">CY</a></td>
      <td title="Czechia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:CZ">CZ</a></td>
    </tr>
    <tr>
      <th scope="row">D</th>
      <td>DA</td>
      <td>DB</td>
      <td>DC</td>
      <td title="German Democratic Republic"><s>DD</s></td>
      <td title="Germany"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:DE">DE</a></td>
      <td>DF</td>
      <td title="Diego Garcia"><s>DG</s></td>
      <td>DH</td>
      <td>DI</td>
      <td title="Djibouti"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:DJ">DJ</a></td>
      <td title="Denmark"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:DK">DK</a></td>
      <td>DL</td>
      <td title="Dominica"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:DM">DM</a></td>
      <td>DN</td>
      <td title="Dominican Republic"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:DO">DO</a></td>
      <td>DP</td>
      <td>DQ</td>
      <td>DR</td>
      <td>DS</td>
      <td>DT</td>
      <td>DU</td>
      <td>DV</td>
      <td>DW</td>
      <td>DX</td>
      <td title="Benin"><s>DY</s></td>
      <td title="Algeria"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:DZ">DZ</a></td>
    </tr>
    <tr>
      <th scope="row">E</th>
      <td title="Ceuta, Melilla"><s>EA</s></td>
      <td>EB</td>
      <td title="Ecuador"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:EC">EC</a></td>
      <td>ED</td>
      <td title="Estonia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:EE">EE</a></td>
      <td title="Union of Countries under the European Community Patent Convention"><s>EF</s></td>
      <td title="Egypt"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:EG">EG</a></td>
      <td title="Western Sahara"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:EH">EH</a></td>
      <td>EI</td>
      <td>EJ</td>
      <td>EK</td>
      <td>EL</td>
      <td title="European Trademark Office"><s>EM</s></td>
      <td>EN</td>
      <td>EO</td>
      <td title="European Patent Organization"><s>EP</s></td>
      <td>EQ</td>
      <td title="Eritrea"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:ER">ER</a></td>
      <td title="Spain"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:ES">ES</a></td>
      <td title="Ethiopia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:ET">ET</a></td>
      <td title="European Union"><s>EU</s></td>
      <td title="Eurasian Patent Organization"><s>EV</s></td>
      <td title="Estonia"><s>EW</s></td>
      <td>EX</td>
      <td>EY</td>
      <td title="Eurozone"><s>EZ</s></td>
    </tr>
    <tr>
      <th scope="row">F</th>
      <td>FA</td>
      <td>FB</td>
      <td>FC</td>
      <td>FD</td>
      <td>FE</td>
      <td>FF</td>
      <td>FG</td>
      <td>FH</td>
      <td title="Finland"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:FI">FI</a></td>
      <td title="Fiji"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:FJ">FJ</a></td>
      <td title="Falkland Islands (Malvinas)"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:FK">FK</a></td>
      <td title="Liechtenstein"><s>FL</s></td>
      <td title="Micronesia (Federated States of)"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:FM">FM</a></td>
      <td>FN</td>
      <td title="Faroe Islands"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:FO">FO</a></td>
      <td>FP</td>
      <td title="French Southern and Antarctic Territories"><s>FQ</s></td>
      <td title="France"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:FR">FR</a></td>
      <td>FS</td>
      <td>FT</td>
      <td>FU</td>
      <td>FV</td>
      <td>FW</td>
      <td title="France, Metropolitan"><s>FX</s></td>
      <td>FY</td>
      <td>FZ</td>
    </tr>
    <tr>
      <th scope="row">G</th>
      <td title="Gabon"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GA">GA</a></td>
      <td title="United Kingdom of Great Britain and Northern Ireland"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GB">GB</a></td>
      <td title="Patent Office of the Cooperation Council for the Arab States of the Gulf"><s>GC</s></td>
      <td title="Grenada"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GD">GD</a></td>
      <td title="Georgia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GE">GE</a></td>
      <td title="French Guiana"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GF">GF</a></td>
      <td title="Guernsey"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GG">GG</a></td>
      <td title="Ghana"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GH">GH</a></td>
      <td title="Gibraltar"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GI">GI</a></td>
      <td>GJ</td>
      <td>GK</td>
      <td title="Greenland"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GL">GL</a></td>
      <td title="Gambia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GM">GM</a></td>
      <td title="Guinea"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GN">GN</a></td>
      <td>GO</td>
      <td title="Guadeloupe"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GP">GP</a></td>
      <td title="Equatorial Guinea"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GQ">GQ</a></td>
      <td title="Greece"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GR">GR</a></td>
      <td title="South Georgia and the South Sandwich Islands"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GS">GS</a></td>
      <td title="Guatemala"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GT">GT</a></td>
      <td title="Guam"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GU">GU</a></td>
      <td>GV</td>
      <td title="Guinea-Bissau"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GW">GW</a></td>
      <td>GX</td>
      <td title="Guyana"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:GY">GY</a></td>
      <td>GZ</td>
    </tr>
    <tr>
      <th scope="row">H</th>
      <td>HA</td>
      <td>HB</td>
      <td>HC</td>
      <td>HD</td>
      <td>HE</td>
      <td>HF</td>
      <td>HG</td>
      <td>HH</td>
      <td>HI</td>
      <td>HJ</td>
      <td title="Hong Kong"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:HK">HK</a></td>
      <td>HL</td>
      <td title="Heard Island and McDonald Islands"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:HM">HM</a></td>
      <td title="Honduras"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:HN">HN</a></td>
      <td>HO</td>
      <td>HP</td>
      <td>HQ</td>
      <td title="Croatia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:HR">HR</a></td>
      <td>HS</td>
      <td title="Haiti"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:HT">HT</a></td>
      <td title="Hungary"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:HU">HU</a></td>
      <td title="Upper Volta"><s>HV</s></td>
      <td>HW</td>
      <td>HX</td>
      <td>HY</td>
      <td>HZ</td>
    </tr>
    <tr>
      <th scope="row">I</th>
      <td>IA</td>
      <td title="International Bureau of WIPO"><s>IB</s></td>
      <td title="Canary Islands"><s>IC</s></td>
      <td title="Indonesia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:ID">ID</a></td>
      <td title="Ireland"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:IE">IE</a></td>
      <td>IF</td>
      <td>IG</td>
      <td>IH</td>
      <td>II</td>
      <td>IJ</td>
      <td>IK</td>
      <td title="Israel"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:IL">IL</a></td>
      <td title="Isle of Man"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:IM">IM</a></td>
      <td title="India"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:IN">IN</a></td>
      <td title="British Indian Ocean Territory"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:IO">IO</a></td>
      <td>IP</td>
      <td title="Iraq"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:IQ">IQ</a></td>
      <td title="Iran (Islamic Republic of)"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:IR">IR</a></td>
      <td title="Iceland"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:IS">IS</a></td>
      <td title="Italy"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:IT">IT</a></td>
      <td>IU</td>
      <td>IV</td>
      <td>IW</td>
      <td>IX</td>
      <td>IY</td>
      <td>IZ</td>
    </tr>
    <tr>
      <th scope="row">J</th>
      <td title="Jamaica"><s>JA</s></td>
      <td>JB</td>
      <td>JC</td>
      <td>JD</td>
      <td title="Jersey"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:JE">JE</a></td>
      <td>JF</td>
      <td>JG</td>
      <td>JH</td>
      <td>JI</td>
      <td>JJ</td>
      <td>JK</td>
      <td>JL</td>
      <td title="Jamaica"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:JM">JM</a></td>
      <td>JN</td>
      <td title="Jordan"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:JO">JO</a></td>
      <td title="Japan"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:JP">JP</a></td>
      <td>JQ</td>
      <td>JR</td>
      <td>JS</td>
      <td title="Johnston Island"><s>JT</s></td>
      <td>JU</td>
      <td>JV</td>
      <td>JW</td>
      <td>JX</td>
      <td>JY</td>
      <td>JZ</td>
    </tr>
    <tr>
      <th scope="row">K</th>
      <td>KA</td>
      <td>KB</td>
      <td>KC</td>
      <td>KD</td>
      <td title="Kenya"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:KE">KE</a></td>
      <td>KF</td>
      <td title="Kyrgyzstan"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:KG">KG</a></td>
      <td title="Cambodia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:KH">KH</a></td>
      <td title="Kiribati"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:KI">KI</a></td>
      <td>KJ</td>
      <td>KK</td>
      <td>KL</td>
      <td title="Comoros"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:KM">KM</a></td>
      <td title="Saint Kitts and Nevis"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:KN">KN</a></td>
      <td>KO</td>
      <td title="Korea (Democratic People&#x27;s Republic of)"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:KP">KP</a></td>
      <td>KQ</td>
      <td title="Korea, Republic of"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:KR">KR</a></td>
      <td>KS</td>
      <td>KT</td>
      <td>KU</td>
      <td>KV</td>
      <td title="Kuwait"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:KW">KW</a></td>
      <td>KX</td>
      <td title="Cayman Islands"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:KY">KY</a></td>
      <td title="Kazakhstan"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:KZ">KZ</a></td>
    </tr>
    <tr>
      <th scope="row">L</th>
      <td title="Lao People&#x27;s Democratic Republic"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:LA">LA</a></td>
      <td title="Lebanon"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:LB">LB</a></td>
      <td title="Saint Lucia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:LC">LC</a></td>
      <td>LD</td>
      <td>LE</td>
      <td title="Libya Fezzan"><s>LF</s></td>
      <td>LG</td>
      <td>LH</td>
      <td title="Liechtenstein"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:LI">LI</a></td>
      <td>LJ</td>
      <td title="Sri Lanka"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:LK">LK</a></td>
      <td>LL</td>
      <td>LM</td>
      <td>LN</td>
      <td>LO</td>
      <td>LP</td>
      <td>LQ</td>
      <td title="Liberia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:LR">LR</a></td>
      <td title="Lesotho"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:LS">LS</a></td>
      <td title="Lithuania"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:LT">LT</a></td>
      <td title="Luxembourg"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:LU">LU</a></td>
      <td title="Latvia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:LV">LV</a></td>
      <td>LW</td>
      <td>LX</td>
      <td title="Libya"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:LY">LY</a></td>
      <td>LZ</td>
    </tr>
    <tr>
      <th scope="row">M</th>
      <td title="Morocco"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MA">MA</a></td>
      <td>MB</td>
      <td title="Monaco"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MC">MC</a></td>
      <td title="Moldova, Republic of"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MD">MD</a></td>
      <td title="Montenegro"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:ME">ME</a></td>
      <td title="Saint Martin (French part)"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MF">MF</a></td>
      <td title="Madagascar"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MG">MG</a></td>
      <td title="Marshall Islands"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MH">MH</a></td>
      <td title="Midway Islands"><s>MI</s></td>
      <td>MJ</td>
      <td title="North Macedonia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MK">MK</a></td>
      <td title="Mali"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:ML">ML</a></td>
      <td title="Myanmar"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MM">MM</a></td>
      <td title="Mongolia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MN">MN</a></td>
      <td title="Macao"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MO">MO</a></td>
      <td title="Northern Mariana Islands"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MP">MP</a></td>
      <td title="Martinique"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MQ">MQ</a></td>
      <td title="Mauritania"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MR">MR</a></td>
      <td title="Montserrat"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MS">MS</a></td>
      <td title="Malta"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MT">MT</a></td>
      <td title="Mauritius"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MU">MU</a></td>
      <td title="Maldives"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MV">MV</a></td>
      <td title="Malawi"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MW">MW</a></td>
      <td title="Mexico"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MX">MX</a></td>
      <td title="Malaysia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MY">MY</a></td>
      <td title="Mozambique"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:MZ">MZ</a></td>
    </tr>
    <tr>
      <th scope="row">N</th>
      <td title="Namibia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:NA">NA</a></td>
      <td>NB</td>
      <td title="New Caledonia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:NC">NC</a></td>
      <td>ND</td>
      <td title="Niger"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:NE">NE</a></td>
      <td title="Norfolk Island"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:NF">NF</a></td>
      <td title="Nigeria"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:NG">NG</a></td>
      <td title="New Hebrides"><s>NH</s></td>
      <td title="Nicaragua"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:NI">NI</a></td>
      <td>NJ</td>
      <td>NK</td>
      <td title="Netherlands, Kingdom of the"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:NL">NL</a></td>
      <td>NM</td>
      <td>NN</td>
      <td title="Norway"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:NO">NO</a></td>
      <td title="Nepal"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:NP">NP</a></td>
      <td title="Dronning Maud Land"><s>NQ</s></td>
      <td title="Nauru"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:NR">NR</a></td>
      <td>NS</td>
      <td title="Neutral Zone"><s>NT</s></td>
      <td title="Niue"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:NU">NU</a></td>
      <td>NV</td>
      <td>NW</td>
      <td>NX</td>
      <td>NY</td>
      <td title="New Zealand"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:NZ">NZ</a></td>
    </tr>
    <tr>
      <th scope="row">O</th>
      <td title="African Intellectual Property Organization"><s>OA</s></td>
      <td>OB</td>
      <td>OC</td>
      <td>OD</td>
      <td>OE</td>
      <td>OF</td>
      <td>OG</td>
      <td>OH</td>
      <td>OI</td>
      <td>OJ</td>
      <td>OK</td>
      <td>OL</td>
      <td title="Oman"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:OM">OM</a></td>
      <td>ON</td>
      <td>OO</td>
      <td>OP</td>
      <td>OQ</td>
      <td>OR</td>
      <td>OS</td>
      <td>OT</td>
      <td>OU</td>
      <td>OV</td>
      <td>OW</td>
      <td>OX</td>
      <td>OY</td>
      <td>OZ</td>
    </tr>
    <tr>
      <th scope="row">P</th>
      <td title="Panama"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:PA">PA</a></td>
      <td>PB</td>
      <td title="Pacific Islands"><s>PC</s></td>
      <td>PD</td>
      <td title="Peru"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:PE">PE</a></td>
      <td title="French Polynesia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:PF">PF</a></td>
      <td title="Papua New Guinea"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:PG">PG</a></td>
      <td title="Philippines"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:PH">PH</a></td>
      <td title="Philippines"><s>PI</s></td>
      <td>PJ</td>
      <td title="Pakistan"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:PK">PK</a></td>
      <td title="Poland"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:PL">PL</a></td>
      <td title="Saint Pierre and Miquelon"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:PM">PM</a></td>
      <td title="Pitcairn"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:PN">PN</a></td>
      <td>PO</td>
      <td>PP</td>
      <td>PQ</td>
      <td title="Puerto Rico"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:PR">PR</a></td>
      <td title="Palestine, State of"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:PS">PS</a></td>
      <td title="Portugal"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:PT">PT</a></td>
      <td title="United States Miscellaneous Pacific Islands"><s>PU</s></td>
      <td>PV</td>
      <td title="Palau"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:PW">PW</a></td>
      <td>PX</td>
      <td title="Paraguay"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:PY">PY</a></td>
      <td title="Panama Canal Zone"><s>PZ</s></td>
    </tr>
    <tr>
      <th scope="row">Q</th>
      <td title="Qatar"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:QA">QA</a></td>
      <td>QB</td>
      <td>QC</td>
      <td>QD</td>
      <td>QE</td>
      <td>QF</td>
      <td>QG</td>
      <td>QH</td>
      <td>QI</td>
      <td>QJ</td>
      <td>QK</td>
      <td>QL</td>
      <td>QM</td>
      <td>QN</td>
      <td>QO</td>
      <td>QP</td>
      <td>QQ</td>
      <td>QR</td>
      <td>QS</td>
      <td>QT</td>
      <td>QU</td>
      <td>QV</td>
      <td>QW</td>
      <td>QX</td>
      <td>QY</td>
      <td>QZ</td>
    </tr>
    <tr>
      <th scope="row">R</th>
      <td title="Argentina"><s>RA</s></td>
      <td title="Bolivia"><s>RB</s></td>
      <td title="China"><s>RC</s></td>
      <td>RD</td>
      <td title="Réunion"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:RE">RE</a></td>
      <td>RF</td>
      <td>RG</td>
      <td title="Haiti"><s>RH</s></td>
      <td title="Indonesia"><s>RI</s></td>
      <td>RJ</td>
      <td>RK</td>
      <td title="Lebanon"><s>RL</s></td>
      <td title="Madagascar"><s>RM</s></td>
      <td title="Niger"><s>RN</s></td>
      <td title="Romania"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:RO">RO</a></td>
      <td title="Philippines"><s>RP</s></td>
      <td>RQ</td>
      <td>RR</td>
      <td title="Serbia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:RS">RS</a></td>
      <td>RT</td>
      <td title="Russian Federation"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:RU">RU</a></td>
      <td>RV</td>
      <td title="Rwanda"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:RW">RW</a></td>
      <td>RX</td>
      <td>RY</td>
      <td>RZ</td>
    </tr>
    <tr>
      <th scope="row">S</th>
      <td title="Saudi Arabia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SA">SA</a></td>
      <td title="Solomon Islands"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SB">SB</a></td>
      <td title="Seychelles"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SC">SC</a></td>
      <td title="Sudan"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SD">SD</a></td>
      <td title="Sweden"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SE">SE</a></td>
      <td title="Finland"><s>SF</s></td>
      <td title="Singapore"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SG">SG</a></td>
      <td title="Saint Helena, Ascension and Tristan da Cunha"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SH">SH</a></td>
      <td title="Slovenia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SI">SI</a></td>
      <td title="Svalbard and Jan Mayen"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SJ">SJ</a></td>
      <td title="Slovakia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SK">SK</a></td>
      <td title="Sierra Leone"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SL">SL</a></td>
      <td title="San Marino"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SM">SM</a></td>
      <td title="Senegal"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SN">SN</a></td>
      <td title="Somalia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SO">SO</a></td>
      <td>SP</td>
      <td>SQ</td>
      <td title="Suriname"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SR">SR</a></td>
      <td title="South Sudan"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SS">SS</a></td>
      <td title="Sao Tome and Principe"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:ST">ST</a></td>
      <td title="USSR"><s>SU</s></td>
      <td title="El Salvador"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SV">SV</a></td>
      <td>SW</td>
      <td title="Sint Maarten (Dutch part)"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SX">SX</a></td>
      <td title="Syrian Arab Republic"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SY">SY</a></td>
      <td title="Eswatini"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:SZ">SZ</a></td>
    </tr>
    <tr>
      <th scope="row">T</th>
      <td title="Tristan da Cunha"><s>TA</s></td>
      <td>TB</td>
      <td title="Turks and Caicos Islands"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:TC">TC</a></td>
      <td title="Chad"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:TD">TD</a></td>
      <td>TE</td>
      <td title="French Southern Territories"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:TF">TF</a></td>
      <td title="Togo"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:TG">TG</a></td>
      <td title="Thailand"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:TH">TH</a></td>
      <td>TI</td>
      <td title="Tajikistan"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:TJ">TJ</a></td>
      <td title="Tokelau"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:TK">TK</a></td>
      <td title="Timor-Leste"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:TL">TL</a></td>
      <td title="Turkmenistan"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:TM">TM</a></td>
      <td title="Tunisia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:TN">TN</a></td>
      <td title="Tonga"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:TO">TO</a></td>
      <td title="East Timor"><s>TP</s></td>
      <td>TQ</td>
      <td title="Türkiye"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:TR">TR</a></td>
      <td>TS</td>
      <td title="Trinidad and Tobago"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:TT">TT</a></td>
      <td>TU</td>
      <td title="Tuvalu"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:TV">TV</a></td>
      <td title="Taiwan, Province of China"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:TW">TW</a></td>
      <td>TX</td>
      <td>TY</td>
      <td title="Tanzania, United Republic of"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:TZ">TZ</a></td>
    </tr>
    <tr>
      <th scope="row">U</th>
      <td title="Ukraine"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:UA">UA</a></td>
      <td>UB</td>
      <td>UC</td>
      <td>UD</td>
      <td>UE</td>
      <td>UF</td>
      <td title="Uganda"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:UG">UG</a></td>
      <td>UH</td>
      <td>UI</td>
      <td>UJ</td>
      <td title="United Kingdom"><s>UK</s></td>
      <td>UL</td>
      <td title="United States Minor Outlying Islands"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:UM">UM</a></td>
      <td title="United Nations"><s>UN</s></td>
      <td>UO</td>
      <td>UP</td>
      <td>UQ</td>
      <td>UR</td>
      <td title="United States of America"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:US">US</a></td>
      <td>UT</td>
      <td>UU</td>
      <td>UV</td>
      <td>UW</td>
      <td>UX</td>
      <td title="Uruguay"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:UY">UY</a></td>
      <td title="Uzbekistan"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:UZ">UZ</a></td>
    </tr>
    <tr>
      <th scope="row">V</th>
      <td title="Holy See"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:VA">VA</a></td>
      <td>VB</td>
      <td title="Saint Vincent and the Grenadines"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:VC">VC</a></td>
      <td title="Viet-Nam, Democratic Republic of"><s>VD</s></td>
      <td title="Venezuela (Bolivarian Republic of)"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:VE">VE</a></td>
      <td>VF</td>
      <td title="Virgin Islands (British)"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:VG">VG</a></td>
      <td>VH</td>
      <td title="Virgin Islands (U.S.)"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:VI">VI</a></td>
      <td>VJ</td>
      <td>VK</td>
      <td>VL</td>
      <td>VM</td>
      <td title="Viet Nam"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:VN">VN</a></td>
      <td>VO</td>
      <td>VP</td>
      <td>VQ</td>
      <td>VR</td>
      <td>VS</td>
      <td>VT</td>
      <td title="Vanuatu"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:VU">VU</a></td>
      <td>VV</td>
      <td>VW</td>
      <td>VX</td>
      <td>VY</td>
      <td>VZ</td>
    </tr>
    <tr>
      <th scope="row">W</th>
      <td>WA</td>
      <td>WB</td>
      <td>WC</td>
      <td>WD</td>
      <td>WE</td>
      <td title="Wallis and Futuna"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:WF">WF</a></td>
      <td title="Grenada"><s>WG</s></td>
      <td>WH</td>
      <td>WI</td>
      <td>WJ</td>
      <td title="Wake Island"><s>WK</s></td>
      <td title="Saint Lucia"><s>WL</s></td>
      <td>WM</td>
      <td>WN</td>
      <td title="World Intellectual Property Organization"><s>WO</s></td>
      <td>WP</td>
      <td>WQ</td>
      <td>WR</td>
      <td title="Samoa"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:WS">WS</a></td>
      <td>WT</td>
      <td>WU</td>
      <td title="Saint Vincent"><s>WV</s></td>
      <td>WW</td>
      <td>WX</td>
      <td>WY</td>
      <td>WZ</td>
    </tr>
    <tr>
      <th scope="row">X</th>
      <td>XA</td>
      <td>XB</td>
      <td>XC</td>
      <td>XD</td>
      <td>XE</td>
      <td>XF</td>
      <td>XG</td>
      <td>XH</td>
      <td>XI</td>
      <td>XJ</td>
      <td>XK</td>
      <td>XL</td>
      <td>XM</td>
      <td>XN</td>
      <td>XO</td>
      <td>XP</td>
      <td>XQ</td>
      <td>XR</td>
      <td>XS</td>
      <td>XT</td>
      <td>XU</td>
      <td>XV</td>
      <td>XW</td>
      <td>XX</td>
      <td>XY</td>
      <td>XZ</td>
    </tr>
    <tr>
      <th scope="row">Y</th>
      <td>YA</td>
      <td>YB</td>
      <td>YC</td>
      <td title="Yemen, Democratic"><s>YD</s></td>
      <td title="Yemen"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:YE">YE</a></td>
      <td>YF</td>
      <td>YG</td>
      <td>YH</td>
      <td>YI</td>
      <td>YJ</td>
      <td>YK</td>
      <td>YL</td>
      <td>YM</td>
      <td>YN</td>
      <td>YO</td>
      <td>YP</td>
      <td>YQ</td>
      <td>YR</td>
      <td>YS</td>
      <td title="Mayotte"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:YT">YT</a></td>
      <td title="Yugoslavia"><s>YU</s></td>
      <td title="Venezuela"><s>YV</s></td>
      <td>YW</td>
      <td>YX</td>
      <td>YY</td>
      <td>YZ</td>
    </tr>
    <tr>
      <th scope="row">Z</th>
      <td title="South Africa"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:ZA">ZA</a></td>
      <td>ZB</td>
      <td>ZC</td>
      <td>ZD</td>
      <td>ZE</td>
      <td>ZF</td>
      <td>ZG</td>
      <td>ZH</td>
      <td>ZI</td>
      <td>ZJ</td>
      <td>ZK</td>
      <td>ZL</td>
      <td title="Zambia"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:ZM">ZM</a></td>
      <td>ZN</td>
      <td>ZO</td>
      <td>ZP</td>
      <td>ZQ</td>
      <td title="Zaire"><s>ZR</s></td>
      <td>ZS</td>
      <td>ZT</td>
      <td>ZU</td>
      <td>ZV</td>
      <td title="Zimbabwe"><a href="https://en.wikipedia.org/wiki/ISO_3166-1:ZW">ZW</a></td>
      <td>ZX</td>
      <td>ZY</td>
      <td>ZZ</td>
    </tr>
  </tbody>
</table>
</details>

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install iso-3166
```

In Deno with [`esm.sh`][esmsh]:

```js
import * as iso3166 from 'https://esm.sh/iso-3166@4'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import * as iso3166 from 'https://esm.sh/iso-3166@4?bundle'
</script>
```

## Use

See examples below.

## API

This package exports the identifiers `iso31661`, `iso31661Alpha2ToAlpha3`,
`iso31661Alpha2ToNumeric`, `iso31661Alpha3ToAlpha2`, `iso31661NumericToAlpha2`,
`iso31661Reserved`, `iso31662`, `iso31663`.
There is no default export.

### `iso31661`

List of assigned ISO 3166-1 countries ([`Array<ISO31661Entry>`][1-entry]).

###### Example

```js
import {iso31661} from 'iso-3166'

console.log(iso31661)
```

Yields:

```js
[
  {state: 'assigned', alpha2: 'AD', alpha3: 'AND', numeric: '020', name: 'Andorra'},
  {state: 'assigned', alpha2: 'AE', alpha3: 'ARE', numeric: '784', name: 'United Arab Emirates'},
  {state: 'assigned', alpha2: 'AF', alpha3: 'AFG', numeric: '004', name: 'Afghanistan'},
  {state: 'assigned', alpha2: 'AG', alpha3: 'ATG', numeric: '028', name: 'Antigua and Barbuda'},
  {state: 'assigned', alpha2: 'AI', alpha3: 'AIA', numeric: '660', name: 'Anguilla'},
  // …
]
```

### `iso31661Reserved`

List of reserved ISO 3166-1 countries ([`Array<ISO31661Entry>`][1-entry]).

###### Example

```js
import {iso31661Reserved} from 'iso-3166'

console.log(iso31661Reserved)
```

Yields:

```js
[
  {state: 'exceptionally-reserved', alpha2: 'AC', name: 'Ascension Island'},
  {state: 'transitionally-reserved', alpha2: 'AN', name: 'Netherlands Antilles'},
  {state: 'indeterminately-reserved', alpha2: 'AP', name: 'African Regional Industrial Property Organization'},
  {state: 'transitionally-reserved', alpha2: 'BU', name: 'Burma'},
  {state: 'indeterminately-reserved', alpha2: 'BX', name: 'Benelux Trademarks and Designs Office'},
  // …
]
```

### `iso31662`

List of ISO 3166-2 subdivisions ([`Array<ISO31662Entry>`][2-entry]).

###### Example

```js
import {iso31662} from 'iso-3166'

console.log(iso31662)
```

Yields:

```js
[
  {code: 'AD-02', name: 'Canillo', parent: 'AD'},
  {code: 'AD-03', name: 'Encamp', parent: 'AD'},
  // …
  {code: 'BD-01', name: 'Bandarban', parent: 'BD-B'},
  {code: 'BD-02', name: 'Barguna', parent: 'BD-A'},
  // …
  {code: 'BD-A', name: 'Barisal', parent: 'BD'},
  {code: 'BD-B', name: 'Chittagong', parent: 'BD'},
  // …
]
```

### `iso31663`

List of ISO 3166-3 changes ([`Array<ISO31663Entry>`][3-entry]).

###### Example

```js
import {iso31663} from 'iso-3166'

console.log(iso31663)
```

Yields:

```js
[
  {
    alpha4: 'AIDJ',
    type: 'change',
    from: {state: 'formerly-assigned', alpha2: 'AI', alpha3: 'AFI', numeric: '262', name: 'French Afars and Issas'},
    to: [
      {state: 'assigned', alpha2: 'DJ', alpha3: 'DJI', numeric: '262', name: 'Djibouti'}
    ]
  },
  {
    alpha4: 'ANHH',
    type: 'split',
    from: {state: 'formerly-assigned', alpha2: 'AN', alpha3: 'ANT', numeric: '530', name: 'Netherlands Antilles'},
    to: [
      {state: 'assigned', alpha2: 'BQ', alpha3: 'BES', numeric: '535', name: 'Bonaire, Sint Eustatius and Saba'},
      {state: 'assigned', alpha2: 'CW', alpha3: 'CUW', numeric: '531', name: 'Curaçao'},
      {state: 'assigned', alpha2: 'SX', alpha3: 'SXM', numeric: '534', name: 'Sint Maarten (Dutch part)'}
    ]
  },
  {
    alpha4: 'BQAQ',
    type: 'merge',
    from: {state: 'formerly-assigned', alpha2: 'BQ', alpha3: 'ATB', name: 'British Antarctic Territory'},
    to: [
      {state: 'assigned', alpha2: 'AQ', alpha3: 'ATA', numeric: '010', name: 'Antarctica'}
    ]
  },
  // …
]
```

#### `ISO31661Entry`

Object representing a country.

*   `state` ([`State`][state])
    — state (example: `'assigned'`)
*   `alpha2` (`string`)
    — ISO 3166-1 alpha-2 code (example: `'GB'`)
*   `alpha3` (`string?`)
    — ISO 3166-1 alpha-3 code (example: `'GBR'`)
*   `numeric` (`string?`)
    — ISO 3166-1 numeric (UN M49) code (example: `'826'`)
*   `name` (`string?`)
    — name (example: `'United Kingdom of Great Britain and Northern Ireland'`)

Based on the state of the entry, fields may be available.
[Assigned][] entries have all fields.
[Reserved][] entries have `alpha2` and `name` fields.

##### `State`

`string`, one of the following:

*   `'assigned'`
    — currently assigned
    (example: `VA` `VAT` `Holy See`)
*   `'indeterminately-reserved'`
    — reserved as other coding systems use them
    (example: `FL` was used on some car vehicle distinguishing signs from `LI`
    `LIE` `Liechtenstein` before 1949)
*   `'exceptionally-reserved'`
    — reserved by a national ISO member body
    (example: `UK` is reserved by `United Kingdom`)
*   `'transitionally-reserved'`
    — reserved for a while after removing a country
    (example: `BU` `Burma` as it changed names to `MM`
    `MMR` `Myanmar` in 1989)
*   `'formerly-assigned'`
    — codes that were previously in use but are no longer strictly reserved
    (example: `PZ` `Panama Canal Zone`, which was a `US`
    `USA` `United States of America` controlled area until 1979)

###### Assigned

Many ISO 3166-1 entries are assigned and therefore have a `state` of
`'assigned'`.

###### Reserved

Some ISO 3166-1 entries are not assigned but still have some data attached to
them.

###### User-assigned

ISO 3166-1 also has a concept of “user-assigned” codes, which can be used by
users (like you) to represent things not in ISO 3166 (example: `XZ` represents
international waters in UN/LOCODE).

The user-assigned codes are:

*   ISO 3166-1 alpha-2:
    `AA`, `QM` to `QZ`, `XA` to `XZ`, and `ZZ`
*   ISO 3166-1 alpha-3:
    `AAA` to `AAZ`, `QMA` to `QZZ`, `XAA` to `XZZ`, and `ZZA` to `ZZZ`
*   ISO 3166-1 numeric:
    `900` to `999`

User-assigned codes will not be used by ISO 3166 and are not exposed by this
package.

###### Unassigned

All other codes are unassigned and may be used by ISO 3166 in the future.

Unassigned codes are not exposed by this package.

#### `ISO31662Entry`

Object representing a subdivision of a country.

*   `code` (`string`)
    — ISO 3166-2 code (example: `GB-BFS`)
*   `name` (`string`)
    — name (example: `'Belfast'`)
*   `parent` (`string`)
    — ISO 3166-1 alpha-2 code or ISO 3166-2 code (example: `'GB'`)

The `code` field always has the format of an ISO 3166 alpha-2 code, followed by
a hyphen minus (`-`), and one, two, or three upper alphabetical or numerical
characters.
The latter part of the code is not unique: `ID-RI` is the Riau province of
Indonesia and `NG-RI` is the Rivers province in Nigeria.

The `parent` field can be either the ISO 3166-1 alpha-2 of a country, or another
ISO 3166-2 code of a subdivision.
The latter is true for `BE-WNA` `Namur`, whose parent is `BE-WAL`
`Waals Gewest`, whose parent in turn is `BE` `BEL` `Belgium`.
To get the country a subdivision is a part of, do something like
`code.slice(0, 2)` to get the ISO 3166-1 alpha-2 code from an ISO 3166-2 code.

#### `ISO31663Entry`

Object representing a change to a country.

*   `alpha4` (`string`)
    — ISO 3166-3 alpha-4 code (example: `ANHH`)
*   `type` ([`Type`][type])
    — type of revision (example: `'split'`)
*   `from` ([`ISO31661Entry`][1-entry])
    — country before revision
*   `to` ([`ISO31661Entry[]`][1-entry])
    — list of countries after revision

The entries in `from` and `to` may not match current ISO 3166-1 entries.
For example, `CSHH` represents the split of `CS` `CSK` `Czechoslovakia` to
`CZ` `CZE` `Czech Republic` and `SK` `SVK` `Slovakia`, but the former now uses
`CZ` `CZE` `Czechia`.
Another example, `YUCS` represents the change of `YU` `YUG` `Yugoslavia` to
`CS` `SCG` `Serbia and Montenegro`, but the latter later split with `CSXX` to `ME` `MNE` `Montenegro` and `RS` `SRB` `Serbia`.

##### `Type`

`string`, one of the following:

*   `'merge'`
    — revision where one country merged with others
    (example: `DDDE` represents the merger from `DD` `DDR` `German Democratic
    Republic` to form `DE` `DEU` `Germany` in 1990)
*   `'change'`
    — significant name revision
    (example: `BYAA` represents the name change from `BY` `BYS` `Byelorussian
    SSR` to `BY` `BLR` `Belarus` in 1992)
*   `'split'`
    — revision where one country split into others
    (example: `NTHH` represents the division of `NT` `NTZ` `Neutral Zone` to
    `IQ` `IRQ` `Iraq` and `SA` `SAU` `Saudi Arabia` in 1993)

## Types

This package is fully typed with [TypeScript][].
It exports the additional types `ISO31661Entry`, `ISO31661AssignedEntry`,
`ISO31661ReservedEntry`, `ISO31662Entry`, `ISO31663Entry`, `State`, and `Type`.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/bcp-47`](https://github.com/wooorm/bcp-47)
    — parse and stringify BCP 47 language tags
*   [`wooorm/bcp-47-normalize`](https://github.com/wooorm/bcp-47-normalize)
    — normalize, canonicalize, and format BCP 47 tags
*   [`wooorm/bcp-47-match`](https://github.com/wooorm/bcp-47-match)
    — match BCP 47 language tags with language ranges per RFC 4647
*   [`wooorm/iso-639-2`](https://github.com/wooorm/iso-639-2)
    — ISO 639-2 codes
*   [`wooorm/iso-639-3`](https://github.com/wooorm/iso-639-3)
    — ISO 639-3 codes
*   [`wooorm/iso-15924`](https://github.com/wooorm/iso-15924)
    — ISO 15924 codes
*   [`wooorm/un-m49`](https://github.com/wooorm/un-m49)
    — UN M49 codes

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://github.com/wooorm/iso-3166/workflows/main/badge.svg

[build]: https://github.com/wooorm/iso-3166/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/iso-3166.svg

[coverage]: https://codecov.io/github/wooorm/iso-3166

[downloads-badge]: https://img.shields.io/npm/dm/iso-3166.svg

[downloads]: https://www.npmjs.com/package/iso-3166

[size-badge]: https://img.shields.io/bundlephobia/minzip/iso-3166.svg

[size]: https://bundlephobia.com/result?p=iso-3166

[npm]: https://docs.npmjs.com/cli/install

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[i3166]: https://www.iso.org/iso-3166-country-codes.html

[um49]: https://unstats.un.org/unsd/methodology/m49/

[1]: 1.js

[2]: 2.js

[3]: 3.js

[1-reserved]: 1-reserved.js

[1-a2-to-1-a3]: 1-a2-to-1-a3.js

[1-a2-to-1-n]: 1-a2-to-1-n.js

[1-a3-to-1-a2]: 1-a3-to-1-a2.js

[1-n-to-1-a2]: 1-n-to-1-a2.js

[1-entry]: #iso31661entry

[2-entry]: #iso31662entry

[3-entry]: #iso31663entry

[state]: #state

[type]: #type

[assigned]: #assigned

[reserved]: #reserved
