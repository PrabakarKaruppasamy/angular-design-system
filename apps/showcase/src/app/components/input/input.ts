import { Component, input, output, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'search';
export type InputSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  type = input<InputType>('text');
  size = input<InputSize>('md');
  label = input<string>('');
  placeholder = input<string>('');
  hint = input<string>('');
  error = input<string>('');
  disabled = input<boolean>(false);
  id = input<string>('input-' + Math.random().toString(36).slice(2, 7));

  value = '';
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(val: string): void { this.value = val || ''; }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }

  handleInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.value = val;
    this.onChange(val);
  }

  get wrapperClasses(): string {
    return 'flex flex-col gap-1 w-full';
  }

  get inputClasses(): string {
    const base = 'w-full rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed bg-white';

    const sizes: Record<InputSize, string> = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-3 py-2 text-sm',
      lg: 'px-4 py-3 text-base',
    };

    const state = this.error()
      ? 'border-red-400 focus:ring-red-400'
      : 'border-gray-300 focus:ring-blue-500';

    return `${base} ${sizes[this.size()]} ${state}`;
  }
}