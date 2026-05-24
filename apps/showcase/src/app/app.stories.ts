import type { Meta, StoryObj } from '@storybook/angular';
import { App } from './app';

const meta: Meta<App> = {
  component: App,
  title: 'App',
};
export default meta;

type Story = StoryObj<App>;

export const Primary: Story = {
  args: {},
};
