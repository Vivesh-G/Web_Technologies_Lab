const API_KEY="0176175087b603b693ef1c65e852b722"

async function getWeather(){
    const city = document.getElementById("cityInput").value;
    const weatherCard = document.getElementById("weatherData");
    const err = document.getElementById("errorMsg");

    if(!city) alert("Please enter a city Name!");
    
    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message)
        }

        document.getElementById("cityName").innerHTML = data.name;
        document.getElementById("temperature").innerHTML = `Temperature: ${data.main.temp}°C`;
        document.getElementById("description").innerHTML = `Weather: ${data.weather[0].description}`;
        document.getElementById("humidity").innerHTML = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").innerHTML = `Wind: ${data.wind.speed} km/h`;
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weatherData.classList.remove("hidden");
        errorMsg.classList.add("hidden");
    } catch (error) {
        errorMsg.innerText = `Error: ${error.message}`;
        errorMsg.classList.remove("hidden");
        weatherCard.classList.add("hidden");
    }
}