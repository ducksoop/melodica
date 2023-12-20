import { lazy } from 'react'
import { createHashRouter } from 'react-router-dom'

import Root from '../components/Root/Root'

const Library = lazy(() => import('../pages/library/Library'))
const Settings = lazy(() => import('../pages/settings/Settings'))

export const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Library />,
        path: 'library'
      },
      {
        element: <Settings />,
        path: 'settings'
      },
      { path: '*', element: <></> }
    ]
  }
])
