const path = require('path')
const Components = require('unplugin-vue-components/vite')
const { loadConfigFromFile, mergeConfig } = require('vite')

module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.js')
    )
    return mergeConfig(config, {
      ...userConfig,
      // manually specify plugins to avoid conflict
      plugins: [
        Components({
          dirs: ['./components'],
        }),
      ],
    })
  },
}
