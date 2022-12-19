
function getCityWeatherData(city){
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&unit=imperial&appid=ede6026a5b7a31d5851c8b13ce7da146`)
  .then(response => response.json())
  .then((data) => renderWeather(data));
}

getCityWeatherData('Nairobi');

//render data
function renderWeather(weather) {
  console.log(weather);
  const { name , sys } = weather;
  const { temp, humidity } = weather.main;
  const { speed } = weather.wind;
  const { description } = weather.weather[0];

  document.querySelector(".city").innerText = "Weather in " + name;
  document.querySelector(".description").innerText = description;
  document.querySelector(".temparature").innerText = temp + "°f";
  document.querySelector(".humidity").innerText =
    "Humidity: " + humidity + "%";
  document.querySelector(".wind-speed").innerText =
    "Wind speed: " + speed + " km/h";
    document.getElementById("time-zone").innerText = name;
    document.getElementById("country").innerText = sys.country;

}

// Add event listener to search button
const searchBtn = document.getElementById('search');
searchBtn.addEventListener('click', (e) => {
  // Prevent default action
  e.preventDefault();

  // Get city value
  const city = document.querySelector('.searchbar').value.trim();
  

  // Update the UI with new city
  getCityWeatherData(city)
  
});

const submitbtn = document.getElementById("submit");
submitbtn.addEventListener('click', (e) => {
  e.preventDefault();

  const authenticatorSection = document.getElementById("authenticator");
  authenticatorSection.classList.add('hidden')

  const weathersection = document.getElementById("weather-information")
  weathersection.classList.remove('hidden')
});








