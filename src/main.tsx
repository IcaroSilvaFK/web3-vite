import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { router } from './routes'
import { GlobalCSS } from './styles/global'
import { theme } from './styles/theme'
import 'react-toastify/dist/ReactToastify.css'

import './i18n/settings'
import { SwitchLangModal } from './components/modals/SwitchLang'
import { I18NButton } from './components/I18NButton'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <RouterProvider router={router} />
      <ToastContainer />
      <SwitchLangModal />
      <I18NButton />
    </ThemeProvider>
  </StrictMode>,
)
