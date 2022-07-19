// vas a programar aqui, puedes usar los metodos de openweatherservice.js
getWeatherData(place).then((data) => setWeatherData(data));

const setWeatherData = data => {
    console.log(data)
    const weatherData = {
        location: data.name,
        temp: data.main.temp += "°",
        humidity: data.main.humidity += "%",
        date: getDate(),
    }

    Object.keys(weatherData).forEach ( key => {
        document.getElementById(key).textContent = weatherData[key]
    })
  
}

const getDate = () => {
    let date = new Date()
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
}


function load(input) {
    const input = document.getElementsByClassName("icon-container").textContent
    return getWeatherData(input)
}
