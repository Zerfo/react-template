import { Outlet } from 'react-router'

import { Devtools } from './devtools'
import { RootLayout } from './root-layout'

export const App = () => {
  return (
    <RootLayout>
      <Outlet />
      <Devtools />
    </RootLayout>
  )
}
