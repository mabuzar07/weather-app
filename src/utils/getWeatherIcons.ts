type WeatherCondition =
  | 'Patchy rain nearby'
  | 'Light rain shower'
  | 'Clear'
  | 'Partly Cloudy'
  | 'Overcast'

const icons: Record<WeatherCondition, string> = {
  'Patchy rain nearby': './images/rain1.png',
  'Light rain shower': './images/rain3.png',
  Clear: './images/daystat.png',
  'Partly Cloudy': './images/rain5.png',
  Overcast: './images/rain2.png',
}

export const getWeatherIcons = (key: WeatherCondition): string => {
  return icons[key]
}
