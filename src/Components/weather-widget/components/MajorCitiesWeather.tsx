import React from 'react'

const MajorCitiesWeather = () => {
  return (
    <div className="w-full md:w-1/4 pr-4 pl-4">
      <div className="all-cities-top mb-3">
        <div className="title">All cities</div>
        <div className="link">See All</div>
      </div>
      <div className="all-cities-wrapper">
        <div className="city">
          <div className="data">
            <div className="title-small">China</div>
            <div className="title">Beijing</div>
            <div className="title-white">Cloudy</div>
          </div>
          <img src="./images/rain2.png" alt="" />
        </div>
        <div className="city">
          <div className="data">
            <div className="title-small">US</div>
            <div className="title">California</div>
            <div className="title-white">Windly</div>
          </div>
          <img src="./images/rain3.png" alt="" />
        </div>
        <div className="city">
          <div className="data">
            <div className="title-small">Dubai</div>
            <div className="title">Arab Emirates</div>
            <div className="title-white">Mostly Sunny</div>
          </div>
          <img src="./images/rain4.png" alt="" />
        </div>
        <div className="city">
          <div className="data">
            <div className="title-small">Canada</div>
            <div className="title">Mostly Sunny</div>
            <div className="title-white">Light SnowShower</div>
          </div>
          <img src="./images/rain1.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default MajorCitiesWeather
