import { nextTick, watchEffect } from 'vue';
import { createI18n } from 'vue-i18n';
import en from '@locales/en.json';
import es from '@locales/es.json';
import fr from '@locales/fr.json';
import jp from '@locales/jp.json';
export const SUPPORT_LOCALES = ['en', 'es', 'fr', 'jp'];
const langs = { "en": en, "es": es, "fr": fr, "jp": jp };

export default function setupI18n(defmess) {
  let i18n;

  if(!i18n) {
    let locale = localStorage.getItem('lang') || 'en';

    i18n = createI18n({
      globalInjection: true,
      legacy: false,
      locale: locale,
      fallbackLocale: 'en',
      mode: 'composition',
      // Quick workaround, sets dummy obj to all locales to avoid occupying too much space if its too big.
      messages: Object.fromEntries(SUPPORT_LOCALES.map(locale => [locale, defmess]))
    });

  }

  // watch for language changes and load locale messages
  watchEffect(async () => {
    if(i18n.global.locale.value !== undefined) 
    {
      setI18nLanguage(i18n, i18n.global.locale.value);
    }
  });

  return i18n;
}

export async function setI18nLanguage(i18n, locale) {
  console.log("locale: ", locale);
  await loadLocaleMessages(i18n, i18n.global.locale.value);
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else {
    i18n.global.locale.value = locale;
  }

  document.querySelector('html').setAttribute('lang', locale);
  localStorage.setItem('lang', locale);
}


// TODO: Fix locale messages loading
export async function loadLocaleMessages(i18n, locale) {
  // load locale messages with dynamic import
  const messages = langs[locale];

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages);

  return nextTick();
}
