const { defineConfig } = require("cypress");
const cypressGrepPlugin = require('@cypress/grep/src/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    setupNodeEvents(on, config) {
      cypressGrepPlugin(config, {
        tags: true,            // enables the { tags: [...] }
        grepFilterSpecs: true, // skip files with no matching tags
      });
      return config;
      // implement node event listeners here
    },
  },
  downloadsFolder: 'cypress/downloads',
});
