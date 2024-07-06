const apiKey = "bibewudhneiojnqwo";
const apiUrl = "https://iughkjdhalkdn;ldm;l";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to get the appropriate icon based on weather conditions
function getWeatherIcon(weather) {
    if (weather.includes("clear")) {
        return "../img/clear-day.png";
    } else if (weather.includes("clouds")) {
        return "../img/cloudy-day.png";
    } else if (weather.includes("rain")) {
        return "../img/rainy-day.png";
    } else if (weather.includes("thunderstorm")) {
        return "../img/thunderstorm-day.png";
    } else if (weather.includes("snow")) {
        return "../img/snowy-day.png";
    } else {
        return "../img/default-weather.png";
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

