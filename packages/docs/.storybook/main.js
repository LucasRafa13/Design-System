/** @type { import('@storybook/react-vite').StorybookConfig } */
import { themes } from '@storybook/theming'

const config = {
  stories: [
    '../src/pages/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    theme: themes.dark,
    autodocs: 'tag',
  },
}
export default config
