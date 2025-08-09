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
      </div>
      <div className="search-content">
        <h2 className="color-primary font-larger font-bold mb-0">
          {locationData.name}, {locationData.country}
        </h2>
        <p className="color-gray mt-0 mb-0">
          Temperature: {currentWeather.temp_c}°C
        </p>
        <p className="color-gray mt-half">{currentWeather.condition.text}</p>
      </div>
    </div>
  );
};

export default SearchResult;
