import { describe, it, expect } from 'vitest'
import { WeatherDataModel } from '../WeatherDataModel'
import type { WeatherData } from '@/services/types/Weather'

describe('WeatherDataModel', () => {
  describe('getWeatherCondition', () => {
    const createMockWeatherData = (id: number): WeatherData => ({
      weather: [{ id, main: '', description: '', icon: '' }],
      main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0
      },
      wind: { speed: 0, deg: 0, gust: 0 },
      // @ts-ignore for test
      sys: { sunrise: 0, sunset: 0 },
      timezone: 0
    })

    it('should return "unknown" for invalid weather IDs', () => {
      const invalidIds = [-1, 0, 900, 1000]
      invalidIds.forEach((id) => {
        const model = new WeatherDataModel(createMockWeatherData(id))
        expect(model.getWeatherCondition()).toBe('unknown')
      })
    })

    it('should return "thunderstorm" for IDs in the 200s', () => {
      const model = new WeatherDataModel(createMockWeatherData(230))
      expect(model.getWeatherCondition()).toBe('thunderstorm')
    })

    it('should return "drizzle" for IDs in the 300s', () => {
      const model = new WeatherDataModel(createMockWeatherData(310))
      expect(model.getWeatherCondition()).toBe('drizzle')
    })

    it('should return "rain" for IDs in the 500s', () => {
      const model = new WeatherDataModel(createMockWeatherData(520))
      expect(model.getWeatherCondition()).toBe('rain')
    })

    it('should return "snow" for IDs in the 600s', () => {
      const model = new WeatherDataModel(createMockWeatherData(620))
      expect(model.getWeatherCondition()).toBe('snow')
    })

    it('should return "atmosphere" for IDs in the 700s', () => {
      const model = new WeatherDataModel(createMockWeatherData(740))
      expect(model.getWeatherCondition()).toBe('atmosphere')
    })

    it('should return "clear" for IDs in the 800s', () => {
      const model = new WeatherDataModel(createMockWeatherData(800))
      expect(model.getWeatherCondition()).toBe('clear')
    })

    it('should return "unknown" for IDs in the 100s and 400s', () => {
      const unknownIds = [150, 450]
      unknownIds.forEach((id) => {
        const model = new WeatherDataModel(createMockWeatherData(id))
        expect(model.getWeatherCondition()).toBe('unknown')
      })
    })
  })
})
