import { apiRoutes } from '../constants/apiRoutes'

import { makeApiCall } from '../utils/apiCallWrapper'

export const getWeatherCurrentEndpoint = async () =>
  makeApiCall('get', apiRoutes.GetWeatherCurrent)

  export const getWeatherForcastEndpoint = async () =>
   makeApiCall('get', `${apiRoutes.GetWeatherForCast}?key=${process.env.REACT_APP_API_KEY}&q=London`)
