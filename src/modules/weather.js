// Get the form, input, and results elements
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const results = document.getElementById('weather-results');

// Add an event listener to the form for when it is submitted
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  const city = input.value.trim(); // Get the city name from the input and remove any leading/trailing whitespace
  if (city.length === 0) { // If the city name is empty, display an error message and return
    results.innerHTML = '<p class="text-red-500">Please enter a city name</p>';
    return;
  }
  // Make a request to the OpenWeatherMap API with the city name and units in Celsius
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=66cc99f1e885be2e31cb63fd65cbc469&units=metric`)
    .then(response => {
      if (!response.ok) { // If the response status is not ok, throw an error
        throw new Error('Network response was not ok');
      }
      return response.json(); // Otherwise, parse the response as JSON
    })
    .then(data => {
      console.log(data); // Log the data to the console for debugging purposes
      // Update the results element with the city name, weather icon, weather description, temperature, and feels like temperature
      results.innerHTML = `
        <p class="text-2xl font-bold">${data.name}, ${data.sys.country}</p>
        <i class="${(data.weather[0].main)} text-4xl"></i>
        <p class="text-xl">${data.weather[0].description}</p>
        <p class="text-3xl font-bold">${data.main.temp}°C</p>
        <p>Feels like ${data.main.feels_like}°C</p>
      `;
    })
    .catch(error => { // If there is an error, log it to the console and display an error message
      console.error('There was a problem with the fetch operation:', error);
      results.innerHTML = '<p class="text-red-500">There was an error. Please try again later.</p>';
    });
});
