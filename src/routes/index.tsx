import { createBrowserRouter } from 'react-router-dom'


import { Layout } from '../layout'
import { Home } from '../pages/Home'
import { SignIn } from '../pages/SignIn'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/sigIn',
    element: <SignIn />,
  },
])
