const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const results = document.getElementById('weather-results');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = input.value.trim();
  if (city.length === 0) {
    results.innerHTML = '<p class="text-red-500">Please enter a city name</p>';
    return;
  }
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=66cc99f1e885be2e31cb63fd65cbc469&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      results.innerHTML = `
        <p class="text-2xl font-bold">${data.name}, ${data.sys.country}</p>
        <p class="text-xl">${data.weather[0].description}</p>
        <p class="text-3xl font-bold">${data.main.temp}°C</p>
        <p>Feels like ${data.main.feels_like}°C</p>
      `;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      results.innerHTML = '<p class="text-red-500">There was an error. Please try again later.</p>';
    });
});