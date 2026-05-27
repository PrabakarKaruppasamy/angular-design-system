import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card';
import { BadgeComponent } from '../badge/badge';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated', 'flat'],
    },
    padding: { control: 'boolean' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    footer: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    variant: 'default',
    title: 'Account Summary',
    subtitle: 'Last updated 2 minutes ago',
    footer: 'View full details →',
    padding: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-card
        [variant]="variant"
        [title]="title"
        [subtitle]="subtitle"
        [footer]="footer"
        [padding]="padding">
        <p class="text-sm text-gray-600">
          Your current balance is <strong>£24,350.00</strong>.
          No pending transactions.
        </p>
      </app-card>
    `,
    moduleMetadata: { imports: [CardComponent] },
  }),
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    title: 'Portfolio Value',
    subtitle: 'Private Banking',
    padding: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-card
        [variant]="variant"
        [title]="title"
        [subtitle]="subtitle"
        [padding]="padding">
        <p class="text-2xl font-bold text-gray-900 mt-2">$1,284,500</p>
        <p class="text-sm text-green-600 mt-1">↑ 3.2% this month</p>
      </app-card>
    `,
    moduleMetadata: { imports: [CardComponent] },
  }),
};

export const WithBadge: Story = {
  render: () => ({
    template: `
      <app-card title="Transaction Status" subtitle="Today" [padding]="true">
        <div class="flex items-center justify-between mt-2">
          <span class="text-sm text-gray-600">Wire Transfer — BNP Paribas</span>
          <app-badge variant="success" label="Completed" [dot]="true"></app-badge>
        </div>
        <div class="flex items-center justify-between mt-3">
          <span class="text-sm text-gray-600">ACH Payment — Chase</span>
          <app-badge variant="warning" label="Pending" [dot]="true"></app-badge>
        </div>
      </app-card>
    `,
    moduleMetadata: { imports: [CardComponent, BadgeComponent] },
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; padding:16px;">
        <app-card variant="default"  title="Default"  subtitle="border + shadow-sm" [padding]="true">
          <p class="text-sm text-gray-500">Default card style</p>
        </app-card>
        <app-card variant="outlined" title="Outlined" subtitle="border-2" [padding]="true">
          <p class="text-sm text-gray-500">Outlined card style</p>
        </app-card>
        <app-card variant="elevated" title="Elevated" subtitle="shadow-lg" [padding]="true">
          <p class="text-sm text-gray-500">Elevated card style</p>
        </app-card>
        <app-card variant="flat"     title="Flat"     subtitle="bg-gray-50" [padding]="true">
          <p class="text-sm text-gray-500">Flat card style</p>
        </app-card>
      </div>
    `,
    moduleMetadata: { imports: [CardComponent] },
  }),
};