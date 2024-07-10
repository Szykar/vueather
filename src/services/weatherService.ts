import { WeatherDataModel } from '@/services/models/WeatherDataModel'
import type { WeatherData } from '@/services/types/Weather'

const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY

function getWeatherUrl(query: string): string {
  return `${API_URL}?q=${query}&units=metric&appid=${API_KEY}`
}

async function getWeather(query: string): Promise<WeatherDataModel> {
  const res = await fetch(getWeatherUrl(query), {})
  const data = (await res.json()) as WeatherData
  if (data.cod === '404') {
    throw new Error(data.message)
  }
  return new WeatherDataModel(data)
}

export default {
  getWeather
}
