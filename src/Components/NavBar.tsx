import React from 'react'
import CountrySelect from './CountrySelect'
import { useTheme } from '../hooks/ThemeProvider'
import { LuLayoutDashboard,LuBell } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

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
  const { toggleTheme,darkMode } = useTheme()
  return (
    <div className={`navbar-main mb-30 ${!darkMode ? 'lightt'  : ''} `}>
      <div className="flex flex-wrap ">
        <div className="w-3/4 pr-4">
          <div className="left-container">
            <div className="left">
              <div className="icon">
              <LuLayoutDashboard />
              </div>
              <div className="icon">
              <LuBell />
              </div>
              <div className="location">
              <CiLocationOn />
                <div className="text">{locationName}</div>
              </div>
            </div>
            <div className="search-wrapper">
              <span className='svg'> <CiSearch  /></span>
             
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
              <FaMoon />
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
