import React from 'react'
import './App.css'
import Button from '@mui/material/Button'
import { QueryClient, QueryClientProvider } from 'react-query'
import WeatherWidget from './Components/weather-widget'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retryDelay: (attemptIndex) => Math.min(1000 * 2 * attemptIndex, 30000),
      },
    },
  })
  // getWeatherCurrentData()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Button variant="contained">Hello world</Button>
        <WeatherWidget />
      </div>
    </QueryClientProvider>
  )
}

export default App
