import { Config } from 'cypress';

const config: Config = {
  baseUrl: 'http://localhost:3000', // Adjust the base URL according to your application's local development server
  viewportWidth: 1200, // Set the default viewport width
  viewportHeight: 800, // Set the default viewport height
  chromeWebSecurity: false, // Disable same-origin policy in Chrome for easier testing
  testFiles: '**/*.spec.ts', // Define the pattern to match your test files
};

export default config;
