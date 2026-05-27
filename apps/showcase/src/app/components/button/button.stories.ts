import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: { variant: 'primary', size: 'md', label: 'Primary Button', disabled: false },
};

export const Secondary: Story = {
  args: { variant: 'secondary', size: 'md', label: 'Secondary Button', disabled: false },
};

export const Danger: Story = {
  args: { variant: 'danger', size: 'md', label: 'Delete', disabled: false },
};

export const Ghost: Story = {
  args: { variant: 'ghost', size: 'md', label: 'Cancel', disabled: false },
};

export const Small: Story = {
  args: { variant: 'primary', size: 'sm', label: 'Small Button', disabled: false },
};

export const Large: Story = {
  args: { variant: 'primary', size: 'lg', label: 'Large Button', disabled: false },
};

export const Disabled: Story = {
  args: { variant: 'primary', size: 'md', label: 'Disabled', disabled: true },
};