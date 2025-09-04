import { createSafeFetch } from '@asouei/safe-fetch'

import { enhanceResponseError } from '@/shared/lib/api/enhanceResponseError'
import { ENV } from '@/shared/model/env'

import { queryClient } from './query-client'

export const apiClient = createSafeFetch({
  baseURL: ENV.BASE_URL,
  headers: {},
  interceptors: {
    onError: async error => {
      await enhanceResponseError(error)
    },
    onResponse: async response => {
      if (response.status === 401) {
        await queryClient.cancelQueries()
      }
    },
  },
  retries: { retries: 0 },
  timeoutMs: 5 * 10_000,
  totalTimeoutMs: 25 * 10_000,
})
