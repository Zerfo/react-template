import type { ReactNode } from 'react'

import { Layout } from 'antd'

type Props = {
  children: ReactNode
}

export const RootLayout = (props: Props) => {
  const { children } = props

  return <Layout className="min-h-screen flex flex-col">{children}</Layout>
}
