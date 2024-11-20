/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    // Configuración de Vitest
    coverage: {
      provider: 'v8',
      reporter: ['lcov', 'text-summary'],
      reportsDirectory: 'coverage',
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/test/setup.ts',
    exclude: [...configDefaults.exclude, 'e2e/*'],
  },
})
