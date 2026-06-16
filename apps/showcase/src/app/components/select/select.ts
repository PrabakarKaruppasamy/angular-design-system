import { Component, input, output, signal, computed, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
}

export type SelectSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-select',
  standalone: true,
  templateUrl: './select.html',
  styleUrl: './select.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  options = input<SelectOption[]>([]);
  label = input<string>('');
  placeholder = input<string>('Select an option');
  size = input<SelectSize>('md');
  disabled = input<boolean>(false);
  searchable = input<boolean>(false);
  error = input<string>('');
  hint = input<string>('');
  id = input<string>('select-' + Math.random().toString(36).slice(2, 7));

  valueChanged = output<string>();

  isOpen = signal(false);
  searchQuery = signal('');
  selectedValue = signal<string>('');

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(val: string): void { this.selectedValue.set(val || ''); }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('app-select')) {
      this.isOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.isOpen.set(false);
  }

  filteredOptions = computed(() => {
    const query = this.searchQuery().toLowerCase();
    if (!query) return this.options();
    return this.options().filter(o =>
      o.label.toLowerCase().includes(query)
    );
  });

  groupedOptions = computed(() => {
    const opts = this.filteredOptions();
    const groups = new Map<string, SelectOption[]>();
    opts.forEach(opt => {
      const group = opt.group || '';
      if (!groups.has(group)) groups.set(group, []);
      groups.get(group)!.push(opt);
    });
    return groups;
  });

  selectedLabel = computed(() => {
    const found = this.options().find(o => o.value === this.selectedValue());
    return found ? found.label : '';
  });

  toggle(): void {
    if (this.disabled()) return;
    this.isOpen.update(v => !v);
    this.onTouched();
    if (!this.isOpen()) this.searchQuery.set('');
  }

  select(option: SelectOption): void {
    if (option.disabled) return;
    this.selectedValue.set(option.value);
    this.onChange(option.value);
    this.valueChanged.emit(option.value);
    this.isOpen.set(false);
    this.searchQuery.set('');
  }

  onSearchInput(event: Event): void {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  isSelected(option: SelectOption): boolean {
    return this.selectedValue() === option.value;
  }

  get triggerClasses(): string {
    const base = 'w-full flex items-center justify-between rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 bg-white';
    const sizes: Record<SelectSize, string> = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-3 py-2 text-sm',
      lg: 'px-4 py-3 text-base',
    };
    const state = this.error()
      ? 'border-red-400 focus:ring-red-400'
      : 'border-gray-300 focus:ring-blue-500';
    const dis = this.disabled() ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    return `${base} ${sizes[this.size()]} ${state} ${dis}`;
  }

  get dropdownClasses(): string {
    return 'absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden';
  }
}