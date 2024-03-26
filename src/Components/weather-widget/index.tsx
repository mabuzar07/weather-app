import WeatherData from './WeatherData'
import { countries } from '../../constants/countries'
import Loader from '../Loader'
import useWeatherApi from '../../api/useWeatherApi'
import { useEffect, useState } from 'react'

const WeatherWidget = () => {
  const [location, setLocation] = useState(countries[0].label)
  const { data, isLoading, isError, refetch } = useWeatherApi(location)
  const handleChangeLocation = () => {
    refetch().then(() => {})
  }
  useEffect(() => {}, [location])
  if (isLoading) return <Loader />

  if (isError) return <p>Something went wrong</p>

  return (
    <WeatherData
      forcastData={data}
      handleChangeLocation={handleChangeLocation}
      setLocation={setLocation}
    />
  )
}

export default WeatherWidget
