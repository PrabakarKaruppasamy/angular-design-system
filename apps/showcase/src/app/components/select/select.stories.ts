import type { Meta, StoryObj } from '@storybook/angular';
import { SelectComponent } from './select';

const accountTypes = [
  { value: 'retail',   label: 'Retail Banking'   },
  { value: 'private',  label: 'Private Banking'  },
  { value: 'wealth',   label: 'Wealth Management'},
  { value: 'corporate',label: 'Corporate Banking'},
];

const groupedOptions = [
  { value: 'gbp', label: 'British Pound (GBP)', group: 'Major' },
  { value: 'usd', label: 'US Dollar (USD)',      group: 'Major' },
  { value: 'eur', label: 'Euro (EUR)',            group: 'Major' },
  { value: 'jpy', label: 'Japanese Yen (JPY)',   group: 'Major' },
  { value: 'inr', label: 'Indian Rupee (INR)',   group: 'Emerging' },
  { value: 'brl', label: 'Brazilian Real (BRL)', group: 'Emerging' },
  { value: 'zar', label: 'South African Rand',   group: 'Emerging' },
];

const meta: Meta<SelectComponent> = {
  title: 'Components/Select',
  component: SelectComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled:   { control: 'boolean' },
    searchable: { control: 'boolean' },
    label:       { control: 'text' },
    placeholder: { control: 'text' },
    error:       { control: 'text' },
    hint:        { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<SelectComponent>;

export const Default: Story = {
  args: {
    label: 'Account Type',
    placeholder: 'Select account type',
    options: accountTypes,
    size: 'md',
  },
};

export const Searchable: Story = {
  args: {
    label: 'Currency',
    placeholder: 'Select currency',
    options: groupedOptions,
    searchable: true,
    size: 'md',
    hint: 'Search by currency name or code',
  },
};

export const WithError: Story = {
  args: {
    label: 'Account Type',
    placeholder: 'Select account type',
    options: accountTypes,
    error: 'Please select an account type to continue',
    size: 'md',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Account Type',
    placeholder: 'Select account type',
    options: accountTypes,
    disabled: true,
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    label: 'Size',
    options: accountTypes,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Account Type',
    options: accountTypes,
    size: 'lg',
  },
};