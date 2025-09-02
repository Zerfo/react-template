import type { ReactNode } from 'react'

import { StyleProvider } from '@ant-design/cssinjs'
import { QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider as AntConfigProvider } from 'antd'

import { queryClient } from '@/shared/api/query-client'
import { ANT_CONFIG } from '@/shared/model/ant-config'

type Props = {
  children: ReactNode
}

export const Providers = (props: Props) => {
  const { children } = props

  return (
    <StyleProvider layer>
      <AntConfigProvider {...ANT_CONFIG}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </AntConfigProvider>
    </StyleProvider>
  )
}
