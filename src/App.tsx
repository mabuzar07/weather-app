import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import WeatherWidget from './Components/weather-widget'
import { useTheme } from './hooks/ThemeProvider'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {},
  })
  const { darkMode } = useTheme()
  return (
    <QueryClientProvider client={queryClient}>
      <div className={darkMode ? 'dark' : 'light'}>
        <WeatherWidget />
      </div>
    </QueryClientProvider>
  )
}

export default App
