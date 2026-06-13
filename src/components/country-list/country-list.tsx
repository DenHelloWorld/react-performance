import { useRef, useMemo, memo } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import type { Country } from '../../types';
import { CountryCard } from '../country-card/country-card';
import { getPopulationForYear, createYearDataMap } from '../../utils/data-transformers';

import styles from './country-list.module.css';

type CountryListProps = {
  countries: Country[];
  searchQuery: string;
  selectedColumns: string[];
  selectedRegion: string;
  selectedYear: number;
  sortField: 'name' | 'population';
  sortOrder: 'asc' | 'desc';
  onYearChange: (year: number) => void;
};

export const CountryList = memo(({
  countries,
  searchQuery,
  selectedColumns,
  selectedRegion,
  selectedYear,
  sortField,
  sortOrder,
}: CountryListProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredCountries = useMemo(
    () =>
      countries
        .filter((c) => {
          const matchesSearch = c.id.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesRegion = !selectedRegion || c.data.some((d) => d.region === selectedRegion);
          return matchesSearch && matchesRegion;
        })
        .sort((a, b) => {
          if (sortField === 'name') {
            return sortOrder === 'asc' ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id);
          }
          const popA = getPopulationForYear(createYearDataMap(a.data), selectedYear) || 0;
          const popB = getPopulationForYear(createYearDataMap(b.data), selectedYear) || 0;
          return sortOrder === 'asc' ? popA - popB : popB - popA;
        }),
    [countries, searchQuery, selectedRegion, sortField, sortOrder, selectedYear],
  );

  const virtualizer = useVirtualizer({
    count: filteredCountries.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => 220,
    overscan: 5,
  });

  return (
    <div ref={scrollRef} className={styles.countryList}>
      <div className={styles.listInner} style={{ height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map((virtualItem) => {
          const country = filteredCountries[virtualItem.index];
          return (
            <div
              key={country.id}
              data-index={virtualItem.index}
              ref={virtualizer.measureElement}
              className={styles.listItem}
              style={{ transform: `translateY(${virtualItem.start}px)` }}
            >
              <CountryCard
                country={country}
                selectedYear={selectedYear}
                selectedColumns={selectedColumns}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
});
CountryList.displayName = 'CountryList';
