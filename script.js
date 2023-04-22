// vas a programar aqui, puedes usar los metodos de openweatherservice.js
function start(e) {
  if (e.keyCode == 13) {
    load();
  }
}
window.onkeypress = start;

function load() {
  const input = document.getElementById("search-input").value;
  const spinner = document.getElementById("div-loading");
  if (input != "") {
    spinner.style.display = "flex";
    return getWeatherData(input).then((data) => setWeatherData(data));
  } else {
    return;
  }
}

const setWeatherData = (data) => {
  const spinner = document.getElementById("div-loading");
  console.log(data);

  if (data.cod == 404) {
    spinner.style.display = "none";
    document.getElementById("error-message").innerHTML = `${data.message}`;
  } else {
    document.getElementById("error-message").innerHTML = "";

    const ImgIcon = data.weather[0].icon;
    document.getElementById("weatherImg").src = "http://openweathermap.org/img/wn/" + ImgIcon + "@2x.png";

    const weatherData = {
      location: data.name,
      temp: (data.main.temp += "°"),
      humidity: (data.main.humidity += "%"),
      hour: time(data.coord.lat, data.coord.lon),
    };

    Object.keys(weatherData).forEach((key) => {
      document.getElementById(key).textContent = weatherData[key];
    });
  }

  spinner.style.display = "none";
};

const time = (lat, lon) => {
  return getTimeZone(lat, lon);
};
