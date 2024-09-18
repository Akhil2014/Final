import React, { useRef, useState } from 'react';
import SearchInput from './SearchInput';
import { useSearchHistory } from '../context/SearchHistoryContext';
import { useFavorites } from '../context/FavoritesContext';
import CountryCard from './CountryCard';

const Homepage = () => {
  const searchInputRef = useRef(null);
  const [countries, setCountries] = useState([]);
  const { history } = useSearchHistory();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  React.useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const handleSearch = (data) => {
    setCountries(data);
  };

  const toggleFavorite = (country) => {
    if (favorites.find((fav) => fav.cca3 === country.cca3)) {
      removeFavorite(country);
    } else {
      addFavorite(country);
    }
  };

  return (
    <div>
      <h1>Welcome to the Country Finder</h1>
      <SearchInput ref={searchInputRef} onSearch={handleSearch} />
      <h2>Search History</h2>
      {history.length === 0 ? (
        <p>No search history yet.</p>
      ) : (
        history.map((search, index) => <div key={index}>{search}</div>)
      )}
      <div>
        {countries.map((country) => (
          <div key={country.cca3} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <CountryCard country={country} />
            <button onClick={() => toggleFavorite(country)}>
              {favorites.find((fav) => fav.cca3 === country.cca3) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
