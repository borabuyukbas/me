import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages'

import TR from "@iconify/icons-twemoji/flag-turkey";
import EN from "@iconify/icons-twemoji/flag-united-kingdom";
import DE from "@iconify/icons-twemoji/flag-germany";

export const locales = [
    { name: "tr", icon: TR },
    { name: "en", icon: EN },
    { name: "de", icon: DE },
]

export const i18n =  createI18n({
    locale: "tr",
    fallbackLocale: "en",
    messages
});