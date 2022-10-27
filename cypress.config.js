const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'nahgu7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    baseUrl: 'http://www.webdriveruniversity.com/',
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    viewportHeight: 1024,
    viewportWidth: 768,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
    retries: {
      runMode: 0,
      openMode: 1,
    },
    env: {
      first_name: 'Sarah',
      webdriver_uni: 'http://www.webdriveruniversity.com',
    },
  },
})
