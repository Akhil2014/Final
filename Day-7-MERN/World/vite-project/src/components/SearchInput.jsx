import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';
import { fetchCountryByCurrency } from '../utils/api';
import { useSearchHistory } from '../context/SearchHistoryContext';

const SearchInput = React.forwardRef(({ onSearch }, ref) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);
  const { addToHistory } = useSearchHistory();

  useEffect(() => {
    if (debouncedQuery) {
      addToHistory(debouncedQuery);
      fetchCountryByCurrency(debouncedQuery).then((data) => {
        onSearch(data);
      });
    }
  }, [debouncedQuery, addToHistory, onSearch]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      ref={ref}
      placeholder="Search by currency code"
    />
  );
});

export default SearchInput;
