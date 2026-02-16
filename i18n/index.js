// eslint-disable-next-line @typescript-eslint/no-require-imports
var en = require("./translations.en.json");
// eslint-disable-next-line @typescript-eslint/no-require-imports
var pl = require("./translations.pl.json");

const i18n = {
  translations: {
    en,
    pl,
  },
  defaultLang: "en",
  useBrowserDefault: true,
  languageDataStore: "localStorage",
};

module.exports = i18n;
