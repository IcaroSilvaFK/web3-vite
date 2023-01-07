import { useTranslation } from 'react-i18next'

import { Container } from './styles'

export function ModalBody() {
  const { i18n } = useTranslation()

  function handleChangeLanguage(lang: string) {
    i18n.changeLanguage(lang)
  }

  return (
    <Container>
      <button
        className={i18n.language !== 'en' ? 'active' : ''}
        onClick={() => handleChangeLanguage('ptBR')}
      >
        <img
          src="https://cdn.icon-icons.com/icons2/1694/PNG/96/brbrazilflag_111698.png"
          alt="PT"
        />
      </button>
      <button
        className={i18n.language === 'en' ? 'active' : ''}
        onClick={() => handleChangeLanguage('en')}
      >
        <img
          src="https://cdn.icon-icons.com/icons2/1694/PNG/96/usunitedstatesflag_111929.png"
          alt="EN"
        />
      </button>
    </Container>
  )
}
