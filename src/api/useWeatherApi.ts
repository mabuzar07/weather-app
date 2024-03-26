import { useQuery } from 'react-query';
import { getWeatherForcastEndpoint } from './weatherEndPoints';

const useWeatherApi = (country:string) => {
  return useQuery(['weatherdata', country], () =>
    getWeatherForcastEndpoint(country)
  );
};

export default useWeatherApi;
