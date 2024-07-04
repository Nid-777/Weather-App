const apiKey = "97d0e72a5bbd83828b59c1abe07a2bea";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to get the appropriate icon based on weather conditions
function getWeatherIcon(weather) {
    if (weather.includes("clear")) {
        return "clear-day.png";
    } else if (weather.includes("clouds")) {
        return "cloudy-day.png";
    } else if (weather.includes("rain")) {
        return "rainy-day.png";
    } else if (weather.includes("thunderstorm")) {
        return "thunderstorm-day.png";
    } else if (weather.includes("snow")) {
        return "snowy-day.png";
    } else {
        return "default-weather.png";
    }
}

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    // Get and set weather icon
    const weatherCondition = data.weather[0].main.toLowerCase();
    const iconSrc = getWeatherIcon(weatherCondition);
    weatherIcon.src = iconSrc;


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

