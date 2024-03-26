import * as React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'
import { HourlyWeather } from '../../../types/weatherType'

interface IWeatherChartProps {
  hourlyData: HourlyWeather[]
}

const WeatherChart: React.FC<IWeatherChartProps> = ({ hourlyData }) => {
  const xAxisData = hourlyData
    .slice(0, 5)
    .map((hour: HourlyWeather) => hour.time_epoch)
  const yAxisData = hourlyData
    .slice(0, 5)
    .map((hour: HourlyWeather) => hour.will_it_rain)

  return (
    <LineChart
      xAxis={[{ data: xAxisData }]}
      series={[
        {
          data: yAxisData,
        },
      ]}
      width={500}
      height={300}
    />
  )
}

export default WeatherChart
