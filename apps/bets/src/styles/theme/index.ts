import { ThemeType } from './types'

export const theme: ThemeType = {
  colors: {
    white: '#fff',
    gray: {
      100: '#e1e1e6',
      300: '#c4c4cc',
      400: '#8d8d99',
      500: '#7c7c8a',
      600: '#323238',
      700: '#29292e',
      800: '#202024',
      900: '#121214',
    },
    green: {
      300: '#00b37e',
      400: '#22C729',
      500: '#00875f',
      700: '#015f43',
    },
    red: {
      500: '#ab222e',
      700: '#7a1921',
    },
    yellow: {
      500: '#fba94c',
    },
    gradients: {
      purple: {
        500: 'linear-gradient(96.35deg, rgba(240, 72, 233, 0.7) 15.31%, rgba(249, 169, 241, 0.81) 93.34%)',
      },
    },
  },
  fonts: {
    roboto: "'Roboto', sans-serif",
    robotoMono: "'Roboto Mono', monospace",
    openSans: "'Open Sans', sans-serif",
  },
}
