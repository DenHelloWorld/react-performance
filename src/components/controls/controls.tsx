import { memo } from 'react';
import { SearchBar } from '../search-bar/search-bar';
import { YearSelector } from '../year-selector/year-selector';
import { ColumnModal } from '../column-modal/column-modal';

import styles from '../app/app.module.css';

export type ControlsProps = {
  searchQuery: string;
  selectedYear: number;
  years: number[];
  sortField: 'name' | 'population';
  sortOrder: 'asc' | 'desc';
  selectedColumns: string[];
  availableColumns: string[];
  isColumnModalOpen: boolean;
  onSearch: (value: string) => void;
  onYearChange: (year: number) => void;
  onSortFieldChange: (field: 'name' | 'population') => void;
  onSortOrderToggle: () => void;
  onColumnToggle: (column: string) => void;
  onModalToggle: () => void;
};

export const Controls = memo(({
  searchQuery,
  selectedYear,
  years,
  sortField,
  sortOrder,
  selectedColumns,
  availableColumns,
  isColumnModalOpen,
  onSearch,
  onYearChange,
  onSortFieldChange,
  onSortOrderToggle,
  onColumnToggle,
  onModalToggle,
}: ControlsProps) => (
  <>
    <div className={styles.controls}>
      <SearchBar value={searchQuery} onChange={onSearch} />
      <YearSelector year={selectedYear} years={years} onChange={onYearChange} />

      <div className={styles.sortContainer}>
        <label className={styles.sortLabel}>Sort by:</label>
        <select
          value={sortField}
          onChange={(e) => onSortFieldChange(e.target.value as 'name' | 'population')}
          className={styles.sortSelect}
        >
          <option value="population">Population</option>
          <option value="name">Name</option>
        </select>

        <button onClick={onSortOrderToggle} className={styles.sortButton}>
          {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
        </button>
      </div>

      <div className={styles.columnButtonContainer}>
        <button onClick={onModalToggle} className={styles.columnButton}>
          Select columns ({selectedColumns.length} selected)
        </button>
      </div>
    </div>

    <ColumnModal
      isOpen={isColumnModalOpen}
      availableColumns={availableColumns}
      selectedColumns={selectedColumns}
      onToggle={onColumnToggle}
      onClose={onModalToggle}
    />
  </>
));
Controls.displayName = 'Controls';
