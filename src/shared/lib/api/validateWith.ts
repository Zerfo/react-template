import { z } from 'zod'

export const validateWith =
  <T>(schema: z.ZodSchema<T>) =>
  (raw: unknown) => {
    const r = schema.safeParse(raw)
    return r.success
      ? { data: r.data, success: true as const }
      : { error: r.error, success: false as const }
  }
