var DATA = require("./data.json");

function get(language) {
  return DATA.languageNames[language];
}

module.exports = get;
