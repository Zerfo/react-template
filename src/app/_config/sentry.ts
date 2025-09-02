import * as Sentry from '@sentry/react'
import { useEffect } from 'react'
import { createRoutesFromChildren, matchRoutes, useLocation, useNavigationType } from 'react-router'

export const dsn = import.meta.env.VITE_APP_SENTRY_DNS ?? ''

export const integrations = [
  Sentry.browserTracingIntegration({
    linkPreviousTrace: 'in-memory',
    traceFetch: true,
    traceXHR: true,
    trackFetchStreamPerformance: true,
  }),
  Sentry.reactErrorHandler(),
  Sentry.zodErrorsIntegration(),
  Sentry.breadcrumbsIntegration({
    console: true,
    dom: true,
    fetch: true,
    history: true,
    sentry: true,
    xhr: true,
  }),
  Sentry.reactRouterV7BrowserTracingIntegration({
    createRoutesFromChildren,
    matchRoutes,
    useEffect: useEffect,
    useLocation,
    useNavigationType,
  }),
  Sentry.globalHandlersIntegration({
    onerror: false,
    onunhandledrejection: false,
  }),
]
