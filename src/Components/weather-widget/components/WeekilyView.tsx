import React from 'react'
import { HourlyWeather, WeatherApiResponse } from '../../../types/weatherType'
import WeatherChart from './WeatherChart'
import moment from 'moment-timezone';
interface IForcastDayView {
  forecastdayData: WeatherApiResponse
}

const ForcastDayView: React.FC<IForcastDayView> = ({ forecastdayData }) => {
  const firstAstro = forecastdayData?.forecast?.forecastday?.[0]?.astro || {}
  return (
    <div className="days-stats mb-30">
      <div className="flex flex-wrap ">
        <div className="w-full md:w-1/4 pr-4 pl-4">
          <div className="today-stat">
            <div className="header">
              <span>{forecastdayData?.current?.condition?.text}</span>
              <span>{forecastdayData?.current?.last_updated}</span>
            </div>
            <div className="content">
              <div className="top mb-1">
                <div className="text">
                  {forecastdayData?.current?.feelslike_c} <span>0</span>
                </div>
                <img src={forecastdayData?.current?.condition?.icon} alt="" />
              </div>
              <div className="text-small mb-1">
                Real Feel{' '}
                <span>
                  {forecastdayData?.current?.temp_c}
                  <span>0</span>
                </span>
              </div>
              <div className="text-small-flex mb-1">
                <div className="text-small">
                  Wind N-E. <span>{forecastdayData?.current?.wind_kph}</span>
                </div>
                <div className="text-small">
                  Sunrise <span>{firstAstro?.sunrise}</span>
                </div>
              </div>
              <div className="text-small-flex mb-1">
                <div className="text-small">
                  Pressure <span>{forecastdayData?.current?.pressure_mb}</span>
                </div>
                <div className="text-small">
                  Sunset <span>{firstAstro?.sunset}</span>
                </div>
              </div>
              <div className="text-small mb-1">
                Humidity <span>{forecastdayData?.current?.humidity} </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 pl-4">
          <div className="flex  gap-2.5">
            {forecastdayData?.forecast?.forecastday[0]?.hour
              .slice(0, 5)
              .map((hour: HourlyWeather, index: number) => (
                <div className="w-1/6" key={index}>
                  <div className=" day-stat-wrapper">
                    <div className="day">{moment.utc(hour.time).local().format('HH:mm')}</div>
                    <span className="text-white">{hour?.condition?.text}</span>
                    <div className="temp">
                      {hour.temp_c} <span>o</span>{' '}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="w-full md:w-1/4 pr-4 pl-4">
          <div className="graph">
            <WeatherChart
              hourlyData={forecastdayData?.forecast?.forecastday[0]?.hour}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForcastDayView
