const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    baseUrl: 'http://www.webdriveruniversity.com/',
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    env: {
      first_name: 'Sarah',
      webdriver_uni: 'http://www.webdriveruniversity.com',
    },
  },
})
