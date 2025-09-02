import ky from 'ky'

import { enhanceResponseError } from '@/shared/lib/api/enhanceResponseError.ts'

import { queryClient } from './query-client'

export const apiClient = ky.create({
  headers: {},
  hooks: {
    afterResponse: [
      async (_, __, response) => {
        if (response.status === 401) {
          await queryClient.cancelQueries()
        }
      },
    ],
    beforeError: [
      async error => {
        await enhanceResponseError(error)
        return error
      },
    ],
  },
  retry: 0,
  timeout: false,
})
