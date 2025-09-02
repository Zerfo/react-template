import type { ConfigProviderProps } from 'antd'

import antRuLocale from 'antd/locale/ru_RU'

import { cssVar } from '@/shared/lib/cssVar'

export const ANT_CONFIG: ConfigProviderProps = {
  getPopupContainer: () => document.getElementById('root')!,
  locale: antRuLocale,
  popupMatchSelectWidth: false,
  select: {
    showSearch: true,
  },
  spin: {
    style: {
      alignItems: 'center',
      display: 'flex',
      height: '20vh',
      justifyContent: 'center',
    },
  },
  textArea: {
    allowClear: true,
  },
  theme: {
    components: {
      Breadcrumb: {
        itemColor: cssVar('--color-gray-600'),
        linkColor: cssVar('--color-gray-600'),
        separatorColor: cssVar('--color-gray-600'),
      },
      Modal: {
        titleFontSize: 24,
        titleLineHeight: 1.3,
      },
      Notification: {
        zIndexPopup: 1060,
      },
    },
    cssVar: true,
    hashed: false,
    token: {
      colorBgContainerDisabled: cssVar('--color-gray-50'),
      colorLink: cssVar('--color-brand-500'),
      colorPrimary: cssVar('--color-brand-500'),
      colorText: cssVar('--color-black'),
      colorTextDisabled: cssVar('--color-gray-600'),
    },
  },
}
