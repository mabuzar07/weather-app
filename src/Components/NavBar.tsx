import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar-main mb-30">
      <div className="flex flex-wrap ">
        <div className="w-3/4 pr-4">
          <div className="left-container">
            <div className="left">
              <div className="icon">
                <img src="./images/dashboard.png" alt="" />
              </div>
              <div className="icon">
                <img src="./images/bell.png" alt="" />
              </div>
              <div className="location">
                <img src="./images/pin.png" alt="" />
                <div className="text">Dhaka,Bangladesh</div>
              </div>
            </div>
            <div className="search-wrapper">
              <img src="./images/search.png" alt="" />
              <input type="text" name="" placeholder="Search City" />
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="right-wrapper">
            <div className="toggler">
              <input type="checkbox" name="" id="" />
              <div className="circle">
                <img src="./images/togl.png" alt="" />
              </div>
            </div>
            <div className="profile">
              <img src="./images/profile.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
