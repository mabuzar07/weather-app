import { useState } from 'react'
import { useQuery } from 'react-query'
import { getWeatherForcastEndpoint } from '../../api/weatherEndPoints'

const WeatherWidget = () => {
  const [triggerQuery, setTriggerQuery] = useState(false)
  const { data } = useQuery('weatherdata', getWeatherForcastEndpoint, {
    enabled: triggerQuery,
  })

  return <div>WeatherWidget</div>
}

export default WeatherWidget
