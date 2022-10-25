import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}C`);
  }
  let city = "New York";
  let apiKey = "e4a579ffa1b19f3e711a89d8fabe3010";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);
  return <h2>Hello from weather</h2>;
}
