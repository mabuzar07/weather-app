import { useState } from 'react'
import { useQuery } from 'react-query'
import { getWeatherForcastEndpoint } from '../../api/weatherEndPoints'
import WeatherData from './WeatherData'

const WeatherWidget = () => {
  const [triggerQuery, setTriggerQuery] = useState(false)
  const { data } = useQuery('weatherdata', getWeatherForcastEndpoint, {
    enabled: triggerQuery,
  })

  return <WeatherData />
}

export default WeatherWidget
