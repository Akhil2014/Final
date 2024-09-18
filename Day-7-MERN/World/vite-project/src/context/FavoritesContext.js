import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (country) => {
    setFavorites((prevFavorites) => [...prevFavorites, country]);
  };

  const removeFavorite = (country) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.cca3 !== country.cca3));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
