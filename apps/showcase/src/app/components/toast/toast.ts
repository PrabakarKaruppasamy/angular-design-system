import { Component, input, output, signal, effect, OnDestroy } from '@angular/core';

export type ToastVariant = 'success' | 'warning' | 'danger' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center';

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class ToastComponent implements OnDestroy {
  variant = input<ToastVariant>('info');
  message = input<string>('');
  title = input<string>('');
  show = input<boolean>(false);
  duration = input<number>(3000);
  dismissible = input<boolean>(true);
  position = input<ToastPosition>('top-right');

  dismissed = output<void>();

  visible = signal(false);
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    effect(() => {
      if (this.show()) {
        this.visible.set(true);
        this.clearTimer();
        if (this.duration() > 0) {
          this.timer = setTimeout(() => {
            this.dismiss();
          }, this.duration());
        }
      } else {
        this.visible.set(false);
      }
    });
  }

  dismiss(): void {
    this.visible.set(false);
    this.clearTimer();
    this.dismissed.emit();
  }

  private clearTimer(): void {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  get positionClasses(): string {
    const positions: Record<ToastPosition, string> = {
      'top-right':    'top-4 right-4',
      'top-left':     'top-4 left-4',
      'bottom-right': 'bottom-4 right-4',
      'bottom-left':  'bottom-4 left-4',
      'top-center':   'top-4 left-1/2 -translate-x-1/2',
    };
    return `fixed z-50 ${positions[this.position()]}`;
  }

  get panelClasses(): string {
    const base = 'flex items-start gap-3 w-80 rounded-xl p-4 shadow-lg border transition-all duration-300';
    const variants: Record<ToastVariant, string> = {
      success: 'bg-green-50 border-green-200 text-green-800',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      danger:  'bg-red-50 border-red-200 text-red-800',
      info:    'bg-blue-50 border-blue-200 text-blue-800',
    };
    return `${base} ${variants[this.variant()]}`;
  }

  get iconPath(): string {
    const icons: Record<ToastVariant, string> = {
      success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      danger:  'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
      info:    'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    };
    return icons[this.variant()];
  }

  get iconColorClass(): string {
    const colors: Record<ToastVariant, string> = {
      success: 'text-green-500',
      warning: 'text-yellow-500',
      danger:  'text-red-500',
      info:    'text-blue-500',
    };
    return colors[this.variant()];
  }
}