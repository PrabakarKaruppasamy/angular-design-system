import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    label: 'Email address',
    placeholder: 'Enter your email',
    type: 'email',
    size: 'md',
  },
};

export const WithHint: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    hint: 'Must be at least 4 characters',
    size: 'md',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    error: 'Password must be at least 8 characters',
    size: 'md',
  },
};

export const Small: Story = {
  args: { label: 'Small input', placeholder: 'Small...', size: 'sm' },
};

export const Large: Story = {
  args: { label: 'Large input', placeholder: 'Large...', size: 'lg' },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    placeholder: 'Cannot edit',
    disabled: true,
    size: 'md',
  },
};