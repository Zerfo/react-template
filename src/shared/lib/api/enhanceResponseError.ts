import type { NormalizedError } from '@asouei/safe-fetch'

import inspect from 'object-inspect'
import { isDeepEqual, isPlainObject } from 'remeda'

import { isFilledString } from '@/shared/lib/data-types/string/isFilledString'
import { HTTP_STATUS_TEXT } from '@/shared/model/http-status-text'

export const enhanceResponseError = async (error: NormalizedError) => {
  const { message, name } = error

  try {
    error.message = message
  } catch {
    if (isFilledString(message)) {
      error.message = message.trim()
      return
    }

    if ((!isPlainObject(message) || isDeepEqual(message, {})) && name === 'HttpError') {
      error.message = HTTP_STATUS_TEXT[error.status] ?? `${error.status} ${error.statusText}`

      return
    }

    error.message = inspect(message, { indent: 2 })
  }
}
