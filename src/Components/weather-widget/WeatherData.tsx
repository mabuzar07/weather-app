import React from 'react'
import NavBar from '../NavBar'
import FilterBar from './components/FilterBar'
import WeekilyView from './components/WeekilyView'
import Overview from './components/Overview'
import { IWeatherProps } from './types'

const WeatherData: React.FC<IWeatherProps> = ({
  forcastData,
  handleChangeLocation,
  setLocation,
  location,
}) => {
  return (
    <>
      <div className="dashboard">
        <div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 px-4">
          <NavBar
            locationName={
              forcastData?.location?.name || forcastData?.location?.region || ''
            }
            handleChangeLocation={handleChangeLocation}
            setLocation={setLocation}
            location={location}
          />
          <FilterBar />
          {forcastData && <WeekilyView forecastdayData={forcastData} />}
          <Overview forecastdayData={forcastData} />
        </div>
      </div>
    </>
  )
}

export default WeatherData
