import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FavoritesProvider } from './context/FavoritesContext';
import { SearchHistoryProvider } from './context/SearchHistoryContext';

ReactDOM.render(
  <FavoritesProvider>
    <SearchHistoryProvider>
      <App />
    </SearchHistoryProvider>
  </FavoritesProvider>,
  document.getElementById('root')
);
