const API_URL = 'https://jsonplaceholder.typicode.com/posts';  // Replace with your JSON server URL
let currentPage = 1;
let limit = 5;  // Number of items per page
let isLoading = false;
let filters = {};
let searchTerm = '';

// Debouncing function
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

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

// Fetch paginated data with optional search and filters
async function fetchData(page = 1) {
  isLoading = true;
  document.getElementById('loading-indicator').style.display = 'block';

  let query = `?_page=${page}&_limit=${limit}`;
  
  // Add search term
  if (searchTerm) {
    query += `&q=${searchTerm}`;
  }
  
  // Add filters
  Object.keys(filters).forEach(filterKey => {
    if (filters[filterKey]) {
      query += `&${filterKey}=${filters[filterKey]}`;
    }
  });

  const response = await fetch(`${API_URL}${query}`);
  const data = await response.json();
  isLoading = false;
  document.getElementById('loading-indicator').style.display = 'none';

  return data;
}

// Render content in the list
function renderContent(data) {
  const contentList = document.getElementById('content-list');
  data.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.textContent = item.title;  // Assuming `title` exists in the data
    contentList.appendChild(div);
  });
}

// Load initial data
async function loadData() {
  const data = await fetchData(currentPage);
  renderContent(data);
}

// Handle scrolling for infinite scroll
const handleScroll = throttle(async () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
    currentPage++;
    const data = await fetchData(currentPage);
    renderContent(data);
  }
}, 500);

// Handle search input with debounce
const handleSearch = debounce((e) => {
  searchTerm = e.target.value;
  document.getElementById('content-list').innerHTML = '';  // Clear existing content
  currentPage = 1;  // Reset to page 1
  loadData();
}, 300);

// Handle filter change
function handleFilterChange() {
  filters = {
    category: document.getElementById('category-filter').value,
    date: document.getElementById('date-filter').value
  };
  document.getElementById('content-list').innerHTML = '';  // Clear existing content
  currentPage = 1;  // Reset to page 1
  loadData();
}

// Add event listeners
document.getElementById('search-box').addEventListener('input', handleSearch);
document.getElementById('category-filter').addEventListener('change', handleFilterChange);
document.getElementById('date-filter').addEventListener('change', handleFilterChange);
window.addEventListener('scroll', handleScroll);

// Initial load
loadData();
