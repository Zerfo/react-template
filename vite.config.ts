import tailwindcss from '@tailwindcss/vite'
import { devtools } from '@tanstack/devtools-vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  const env = loadEnv(
    mode,
    process.cwd(),
    '', // load all env regardless of the `VITE_` prefix
  )

  return defineConfig({
    plugins: [react(), tsconfigPaths(), tailwindcss(), svgr(), devtools()],
    preview: {
      port: Number(env.PREVIEW_PORT ?? 4173),
    },
    server: {
      port: Number(env.PORT ?? 5173),
    },
  })
})
