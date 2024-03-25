import React from 'react'

const Overview = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-3/4 pr-4 pl-4">
        <div className="title-main mb-3">Today's Overview</div>
        <div className="flex flex-wrap ">
          <div className="w-full md:w-3/5 ">
            <div className="flex flex-wrap justify-between gap-4">
              <div className="w-1/2 single-stat-wrapper mb-4">
                <div className="single-stat">
                  <div className="title">Wind Status</div>
                  <img src="./images/wind.png" alt="" />
                  <div className="flex-item">
                    <div className="text">
                      7.50 <span>km/h</span>
                    </div>
                    <div className="text">
                      <span>6.20 AM</span>
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
                      5.50 <span>UV</span>
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
                    <div className="text">84%</div>
                    <div className="text-small">
                      <span>The dew point is 270 right now</span>
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
                    <div className="text">04 km</div>
                    <div className="text-small">
                      <span>Haze is affecting visibility</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5 pl-4 pr-4">
            <div className="single-stat-map-wrapper">
              <div className="data">
                <div className="text">
                  Explore global map of wind weather and ocean condition
                </div>
                <button>GET STARTED</button>
              </div>
              <img src="./images/img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 pr-4 pl-4">
        <div className="all-cities-top mb-3">
          <div className="title">All cities</div>
          <div className="link">See All</div>
        </div>
        <div className="all-cities-wrapper">
          <div className="city">
            <div className="data">
              <div className="title-small">Chaina</div>
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
    </div>
  )
}

export default Overview
