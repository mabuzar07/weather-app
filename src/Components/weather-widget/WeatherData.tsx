import React from 'react'
import NavBar from '../NavBar'
import FilterBar from './components/FilterBar'
import WeekilyView from './components/WeekilyView'
import Overview from './components/Overview'

const WeatherData = () => {
  return (
    <>
      <div className="dashboard">
        <div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4 px-4">
          <NavBar />
          <FilterBar />
          <WeekilyView />
          <Overview />
        </div>
      </div>
    </>
  )
}

export default WeatherData
