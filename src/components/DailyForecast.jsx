import React from "react";
import { convertToDayInWeek } from "../util/dateConvert";

const DailyForecast = ({ forecastData }) => {
  const { forecastday } = forecastData;

  return (
    <div className="daily-forecast">
      {forecastday.map((forecast, index) => (
        <div className="mini-box" style={{ width: forecastday.length === 4 ? "23%" : "30%" }} key={index}>
          <h2 className="color-primary mb-1">{convertToDayInWeek(forecast.date)}</h2>
          <div className="weather-icon">
            <p
              style={{
                backgroundImage: `url(${forecast.day.condition.icon})`,
              }}
            ></p>
          </div>
          <p className="mt-1">{forecast.day.avgtemp_c}°C</p>
        </div>
      ))}
    </div>
  );
};

export default DailyForecast;
