import React from 'react'

const FilterBar = () => {
  return (
    <div className="filter-top mb-30">
      <div className="flex flex-wrap ">
        <div className="w-full md:w-3/4 pr-4 pl-4">
          <div className="filter-left">
            <div className="days">
              <div className="day active">Next 5days</div>
            </div>
            <div className="toggle-buttons">
              <button className="active">Forecast</button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 pr-4 pl-4">
          <div className="filter-right-title">Chance Of Rain</div>
        </div>
      </div>
    </div>
  )
}

export default FilterBar
