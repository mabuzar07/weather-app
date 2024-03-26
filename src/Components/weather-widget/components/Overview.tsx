import React from 'react'
import { WeatherApiResponse } from '../../../types/weatherType'
import MajorCitiesWeather from './MajorCitiesWeather'
import { countries } from '../../../constants/countries'
import { CountryType } from '../../../types/countryTypes'

interface IOverviewProps {
  forecastdayData: WeatherApiResponse
  location: string
}

const Overview: React.FC<IOverviewProps> = ({ forecastdayData, location }) => {
  const [firstForcastDay] =
    forecastdayData?.forecast?.forecastday?.[0]?.hour || []
  return (
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-4/4 pr-4 pl-4">
        <div className="title-main mb-3">Today's Overview</div>
        <div className="flex flex-wrap ">
          <div className="w-full md:w-8/12 ">
            <div className="flex flex-wrap  gap-y-5 gap-x-10">
              <div className="w-1/2 single-stat-wrapper mb-4">
                <div className="single-stat">
                  <div className="title">Wind Status</div>
                  <img src="./images/wind.png" alt="" />
                  <div className="flex-item">
                    <div className="text">
                      {forecastdayData?.current?.wind_kph} <span>km/h</span>
                    </div>
                    <div className="text">
                      <span>{forecastdayData?.current?.last_updated}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 single-stat-wrapper mb-4">
                <div className="single-stat">
                  <div className="title">UV Indesx</div>
                  <div className="image-wrapper">
                    <img src="./images/uv.png" alt="" />
                  </div>
                  <div className="flex-center">
                    <div className="text">
                      {forecastdayData?.current?.uv}
                      <span>UV</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 single-stat-wrapper mb-4">
                <div className="single-stat">
                  <div className="title">Humidity</div>
                  <div className="image-wrapper">
                    <img src="./images/humidity.png" alt="" />
                  </div>
                  <div className="flex-item">
                    <div className="text">
                      {forecastdayData?.current?.humidity}
                    </div>
                    <div className="text-small">
                      <span>
                        The dew point is {firstForcastDay?.dewpoint_c} right now
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 single-stat-wrapper mb-4">
                <div className="single-stat">
                  <div className="title">Visibility</div>
                  <div className="image-wrapper">
                    <img src="./images/visibility.png" alt="" />
                  </div>
                  <div className="flex-item">
                    <div className="text">{firstForcastDay?.vis_km} km</div>
                    <div className="text-small">
                      <span>Haze is affecting visibility</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12 pl-4 pr-4">
            <div className="map-point">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    src={
                      countries.find(
                        (country: CountryType) => country.label === location
                      )?.mapUrl
                    }
                    width="100%"
                    className="w-full h-[525px]"
                    id="gmap_canvas"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <MajorCitiesWeather /> */}
    </div>
  )
}

export default Overview
