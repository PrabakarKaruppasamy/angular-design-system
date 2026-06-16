import type { Meta, StoryObj } from '@storybook/angular';
import { TableComponent } from './table';

const columns = [
  { key: 'id',       label: 'ID',          sortable: true,  width: '80px' },
  { key: 'name',     label: 'Client',       sortable: true  },
  { key: 'type',     label: 'Account Type', sortable: true  },
  { key: 'balance',  label: 'Balance',      sortable: true  },
  { key: 'status',   label: 'Status',       sortable: false },
];

const data = [
  { id: 'A001', name: 'James Whitmore',   type: 'Private Banking', balance: '£1,284,500', status: 'Active'   },
  { id: 'A002', name: 'Sarah Chen',       type: 'Wealth Mgmt',     balance: '£892,300',   status: 'Active'   },
  { id: 'A003', name: 'Mohammed Al-Farsi',type: 'Private Banking', balance: '£2,145,000', status: 'Pending'  },
  { id: 'A004', name: 'Elena Vasquez',    type: 'Retail',          balance: '£45,200',    status: 'Active'   },
  { id: 'A005', name: 'David Okafor',     type: 'Wealth Mgmt',     balance: '£673,100',   status: 'Inactive' },
];

const meta: Meta<TableComponent> = {
  title: 'Components/Table',
  component: TableComponent,
  tags: ['autodocs'],
  argTypes: {
    loading:   { control: 'boolean' },
    selectable: { control: 'boolean' },
    striped:   { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<TableComponent>;

export const Default: Story = {
  args: { columns, data, loading: false, selectable: false, striped: false },
};

export const Striped: Story = {
  args: { columns, data, loading: false, selectable: false, striped: true },
};

export const Selectable: Story = {
  args: { columns, data, loading: false, selectable: true, striped: false },
};

export const Loading: Story = {
  args: { columns, data: [], loading: true, selectable: false, striped: false },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    loading: false,
    selectable: false,
    emptyMessage: 'No transactions found for this period',
  },
};