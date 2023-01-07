import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { Auth0Provider } from '@auth0/auth0-react'

import { router } from './routes'
import { GlobalCSS } from './styles/global'
import { theme } from './styles/theme'
import 'react-toastify/dist/ReactToastify.css'

import './i18n/settings'
import { SwitchLangModal } from './components/modals/SwitchLang'
import { I18NButton } from './components/I18NButton'

const domain: string = import.meta.env.VITE_AUTH_DOMAIN
const clientId: string = import.meta.env.VITE_AUTH_CLIENT_ID

console.log({ domain, clientId })

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={`${window.location.origin}`}
    >
      <ThemeProvider theme={theme}>
        <GlobalCSS />
        <RouterProvider router={router} />
        <ToastContainer />
        <SwitchLangModal />
        <I18NButton />
      </ThemeProvider>
    </Auth0Provider>
  </StrictMode>,
)
