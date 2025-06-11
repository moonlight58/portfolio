import { createI18n } from 'vue-i18n'
import en from './en.json'
import fr from './fr.json'

export default createI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: {
    en,
    fr
  }
})