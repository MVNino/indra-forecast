import React, { useEffect } from "react";

const SearchResult = ({ currentWeather, locationData }) => {
  return (
    <div className="search-result">
      <div className="search-content-icon">
        <h1>
          <i
            className="color-primary"
            style={{
              backgroundImage: `url(${currentWeather.condition.icon})`,
            }}
          ></i>
        </h1>
        <h3 className="color-gray">
          {currentWeather.temp_c}°C
        </h3>
      </div>
      <div className="search-content">
        <h2 className="color-primary font-larger font-bold mb-0">
          {locationData.name}, {locationData.country}
        </h2>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <p className="color-gray mt-0 mb-0 ta-left">
              {currentWeather.condition.text}
            </p>
            <p className="color-gray mt-half ta-left">
              Precipitation: {currentWeather.precip_mm}mm
            </p>
          </div>
          <div>
            <p className="color-gray mt-0 mb-0 ta-left">
              Wind: {currentWeather.wind_kph}km/h
            </p>
            <p className="color-gray mt-half ta-left">
              Humidity: {currentWeather.humidity}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
