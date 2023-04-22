// Estas funciones son accesibles desde script.js
const spinner = document.getElementById("div-loading");

const getWeatherData = (place) =>
  fetch(`${BASE_URL_OPENWEATHERMAP}?q=${place}&APPID=${APP_ID_OPENWEATHERMAP}&units=metric`)
    .then((response) => response.json())
    .catch((err) => {
      alert(err.messaje);
      spinner.style.display = "none";
      document.getElementById("error-message").innerHTML = `Uncaut error`;
    });
