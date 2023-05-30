function displayTemperature(response) {
  console.log(response.data.wind.speed);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let despcriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  // let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  despcriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  // windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "o2972aff83bt1a433411747ae6c9e0f0";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={Seattle}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
