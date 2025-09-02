export const isFilledString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim() !== ''
