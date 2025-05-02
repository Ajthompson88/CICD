import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

export default defineConfig({
  projectId: 'f2k7zz',
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents() {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});
