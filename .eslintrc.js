module.exports = {
  extends: [
    "./packages/eslint-config-peppy/index.js",
    "./packages/eslint-config-peppy-ava/index.js",
  ],
  rules: {
    "import/no-extraneous-dependencies": "off",
  },
};
