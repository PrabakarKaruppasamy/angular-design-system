import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import type { StorybookConfig } from '@storybook/angular';
import webpack from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/app/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [],
  framework: {
    name: getAbsolutePath('@storybook/angular'),
    options: {},
  },
  webpackFinal: async (config) => {
    // Remove conflicting DefinePlugin instances
    config.plugins = config.plugins?.filter(
      (plugin) => !(plugin instanceof webpack.DefinePlugin)
    );

    // Re-add with correct values
    config.plugins?.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
        'STORYBOOK_ANGULAR_OPTIONS': JSON.stringify({}),
      })
    );

    return config;
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}