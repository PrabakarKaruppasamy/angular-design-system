import { Component, input } from '@angular/core';

export type CardVariant = 'default' | 'outlined' | 'elevated' | 'flat';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class CardComponent {
  variant = input<CardVariant>('default');
  title = input<string>('');
  subtitle = input<string>('');
  footer = input<string>('');
  padding = input<boolean>(true);

  get classes(): string {
    const base = 'rounded-xl w-full bg-white';

    const variants: Record<CardVariant, string> = {
      default:  'border border-gray-200 shadow-sm',
      outlined: 'border-2 border-gray-300',
      elevated: 'shadow-lg border border-gray-100',
      flat:     'bg-gray-50',
    };

    const p = this.padding() ? 'p-6' : '';

    return `${base} ${variants[this.variant()]} ${p}`;
  }

  get headerClasses(): string {
    return 'mb-4';
  }

  get titleClasses(): string {
    return 'text-base font-semibold text-gray-900';
  }

  get subtitleClasses(): string {
    return 'text-sm text-gray-500 mt-0.5';
  }

  get footerClasses(): string {
    return 'mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500';
  }
}