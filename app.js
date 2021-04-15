"use strick";
searchBtn.addEventListener('click', searchWeather);

/**
 * @description Getting information of weather from 'openweathermap' api
 */
function searchWeather() {
    weatherTemperature.textContent = 'Temperature';
    loadingTxt.style.display = 'block';
    weatherBox.style.display = 'none';
    displayTemp.style.display = 'none';

    const city = searchCity.value;

    if(city.length === 0) {
        alert('Please Enter Valid City Name!');
        loadingTxt.style.display = 'none';
    } else {
        let http = new XMLHttpRequest();
        const method = 'GET';
        const apiKey = 'de84ad524245599125c451f567500c4e';
        const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=matric&appid=' + apiKey;
    
        http.open(method, URL);
        http.onreadystatechange = function() {
            if(http.readyState === XMLHttpRequest.DONE && http.status === 200) {
                let data = JSON.parse(http.responseText);
                let weatherData = new Weather(city, data.weather[0].description.toUpperCase(),data.main.temp);
                setWeather(weatherData);
            } else if(http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
                console.log("ERROR!");
            }
        };
        http.send();
    }
}

/**
 * @description Setting weather information to HTML tags after getting data from API.
 * @param {*} weatherData 
 */
function setWeather(weatherData) {
    loadingTxt.style.display = 'none';
    weatherBox.style.display = 'block';
    displayTemp.style.display = 'block';

    weatherCity.textContent = weatherData.city;
    weatherDescription.textContent = weatherData.description;

    let temp = weatherData.temperature;

    /**
     * @description convert to Celsius
     */
    celsiusBtn.onclick = function () {
        weatherTemperature.textContent = (temp-273.15).toFixed(2) + ' C';
    }

    /**
     * @description convert to Fahrenheit
     */
    fahrenheitBtn.onclick = function () {
        weatherTemperature.textContent = ((temp-273.15)*9/5 + 32).toFixed(2) + ' F';
    }

    /**
     * @description convert to Kelvin
     */
    kelvinBtn.onclick = function () {
        weatherTemperature.textContent = temp.toFixed(2) + ' K';
    }
}