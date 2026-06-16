import { Component, input, output, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
}

export interface SortState {
  key: string;
  direction: 'asc' | 'desc';
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class TableComponent {
  columns = input<TableColumn[]>([]);
  data = input<Record<string, any>[]>([]);
  loading = input<boolean>(false);
  selectable = input<boolean>(false);
  striped = input<boolean>(false);
  emptyMessage = input<string>('No data available');

  sortChanged = output<SortState>();
  rowSelected = output<Record<string, any>>();

  sortState = signal<SortState | null>(null);
  selectedRows = signal<Set<number>>(new Set());

  sortedData = computed(() => {
    const sort = this.sortState();
    const rows = [...this.data()];
    if (!sort) return rows;
    return rows.sort((a, b) => {
      const aVal = a[sort.key];
      const bVal = b[sort.key];
      const dir = sort.direction === 'asc' ? 1 : -1;
      if (aVal < bVal) return -1 * dir;
      if (aVal > bVal) return 1 * dir;
      return 0;
    });
  });

  onSort(col: TableColumn): void {
    if (!col.sortable) return;
    const current = this.sortState();
    const newState: SortState = {
      key: col.key,
      direction: current?.key === col.key && current.direction === 'asc' ? 'desc' : 'asc',
    };
    this.sortState.set(newState);
    this.sortChanged.emit(newState);
  }

  onKeydownSort(event: KeyboardEvent, col: TableColumn): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onSort(col);
    }
  }

  toggleRow(index: number, row: Record<string, any>): void {
    const selected = new Set(this.selectedRows());
    if (selected.has(index)) {
      selected.delete(index);
    } else {
      selected.add(index);
    }
    this.selectedRows.set(selected);
    this.rowSelected.emit(row);
  }

  isSelected(index: number): boolean {
    return this.selectedRows().has(index);
  }

  getSortIcon(col: TableColumn): string {
    const sort = this.sortState();
    if (!col.sortable) return '';
    if (sort?.key !== col.key) return '↕';
    return sort.direction === 'asc' ? '↑' : '↓';
  }

  get tableClasses(): string {
    return 'w-full text-sm text-left border-collapse';
  }

  get thClasses(): string {
    return 'px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50 border-b border-gray-200';
  }

  getTrClasses(index: number): string {
    const base = 'border-b border-gray-100 transition-colors';
    const stripe = this.striped() && index % 2 === 1 ? 'bg-gray-50' : 'bg-white';
    const selected = this.isSelected(index) ? 'bg-blue-50' : '';
    const hover = this.selectable() ? 'hover:bg-blue-50 cursor-pointer' : 'hover:bg-gray-50';
    return `${base} ${stripe} ${selected} ${hover}`;
  }

  get tdClasses(): string {
    return 'px-4 py-3 text-gray-700';
  }
}