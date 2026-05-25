import { defineConfig } from 'vitest/config'

export default defineConfig({
  server: {
    deps: {
      inline: ['react-icons']
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.js'],
    transformMode: {
      web: [/\.[jt]sx?$/]
    }
  }
})
