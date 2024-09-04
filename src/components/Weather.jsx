import React from "react";
import { useEffect, useState } from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/humidity.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";
import humidity from "../assets/humidity.png";

const Weather = () => {
  const [city, setCity] = useState("London"); // Default city
  const [weatherData, setWeatherData] = useState(null); // To store fetched weather data

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da2b4ad0632f3fa6bdb1b87a24daa4ad`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching the weather data:", error);
    }
  };

  useEffect(() => {
    search(city);
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img src={search} alt="search" />
      </div>
      <img src={clear} alt="clear" className="weather-icon" />
      <p className="temperature">16°c</p>
      <p className="location">London</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity} alt="wind" />
          <div>
            <p>91 %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind} alt="wind" />
          <div>
            <p>3.4 km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
