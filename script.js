// vas a programar aqui, puedes usar los metodos de openweatherservice.js

function load() {
    const input = document.getElementById("search-input").value
    return getWeatherData(input)
        .then((data) => setWeatherData(data))        
};


const setWeatherData = data => {
    console.log(data)
    const ImgIcon = data.weather[0].icon
            console.log(ImgIcon)
            document.getElementById("weatherImg").src='http://openweathermap.org/img/wn/'+ ImgIcon +'@2x.png'

    const weatherData = {
        location: data.name,
        temp: data.main.temp += "°",
        humidity: data.main.humidity += "%",
        date: getDate(),
        hour: time(),  
    }
    
    Object.keys(weatherData).forEach( key => {
        document.getElementById(key).textContent = weatherData[key]
    })  
 
};

const getDate = () => {
    let date = new Date()
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
};
const time = () => {
    let date = new Date()
    return `${date.getHours()}:${date.getMinutes()}`
};




