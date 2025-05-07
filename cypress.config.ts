import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

export default defineConfig({
  projectId: 'f2k7zz',

  component: {
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    devServer: { framework: 'react', bundler: 'vite', viteConfig },
    port: 4173,                    // ← changed from 5173
  },

  e2e: {
    baseUrl: 'http://localhost:3001',  // ← changed from 5173
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
      setupNodeEvents(on, config) {
         return config;            
    
    },
  },
});
