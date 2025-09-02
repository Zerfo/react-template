import * as Sentry from '@sentry/react'

export function throwErrorSentry(
  error: Error,
  tag: string,
  variables?: unknown,
  context?: unknown,
  meta?: unknown,
): void {
  const preparedError = new Error('Network error', {
    cause: error,
  })

  Sentry.withScope(scope => {
    scope.setTag(tag, 'Network Error')

    scope.setExtra('error_name', error.name)
    scope.setExtra('error_message', error.message)
    scope.setExtra('error_stack', error.stack)

    if (variables) {
      scope.setExtra('error_context', context)
    }
    if (context) {
      scope.setExtra('error_variables', variables)
    }
    if (meta) {
      scope.setExtra('error_meta', meta)
    }

    Sentry.captureException(preparedError, {
      contexts: {
        response: {
          body: error.message,
        },
      },
      extra: {
        error: error,
        message: error.message,
        meta: context,
      },
      tags: { type: tag },
    })
  })
}
