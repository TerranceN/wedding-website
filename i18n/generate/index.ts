import fs from 'fs/promises';

import en from "./translations.en"
import pl from "./translations.pl"

(async () => {
  for (const [lang, translations] of [['en', en], ['pl', pl]]) {
    await fs.writeFile(`./i18n/translations.${lang}.json`, JSON.stringify(translations, null, 2));
  }
})();
