import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'info', 'purple'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    dot: { control: 'boolean' },
    pill: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  args: { variant: 'default', label: 'Default', pill: true, dot: false },
};

export const Success: Story = {
  args: { variant: 'success', label: 'Active', pill: true, dot: false },
};

export const Warning: Story = {
  args: { variant: 'warning', label: 'Pending', pill: true, dot: false },
};

export const Danger: Story = {
  args: { variant: 'danger', label: 'Failed', pill: true, dot: false },
};

export const Info: Story = {
  args: { variant: 'info', label: 'In Review', pill: true, dot: false },
};

export const WithDot: Story = {
  args: { variant: 'success', label: 'Online', pill: true, dot: true },
};

export const Squared: Story = {
  args: { variant: 'info', label: 'New', pill: false, dot: false },
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display:flex; gap:8px; flex-wrap:wrap; padding:16px;">
        <app-badge variant="default" label="Default"></app-badge>
        <app-badge variant="success" label="Success"></app-badge>
        <app-badge variant="warning" label="Warning"></app-badge>
        <app-badge variant="danger"  label="Danger"></app-badge>
        <app-badge variant="info"    label="Info"></app-badge>
        <app-badge variant="purple"  label="Purple"></app-badge>
      </div>
    `,
    moduleMetadata: { imports: [BadgeComponent] },
  }),
};