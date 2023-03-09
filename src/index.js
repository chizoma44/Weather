//Challenge 1

let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
console.log(new Date());

let days = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];

let timeNow = document.querySelector("#time-now");

if (hours < 10) {
  hours = `0${hours}`;
}

if (minutes < 10) {
  minutes = `0${minutes}`;
}

timeNow.innerHTML = `${day} ${hours}:${minutes}`;

//Challenge 2
function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let placeCity = response.data.name;

  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = placeCity;
  let tempo = document.querySelector("#tempo");
  tempo.innerHTML = `${temperature}℃`;

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;

  let celsius = document.querySelector("#celsius");
  celsius.innerHTML = `${temperature}℃`;

  let fahrenheit = document.querySelector("#fahrenheit");
  let fahren = Math.round((temperature * 9) / 5 + 32);
  fahrenheit.innerHTML = `${fahren}°F`;
}

function search(place) {
  let units = "metric";
  let urlEndpoint = `https://api.openweathermap.org/data/2.5/weather?`;

  let apiKey = `d1a86552de255334f6117b348c4519bd`;
  let apiUrl = `${urlEndpoint}q=${place}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemp);
}

function handlesearch(event) {
  event.preventDefault();
  let place = document.querySelector("#city-input").value;
  search(place);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", handlesearch);

function findPosition(position) {
  console.log(response.coords.longitude);

  let longitude = response.coords.longitude;
  let latitude = response.coords.latitude;

  let units = "metric";
  let urlEndpoint = `https://api.openweathermap.org/data/2.5/weather?`;

  let apiKey = `d1a86552de255334f6117b348c4519bd`;
  let apiUrl = `lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemp);
}

function findLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(findPosition);
}

let locateHereButton = document.querySelector("#locate-here-button");
locateHereButton.addEventListener("click", findLocation);

search("Tokyo");
