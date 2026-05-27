import { Component, signal } from '@angular/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { ModalComponent } from './modal';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-modal-demo',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  template: `
    <app-button label="Open Modal" variant="primary" (click)="isOpen.set(true)"></app-button>
    <app-modal
      [open]="isOpen()"
      title="Confirm Transaction"
      subtitle="Please review before proceeding"
      size="md"
      (closed)="isOpen.set(false)">
      <p class="text-sm text-gray-600">
        This is the modal body. Place any content here —
        forms, tables, confirmations, or rich content.
      </p>
      <div slot="footer" class="flex justify-end gap-3">
        <app-button label="Cancel" variant="secondary" (click)="isOpen.set(false)"></app-button>
        <app-button label="Confirm" variant="primary" (click)="isOpen.set(false)"></app-button>
      </div>
    </app-modal>
  `,
})
class ModalDemoComponent {
  isOpen = signal(false);
}

@Component({
  selector: 'app-modal-danger-demo',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  template: `
    <app-button label="Delete Account" variant="danger" (click)="isOpen.set(true)"></app-button>
    <app-modal
      [open]="isOpen()"
      title="Delete Account"
      subtitle="This action cannot be undone"
      size="sm"
      (closed)="isOpen.set(false)">
      <p class="text-sm text-gray-600">
        Are you sure you want to permanently delete this account?
        All data will be lost.
      </p>
      <div slot="footer" class="flex justify-end gap-3">
        <app-button label="Cancel" variant="secondary" (click)="isOpen.set(false)"></app-button>
        <app-button label="Delete" variant="danger" (click)="isOpen.set(false)"></app-button>
      </div>
    </app-modal>
  `,
})
class ModalDangerDemoComponent {
  isOpen = signal(false);
}

const meta: Meta<ModalDemoComponent> = {
  title: 'Components/Modal',
  component: ModalDemoComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ModalDemoComponent>;

export const Default: Story = {};

export const DangerConfirmation: Story = {
  render: () => ({
    template: `<app-modal-danger-demo></app-modal-danger-demo>`,
    moduleMetadata: { imports: [ModalDangerDemoComponent] },
  }),
};

export const OpenByDefault: Story = {
  render: () => ({
    template: `
      <app-modal
        [open]="true"
        title="Wire Transfer Confirmation"
        subtitle="BNP Paribas — Private Banking"
        size="md">
        <div class="space-y-3">
          <div class="flex justify-between text-sm">
            <span class="text-gray-500">Amount</span>
            <span class="font-semibold text-gray-900">£50,000.00</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-500">Recipient</span>
            <span class="font-semibold text-gray-900">Acme Corp Ltd</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-500">Reference</span>
            <span class="font-semibold text-gray-900">INV-2025-0042</span>
          </div>
        </div>
        <div slot="footer" class="flex justify-end gap-3">
          <app-button label="Cancel" variant="secondary"></app-button>
          <app-button label="Confirm Transfer" variant="primary"></app-button>
        </div>
      </app-modal>
    `,
    moduleMetadata: { imports: [ModalComponent, ButtonComponent] },
  }),
};