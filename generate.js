var Cldr = require("cldrjs");
var data = require("cldr-data");
var glob = require("glob");
var path = require("path");
var fs = require("fs");

// Find all supported languages
var filenames = glob.sync(path.join(path.dirname(require.resolve("cldr-data")), "main/*"));
var locales = filenames.map((filename) => path.basename(filename))

// Load suppl. data (required)
Cldr.load(data("supplemental/likelySubtags"));

// Language Data
// =============

var resultNames = {};
locales.forEach((locale) => {
  // Locale specific data
  Cldr.load(data("main/" + locale + "/languages"));

  // Bind to locale
  var cldr = new Cldr(locale);

  // Grab language code (minimal)
  var lang = cldr.attributes.minLanguageId.split("-")[0];
  if (resultNames[lang] == null) {
    resultNames[lang] = cldr.main("localeDisplayNames/languages/" + lang);
  }
});

// Write to known file location
fs.writeFileSync("data.json", JSON.stringify({
  languageNames: resultNames,
}));
