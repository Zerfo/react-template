import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'

import { ANT_CONFIG } from '@/shared/model/ant-config'

ConfigProvider.config({
  holderRender: children => (
    <StyleProvider layer>
      <ConfigProvider {...ANT_CONFIG}>{children}</ConfigProvider>
    </StyleProvider>
  ),
})
