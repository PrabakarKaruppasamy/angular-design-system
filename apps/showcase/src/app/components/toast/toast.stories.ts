import { Component, signal } from '@angular/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { ToastComponent } from './toast';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-toast-demo',
  standalone: true,
  imports: [ToastComponent, ButtonComponent],
  template: `
    <div class="flex gap-3 flex-wrap p-4">
      <app-button label="Success" variant="primary"
        (click)="show('success')"></app-button>
      <app-button label="Warning" variant="secondary"
        (click)="show('warning')"></app-button>
      <app-button label="Danger" variant="danger"
        (click)="show('danger')"></app-button>
      <app-button label="Info" variant="ghost"
        (click)="show('info')"></app-button>
    </div>

    <app-toast
      [show]="isShow()"
      [variant]="currentVariant()"
      [title]="currentTitle()"
      [message]="currentMessage()"
      [duration]="3000"
      position="top-right"
      (dismissed)="isShow.set(false)">
    </app-toast>
  `,
})
class ToastDemoComponent {
  isShow = signal(false);
  currentVariant = signal<'success' | 'warning' | 'danger' | 'info'>('success');
  currentTitle = signal('');
  currentMessage = signal('');

  show(variant: 'success' | 'warning' | 'danger' | 'info'): void {
    const config = {
      success: { title: 'Success',  message: 'Operation completed successfully.' },
      warning: { title: 'Warning',  message: 'Please review before continuing.' },
      danger:  { title: 'Error',    message: 'Something went wrong. Please try again.' },
      info:    { title: 'Info',     message: 'Here is some useful information.' },
    };
    this.currentVariant.set(variant);
    this.currentTitle.set(config[variant].title);
    this.currentMessage.set(config[variant].message);
    this.isShow.set(false);
    setTimeout(() => this.isShow.set(true), 50);
  }
}

const meta: Meta<ToastDemoComponent> = {
  title: 'Components/Toast',
  component: ToastDemoComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ToastDemoComponent>;

export const Interactive: Story = {};

export const Success: Story = {
  render: () => ({
    template: `
      <app-toast
        [show]="true"
        variant="success"
        title="Payment sent"
        message="Your transfer of £5,000 was processed successfully."
        [dismissible]="true"
        position="top-right">
      </app-toast>
    `,
    moduleMetadata: { imports: [ToastComponent] },
  }),
};

export const Warning: Story = {
  render: () => ({
    template: `
      <app-toast
        [show]="true"
        variant="warning"
        title="Session expiring"
        message="Your session will expire in 5 minutes."
        [dismissible]="true"
        position="top-right">
      </app-toast>
    `,
    moduleMetadata: { imports: [ToastComponent] },
  }),
};

export const Danger: Story = {
  render: () => ({
    template: `
      <app-toast
        [show]="true"
        variant="danger"
        title="Transaction failed"
        message="Unable to process payment. Please try again."
        [dismissible]="true"
        position="top-right">
      </app-toast>
    `,
    moduleMetadata: { imports: [ToastComponent] },
  }),
};

export const Info: Story = {
  render: () => ({
    template: `
      <app-toast
        [show]="true"
        variant="info"
        title="New statement available"
        message="Your March 2025 statement is ready to download."
        [dismissible]="true"
        position="top-right">
      </app-toast>
    `,
    moduleMetadata: { imports: [ToastComponent] },
  }),
};