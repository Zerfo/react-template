import { createBrowserRouter, redirect } from 'react-router'

import { ROUTES } from '@/shared/model/router'

import { App } from './app'
import { Providers } from './providers'

export const router = createBrowserRouter([
  {
    children: [
      {
        lazy: () => import('@/features/profile/profile.page'),
        path: ROUTES.PROFILE,
      },
      {
        loader: () => redirect(ROUTES.PROFILE),
        path: ROUTES.HOME,
      },
    ],
    element: (
      <Providers>
        <App />
      </Providers>
    ),
  },
])
