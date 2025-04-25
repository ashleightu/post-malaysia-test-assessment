import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {

    // Directory where your tests are located
    specPattern: 'cypress/e2e/**/*.spec.{js,ts}',

    // Support file to be executed before each test file
    supportFile: 'cypress/support/index.ts',

    // Fixtures folder (optional, you can add more folders as needed)
    fixturesFolder: 'cypress/fixtures',

    // Other configuration options
    viewportWidth: 1280,  // Set viewport width for tests
    viewportHeight: 720,  // Set viewport height for tests

    video: true,  // Record video of tests (set to false to disable)
    screenshotOnRunFailure: true,  // Capture screenshots on failure
  },
})
