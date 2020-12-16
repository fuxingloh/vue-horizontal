module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript',
  ],
  ignorePatterns: [
    "cypress/**",
    "docs/**",
    "test/**",
  ],
}
