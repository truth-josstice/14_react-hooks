import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // This means you don't need to import describe, test in test code
    environment: "jsdom", // tells the runner system that the code should simulate a browser
    setupFiles: "src/setupTests.js" // perform any needed setup that wont fit in beforeEach() or beforeAll() etc
  }
})
