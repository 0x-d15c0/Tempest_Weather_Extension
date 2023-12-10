const API_key = 'cf8822db8bb83dc9490ca89f7b1ce829';

const locationInput = document.getElementById("location");
const getWeatherButton = document.getElementById("getWeather");
const body = document.body;

getWeatherButton.addEventListener("click", () => {
  const userLocation = locationInput.value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&units=metric&lang=en&appid=${API_key}`)
    .then((data) => data.json())
    .then((jsonData) => {
    document.getElementById("text_location").innerHTML = jsonData.name;
    document.getElementById("text_location_country").innerHTML = jsonData.sys.country;
    document.getElementById("text_temp").innerHTML = Math.round(jsonData.main.temp);
    document.getElementById("text_temp_feels_like").innerHTML = Math.round(jsonData.main.feels_like);
    document.getElementById("text_desc").innerHTML = jsonData.weather[0].description;

    const weatherDescription = jsonData.weather[0].description.toLowerCase();
    if (weatherDescription.includes("clear sky")) {
    body.style.backgroundImage = 'url("images/clear_sky.gif")';
    } else if (weatherDescription.includes("rain")) {
    body.style.backgroundImage = 'url("images/rain.gif")';
    } else if (weatherDescription.includes("snow")) {
    body.style.backgroundImage = 'url("images/snow.gif")';
    } else if (weatherDescription.includes("cloud") || weatherDescription.includes("haze")) {
    body.style.backgroundImage = 'url("images/cloudy.gif")';
    } else if (weatherDescription.includes("mist")) {
    body.style.backgroundImage = 'url("images/mist.gif")';
    } else {
    body.style.backgroundImage = 'url("images/bg.jpg")';
    }
  });
});