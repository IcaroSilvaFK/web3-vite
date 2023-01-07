import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ptBR from './translate/pt-BR/index.json'
import en from './translate/en-US/index.json'

i18n.use(initReactI18next).init({
  resources: { 'en-US': en, 'pt-BR': ptBR },
  fallbackLng: navigator.languages[0],
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
