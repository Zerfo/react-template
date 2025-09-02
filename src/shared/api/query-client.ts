import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'

import { throwErrorSentry } from '@/shared/lib/sentry/throwErrorSentry.ts'

export const queryClient = new QueryClient({
  defaultOptions: {},
  mutationCache: new MutationCache({
    onError: (error, variables, context, { meta }) => {
      throwErrorSentry(error, 'mutation_error', variables, context, meta)
    },
    onMutate: () => {},
    onSettled: () => {},
    onSuccess: () => {},
  }),
  queryCache: new QueryCache({
    onError: error => {
      throwErrorSentry(error, 'query_error')
    },
    onSettled: () => {},
    onSuccess: () => {},
  }),
})
