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
  console.log(data);
  const spinner = document.getElementById("div-loading");

  if (data.cod == 404) {
    spinner.style.display = "none";
    document.getElementById("error-message").innerHTML = `${data.message}`;
  } else {
    document.getElementById("error-message").innerHTML = "";

    const ImgIcon = data.weather[0].icon;
    console.log(ImgIcon);
    document.getElementById("weatherImg").src = "http://openweathermap.org/img/wn/" + ImgIcon + "@2x.png";

    const weatherData = {
      location: data.name,
      temp: (data.main.temp += "°"),
      humidity: (data.main.humidity += "%"),
      date: getDate(),
      hour: time(data.timezone),
    };

    Object.keys(weatherData).forEach((key) => {
      document.getElementById(key).textContent = weatherData[key];
    });
  }

  spinner.style.display = "none";
};

const getDate = () => {
  let date = new Date();
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const time = (timezone) => {
  let date = new Date();
  let hoursUTC = date.getUTCHours();
  let minutesUTC = date.getUTCMinutes();
  let timezoneToHour = timezone / 3600;
  let selector = hoursUTC + timezoneToHour;
  let realHour = `${hoursUTC} + (${timezoneToHour})`;
  return `${realHour} : ${minutesUTC}`;
};
