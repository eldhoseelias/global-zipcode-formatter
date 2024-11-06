"use strict";

const zipFormats = require("./zipcodePattern.js");

function formatZipCode(countryCode, zipCode) {
  const countryFormat = zipFormats[countryCode.toUpperCase()];
  const pattern = countryFormat?.pattern;
  const format = countryFormat?.format;

  if (!pattern) {
    return zipCode; // Return the original ZIP code if no pattern is found
  }

  const cleanedZipCode = zipCode.replace(/\s+/g, "").toUpperCase();

  if (countryCode.toUpperCase() == "US") {

    if (cleanedZipCode.length === 5 && /^\d{5}$/.test(cleanedZipCode)) {
      return cleanedZipCode; 
    }

    if (cleanedZipCode.length === 9 && /^\d{9}$/.test(cleanedZipCode)) {
      return `${cleanedZipCode.slice(0, 5)}-${cleanedZipCode.slice(5)}`;
    }
  }

  const match = cleanedZipCode.match(pattern);

  if (match) {
   
    if (match.length === 1) {
      return match[0];
    }

 
    let formattedZip = format;

    for (let i = 1; i < match.length; i++) {
      formattedZip = formattedZip.replace(`$${i}`, match[i] || "");
    }

    return formattedZip;
  } else {
    return zipCode;
  }
}

module.exports = formatZipCode;
