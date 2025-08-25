import React, { useEffect, useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import DailyForecast from "./DailyForecast";

const MainContainer = () => {
  const [forecastData, setForecastData] = useState({});
  const [locationData, setLocationData] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});

  // eslint-disable-next-line no-unused-vars
  const [apiKey, setApiKey] = useState("13438855c6704a9f8c170846250908");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorDetails, setErrorDetails] = useState("");

  const fetchForecastWeather = async (locationSearch = "manila", days = 4) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${locationSearch}&days=${days}`
      );

      if (!response.ok) {
        const errorText = await response.text(); // Get error details if available

        throw new Error(
          `HTTP error! Status: ${response.status} - ${errorText}`
        );
      }

      const { location, current, forecast } = await response.json();

      setLocationData(location);
      setCurrentWeather(current);
      setForecastData(forecast);

      setIsLoading(false);
    } catch (error) {
      console.error("Error on fetching weather data: ", error);
      setIsError(true);
      setErrorDetails(error);
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
            <>
              <h1 className="error-display">Request Error!</h1>
              <p className="error-display">{errorDetails.toString()}</p>
            </>
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
