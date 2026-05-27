import { Component, input, output } from '@angular/core';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class ModalComponent {
  open = input<boolean>(false);
  size = input<ModalSize>('md');
  title = input<string>('');
  subtitle = input<string>('');
  showClose = input<boolean>(true);

  closed = output<void>();

  close(): void {
    this.closed.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.close();
    }
  }

  get backdropClasses(): string {
    return 'modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4';
  }

  get panelClasses(): string {
    const sizes: Record<ModalSize, string> = {
      sm: 'w-full max-w-sm',
      md: 'w-full max-w-md',
      lg: 'w-full max-w-lg',
      xl: 'w-full max-w-xl',
    };
    return `relative bg-white rounded-2xl shadow-xl flex flex-col max-h-[90vh] ${sizes[this.size()]}`;
  }
}