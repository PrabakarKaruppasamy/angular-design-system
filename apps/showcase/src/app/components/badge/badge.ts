import { Component, input } from '@angular/core';
// import { CommonModule } from '@angular/common';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info' | 'purple';
export type BadgeSize = 'sm' | 'md';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.html',
  styleUrl: './badge.css',
})
export class BadgeComponent {
  variant = input<BadgeVariant>('default');
  size = input<BadgeSize>('md');
  label = input<string>('Badge');
  dot = input<boolean>(false);
  pill = input<boolean>(true);

  get classes(): string {
    const base = 'inline-flex items-center gap-1.5 font-medium';

    const variants: Record<BadgeVariant, string> = {
      default:  'bg-gray-100 text-gray-700',
      success:  'bg-green-100 text-green-700',
      warning:  'bg-yellow-100 text-yellow-700',
      danger:   'bg-red-100 text-red-700',
      info:     'bg-blue-100 text-blue-700',
      purple:   'bg-purple-100 text-purple-700',
    };

    const sizes: Record<BadgeSize, string> = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-xs',
    };

    const radius = this.pill() ? 'rounded-full' : 'rounded-md';

    return `${base} ${variants[this.variant()]} ${sizes[this.size()]} ${radius}`;
  }

  get dotClasses(): string {
    const colors: Record<BadgeVariant, string> = {
      default: 'bg-gray-500',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      danger:  'bg-red-500',
      info:    'bg-blue-500',
      purple:  'bg-purple-500',
    };
    return `w-1.5 h-1.5 rounded-full ${colors[this.variant()]}`;
  }
}