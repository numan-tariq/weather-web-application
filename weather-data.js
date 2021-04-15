"use strick";
/**
 * @description Constructor function for setting values from api
 * @param {*} city get city from api
 * @param {*} description get description from api
 * @param {*} temperature get temperature from api
 */
function Weather(city, description, temperature) {
    this.city = city;
    this.description = description;
    this.temperature = temperature;
}