const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
const FORECAST = document.getElementsByClassName('component__forecast-box')[0];

const URL = "https://api.openweathermap.org/data/2.5/forecast/daily?" +
"q=CITY&cnt=7&units=imperial&APPID=YOUR_APP_ID";