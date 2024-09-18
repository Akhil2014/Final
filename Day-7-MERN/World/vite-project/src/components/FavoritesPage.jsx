import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import CountryCard from './CountryCard';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorite countries added.</p>
      ) : (
        favorites.map((country) => (
          <div key={country.cca3} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <CountryCard country={country} />
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesPage;
