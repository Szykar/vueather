import type { WeatherData } from '@/services/types/Weather'

const weatherConditionMap = [
  'unknown',
  'unknown',
  'thunderstorm', //2xx
  'drizzle', //3xx
  'unknown',
  'rain', //5xx
  'snow', //6xx
  'atmosphere', //7xx
  'clear' //8xx
] as const

type WeatherCondition = (typeof weatherConditionMap)[number]

export class WeatherDataModel {
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  wind: {
    speed: number
    deg: number
    gust: number
  }
  timezone: number
  sunrise: number
  sunset: number

  constructor(data: WeatherData) {
    this.weather = data.weather[0]
    this.main = data.main
    this.wind = data.wind
    this.sunrise = data.sys.sunrise
    this.sunset = data.sys.sunset
    this.timezone = data.timezone
  }

  getTemperature(): number {
    return this.main.temp
  }

  getFeelsLike(): number {
    return this.main.feels_like
  }

  getPressure(): number {
    return this.main.pressure
  }

  getHumidity(): number {
    return this.main.humidity
  }

  getWeatherDescription(): string {
    return this.weather.description
  }

  getIconCode(): string {
    return this.weather.icon
  }

  getWeatherCondition(): WeatherCondition {
    const weatherId = this.weather.id
    if (!weatherId || weatherId < 0 || weatherId > 899) return 'unknown'

    const codeMapIndex = Math.floor(weatherId / 100)

    return weatherConditionMap[codeMapIndex]
  }
}
