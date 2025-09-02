import 'react-router/dom'

export const ROUTES = {
  HOME: '/',
  PROFILE: '/profile',
} as const

export type PathParams = object

declare module 'react-router/dom' {
  interface Register {
    params: PathParams
  }
}
