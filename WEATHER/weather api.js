function refreshWeather(currentweather)

let currentTemperatureValue = document.querySelector("#current-temperature-value");
currentTemperatureValue.innerHTML = Math.round(currentweather.data.temperature.current);

let weatherDescription = document.querySelector("#weather-description");
weatherDescription.innerHTML = currentweather.data.condition.description;

let currentWeatherIcon = document.querySelector("#weather-app-icon");
currentWeatherIcon.innerHTML=
 <Image

 alt="not loading"
 class = "weather-app-icon"
 />;
console.log(currentweather.data);

let hunidity = document.querySelector("#humidity");
humidity.innerHTML = '${currentweather.data.wind.speed} %' ;

let windSpeed = document.querySelector("#wind-speed");
humidity.innerHTML = '${currentweather.data.wind.speed} knots' ;

let currentTime = document.querySelector("#current-time");
let date = new Date(currentWeather.data.time * 1000);
currentTime.innerHTML = formatDate(date);


}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
        "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"
    ];
    let day = days[date.getDay()];
    if (minutes < 10) {
        minutes = '0${minutes}';
    }
    return '${day  ${hours}:{minutes}';
}
function searchcity(currentCityName){
    let apiKey = "73dof19a030ad06t05b21b4860f";
    let apiUrl = 'https://api.shecoses.io/weather/v1/current?query=${currentCityName}&key=${apiKey}';

    axios.get(apiUrl).then(refreshWeather);
}
function displayCity(event) {
    event.preventDefault();
    
    let cityName = document.querySelector("#city-name");
    let cityNameDisplayed = document.querySelector("h3");
    cityNameDisplayed.innerHTML = cityName.value;
    currentCityName = cityName.value;
    searchcity(currentCityName);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", displayCity);