//fetch weather
let url = "https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=ede6026a5b7a31d5851c8b13ce7da146" 
function weatherData(citty){ 

    fetch(url)
    .then(response => response.json())
    .then((data) => console.log(data));
}

weatherData();

//render data
function renderWeather(weather) {
    const { name } = data.main;
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";

}

renderWeather();

