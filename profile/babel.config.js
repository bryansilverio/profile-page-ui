module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  rules: {
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
  }
}
