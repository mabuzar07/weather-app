import React from 'react'
import CountrySelect from './CountrySelect'
import { useTheme } from '../hooks/ThemeProvider'

interface INavBarProps {
  locationName: string
  handleChangeLocation: (event: React.ChangeEvent<any>) => void
  setLocation: React.Dispatch<string>
}

const NavBar: React.FC<INavBarProps> = ({
  locationName,
  handleChangeLocation,
  setLocation,
}) => {
  const { toggleTheme } = useTheme()
  return (
    <div className="navbar-main mb-30 bg-gray-500 ">
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
                <div className="text">{locationName}</div>
              </div>
            </div>
            <div className="">
              <CountrySelect
                handleChangeLocation={handleChangeLocation}
                setLocation={setLocation}
              />
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="right-wrapper">
            <div className="toggler">
              <input type="checkbox" name="" id="" onChange={toggleTheme} />
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
