let plugins = []

if (process.env.E2E) {
  plugins.push([
    'istanbul', {
      extension: [
        'js',
        'vue'
      ]
    }
  ])
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
}
