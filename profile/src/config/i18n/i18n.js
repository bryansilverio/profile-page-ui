import { createI18n } from "vue-i18n-pico";

function loadLocaleMessages() {
  const locales = require.context("./", true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

export const i18n = createI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "es",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "es",
  messages: loadLocaleMessages(),
});
