import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../layout'
import { Home } from '../pages/Home'
import { SignIn } from '../pages/SignIn'
import { Trade } from '../pages/Trade'
import { CreateAccount } from '../pages/CreateAccount'

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
  {
    path: '/create',
    element: <CreateAccount />,
  },
])
