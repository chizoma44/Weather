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

  let celsius = document.querySelector("#celsius");
  celsius.innerHTML = `${temperature}℃`;

  let fahrenheit = document.querySelector("#fahrenheit");
  let fahren = Math.round((temperature * 9) / 5 + 32);
  fahrenheit.innerHTML = `${fahren}°F`;
}

function search(event) {
  event.preventDefault();

  let place = document.querySelector("#search-city").value;
  let units = "metric";
  let urlEndpoint = "https://api.openweathermap.org/data/2.5/weather?";

  let apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
  let apiUrl = `${urlEndpoint}q=${place}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemp);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showCity() {
  let show = document.querySelector("#city");
  show.innerHTML = "No Selection made";
}

showCity();
