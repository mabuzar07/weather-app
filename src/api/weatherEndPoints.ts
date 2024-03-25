import { apiRoutes } from '../constants/apiRoutes'

import { makeApiCall } from '../utils/apiCallWrapper'

export const getWeatherCurrentEndpoint = async () =>
  makeApiCall('get', apiRoutes.GetWeatherCurrent)

  export const getWeatherForcastEndpoint = async () =>
  makeApiCall('get', apiRoutes.GetWeatherForCast)
