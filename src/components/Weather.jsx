import React from "react";
import "./Weather.css";
import search from "../assets/search.png";
import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/humidity.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";
import humidity from "../assets/humidity.png";

const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search City" />
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
