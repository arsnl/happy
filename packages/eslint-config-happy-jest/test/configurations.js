const eslintTestConfigurations = require("../../../dev/eslint-test-configurations");

eslintTestConfigurations(__dirname, [
  // Rules
  "../rules/jest.js",
  // Configurations
  "../index.js",
]);
