// Your OMDB API Key
const API_KEY = 'your_omdb_api_key';

// Throttle function to limit API calls
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function(...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Fetch movie data from OMDB API
async function fetchMovies(query) {
  const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
  const data = await response.json();
  if (data.Response === "True") {
    displayMovies(data.Search);
  } else {
    displayMovies([]); // Show no results
  }
}

// Display the movie titles in the UI
function displayMovies(movies) {
  const movieList = document.getElementById('movie-list');
  movieList.innerHTML = ''; // Clear previous results

  if (movies.length === 0) {
    movieList.innerHTML = '<div>No results found</div>';
    return;
  }

  movies.forEach(movie => {
    const movieItem = document.createElement('div');
    movieItem.textContent = movie.Title;
    movieItem.addEventListener('click', () => fetchMovieDetails(movie.imdbID));
    movieList.appendChild(movieItem);
  });
}

// Fetch and display movie details when a title is clicked
async function fetchMovieDetails(movieId) {
  const response = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`);
  const movie = await response.json();
  displayMovieDetails(movie);
}

// Display movie details in the UI
function displayMovieDetails(movie) {
  const movieDetails = document.getElementById('movie-details');
  movieDetails.innerHTML = `
    <h3>${movie.Title}</h3>
    <p><strong>Year:</strong> ${movie.Year}</p>
    <p><strong>Plot:</strong> ${movie.Plot}</p>
    <img src="${movie.Poster}" alt="Poster" />
  `;
}

// Throttled search function
const throttledSearch = throttle((e) => {
  const query = e.target.value.trim();
  if (query) {
    fetchMovies(query);
  } else {
    document.getElementById('movie-list').innerHTML = ''; // Clear results if input is empty
  }
}, 1000);  // Limit API requests to 1 per second (1000ms)

// Event listener for the search input
document.getElementById('search-box').addEventListener('input', throttledSearch);
