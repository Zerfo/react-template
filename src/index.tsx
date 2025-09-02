import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'

import '@/app/_config'
import { router } from '@/app/router'

const root = document.getElementById('root')!
const rootElement = createRoot(root)

rootElement.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
