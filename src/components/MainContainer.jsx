import React, { useEffect, useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import DailyForecast from "./DailyForecast";

const MainContainer = () => {
  const [forecastData, setForecastData] = useState({});
  const [locationData, setLocationData] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});

  const [apiKey, setApiKey] = useState("13438855c6704a9f8c170846250908");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchForecastWeather = async (locationSearch = "manila", days = 4) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${locationSearch}&days=${days}`
      );

      const { location, current, forecast } = await response.json();

      setLocationData(location);
      setCurrentWeather(current);
      setForecastData(forecast);

      setIsLoading(false);
    } catch (error) {
      console.error("Error on fetching weather data: ", error);
      setIsError(true)
    }
  };

  useEffect(() => {
    fetchForecastWeather();
  }, []);

  const searchLocation = async (location) => {
    try {
      await fetchForecastWeather(location);
    } catch (error) {
      console.error("Failed fetching location: ", error);
    }
  };

  if (isLoading) {
    return (
      <div className="hero-banner" style={{ width: "100%" }}>
        <div className="weather-block">
          {isError ? (
            <h1 className="error-display">Request Error!</h1>
          ) : (
            <div className="loader-ring" role="status" aria-live="polite">
              <span className="visually-hidden">Loading…</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="hero-banner" style={{ width: "100%" }}>
      <div className="weather-block">
        {/* <!-- Header --> */}
        <Header />

        {/* <!-- Search bar --> */}
        <SearchBar searchLocation={searchLocation} />

        {/* <!-- Search Result --> */}
        <SearchResult
          currentWeather={currentWeather}
          locationData={locationData}
        />

        {/* <!-- Daily Forecast --> */}
        <DailyForecast forecastData={forecastData} />
      </div>
    </div>
  );
};

export default MainContainer;
