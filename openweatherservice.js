const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;
const APP_ID = "ae1ba5d38aeff23990ba7232649a9865";

// Estas funciones son accesibles desde script.js

const spinner = document.getElementById("div-loading");

const getWeatherData = (place) =>
  fetch(`${BASE_URL}?q=${place}&APPID=${APP_ID}&units=metric`)
    .then((response) => response.json())
    .catch((err) => {
      alert(err.messaje);
      spinner.style.display = "none";
      document.getElementById("error-message").innerHTML = `Uncaut error`;
    });
