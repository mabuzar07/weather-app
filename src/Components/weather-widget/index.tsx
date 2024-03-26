import WeatherData from './WeatherData'
import { countries } from '../../constants/countries'
import Loader from '../Loader'
import useWeatherApi from '../../api/useWeatherApi'
import { useEffect, useState } from 'react'

const WeatherWidget = () => {
  const [location, setLocation] = useState(countries[0].label)
  const { data, isLoading, isError, refetch } = useWeatherApi(location)
  const handleChangeLocation = () => {
    refetch()
  }

  useEffect(() => {
    const intervalId = setInterval(handleChangeLocation, 60000) // 60000 milliseconds = 1 minute
    return () => clearInterval(intervalId)
  }, [])
  if (isLoading) return <Loader />

  if (isError) return <p>Something went wrong</p>

  return (
    <WeatherData
      forcastData={data}
      handleChangeLocation={handleChangeLocation}
      location={location}
      setLocation={setLocation}
    />
  )
}

export default WeatherWidget
