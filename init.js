"use strick";

let searchBtn = document.querySelector('#showWeatherBTN');
let searchCity = document.querySelector('#city');


let loadingTxt = document.querySelector('#load');
let weatherBox = document.querySelector('#weather');
let weatherCity = weatherBox.firstElementChild;
let weatherDescription = document.querySelector('#weatherDescription');
let weatherTemperature = weatherBox.lastElementChild;
let displayTemp = document.querySelector('#displayTemperature');

let celsiusBtn = document.querySelector('#celsiusBtn');
let fahrenheitBtn = document.querySelector('#fahrenheitBtn');
let kelvinBtn = document.querySelector('#kelvinBtn');