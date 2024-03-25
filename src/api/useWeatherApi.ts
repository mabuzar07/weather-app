import toast from 'react-hot-toast'
import {  useQuery } from 'react-query'

import { IWeather } from '../types/watherTypes'

import {
  getWeatherCurrentEndpoint,
  getWeatherForcastEndpoint,
} from './weatherEndPoints'

const useWeatherApi = () => {

  const getWeatherCurrentData = useQuery('current',getWeatherCurrentEndpoint, {
    onSuccess: (weatherData: IWeather) => {
      toast.success('Tag created successfully')
    },
    onError: (error: any) => {
      toast.error(error?.message || 'Unable to get weather details')
    },
  })

  const getWeatherForcastData = useQuery('forcast',getWeatherForcastEndpoint, {
    onSuccess: (weatherData: IWeather) => {
      toast.success('Tag created successfully')
    },
    onError: (error: any) => {
      toast.error(error?.message || 'Unable to get weather details')
    },
  })


  return {
    getWeatherCurrentData,
    getWeatherForcastData
  }
}

export default useWeatherApi
