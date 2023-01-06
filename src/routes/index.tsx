import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../layout'
import { Home } from '../pages/Home'
import { SignIn } from '../pages/SignIn'
import { Trade } from '../pages/Trade'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <h1>Herror</h1>,
      },
      {
        path: '/trade',
        element: <Trade />,
      },
    ],
  },
  {
    path: '/signIn',
    element: <SignIn />,
  },
])
