export const fetchCountryByCurrency = async (currencyCode) => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/currency/${currencyCode}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching country data:', error);
      return [];
    }
  };
  
  export const fetchCountryCodes = async () => {
    try {
      const response = await fetch('https://api.example.com/country-codes');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching country codes:', error);
      return {};
    }
  };
  