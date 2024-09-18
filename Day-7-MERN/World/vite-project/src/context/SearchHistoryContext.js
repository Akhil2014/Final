import React, { createContext, useState } from 'react';

export const SearchHistoryContext = createContext();

export const SearchHistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addToHistory = (search) => {
    setHistory((prevHistory) => {
      const newHistory = [search, ...prevHistory];
      return [...new Set(newHistory)].slice(0, 5);
    });
  };

  return (
    <SearchHistoryContext.Provider value={{ history, addToHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  );
};
