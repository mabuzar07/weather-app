import React from 'react'

const WeekilyView = () => {
  return (
    <div className="days-stats mb-30">
      <div className="flex flex-wrap ">
        <div className="w-full md:w-1/4 pr-4 pl-4">
          <div className="today-stat">
            <div className="header">
              <span>Friday</span>
              <span>11:45 AM</span>
            </div>
            <div className="content">
              <div className="top mb-1">
                <div className="text">
                  16 <span>0</span>
                </div>
                <img src="./images/daystat.png" alt="" />
              </div>
              <div className="text-small mb-1">
                Real Feel{' '}
                <span>
                  18 <span>0</span>
                </span>
              </div>
              <div className="text-small-flex mb-1">
                <div className="text-small">
                  Wind N-E. <span>6-7km/h</span>
                </div>
                <div className="text-small">
                  Sunrise <span>5:30AM</span>
                </div>
              </div>
              <div className="text-small-flex mb-1">
                <div className="text-small">
                  Pressure <span>100MB</span>
                </div>
                <div className="text-small">
                  Sunset <span>6:45</span>
                </div>
              </div>
              <div className="text-small mb-1">
                Humidity <span>51% </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 pl-4">
          <div className="flex  gap-2.5">
            <div className="w-1/6">
              <div className="day-stat-wrapper">
                <div className="day">SUN</div>
                <img src="./images/rainy.png" alt="" />
                <div className="temp">
                  15 <span>o</span>{' '}
                </div>
              </div>
            </div>
            <div className="w-1/6">
              <div className="day-stat-wrapper">
                <div className="day">MON</div>
                <img src="./images/rain1.png" alt="" />
                <div className="temp">
                  11 <span>o</span>{' '}
                </div>
              </div>
            </div>
            <div className="w-1/6">
              <div className="day-stat-wrapper">
                <div className="day">TUE</div>
                <img src="./images/rain2.png" alt="" />
                <div className="temp">
                  10 <span>o</span>{' '}
                </div>
              </div>
            </div>
            <div className="w-1/6">
              <div className="day-stat-wrapper">
                <div className="day">WED</div>
                <img src="./images/rain3.png" alt="" />
                <div className="temp">
                  12 <span>o</span>{' '}
                </div>
              </div>
            </div>
            <div className="w-1/6">
              <div className="day-stat-wrapper">
                <div className="day">THU</div>
                <img src="./images/rain4.png" alt="" />
                <div className="temp">
                  10 <span>o</span>{' '}
                </div>
              </div>
            </div>
            <div className="w-1/6">
              <div className="day-stat-wrapper">
                <div className="day">SAT</div>
                <img src="./images/rain5.png" alt="" />
                <div className="temp">
                  10 <span>o</span>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 pr-4 pl-4">
          <div className="graph">
            <img src="./images/chance.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeekilyView
