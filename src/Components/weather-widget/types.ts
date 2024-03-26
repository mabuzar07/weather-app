import { WeatherApiResponse } from "../../types/weatherType";

export interface IWeatherProps{
    forcastData:WeatherApiResponse
    handleChangeLocation: (event: React.ChangeEvent<any>) => void;
    setLocation:React.Dispatch<string>
    location:string
}