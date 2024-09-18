import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Currency: {country.currencies[Object.keys(country.currencies)[0]].name}</p>
      <img src={`https://flagsapi.com/${country.cca2}/shiny/64.png`} alt={country.name.common} />
    </div>
  );
};

export default CountryCard;
