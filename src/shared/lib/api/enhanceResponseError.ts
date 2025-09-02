import type { JsonValue } from 'type-fest'

import { HTTPError } from 'ky'
import inspect from 'object-inspect'
import { isDeepEqual, isPlainObject } from 'remeda'
import { z } from 'zod'

import { isFilledString } from '@/shared/lib/data-types/string/isFilledString'
import { HTTP_STATUS_TEXT } from '@/shared/model/http-status-text'

const errorResponseDataSchema = z.object({
  message: z.string(),
})

export const enhanceResponseError = async (error: HTTPError) => {
  const rawData = await error.response.text()
  const data = (JSON.parse(rawData) as JsonValue) ?? rawData

  try {
    const { message } = errorResponseDataSchema.parse(data)
    error.message = message
  } catch {
    if (isFilledString(data)) {
      error.message = data.trim()
      return
    }

    if (!isPlainObject(data) || isDeepEqual(data, {})) {
      error.message =
        HTTP_STATUS_TEXT[error.response.status] ??
        `${error.response.status} ${error.response.statusText}`

      return
    }

    error.message = inspect(data, { indent: 2 })
  }
}
