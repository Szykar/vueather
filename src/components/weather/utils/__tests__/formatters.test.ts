import { describe, it, expect } from 'vitest'
import { formatTemperature, formatPressure, formatWind } from '../formatters'

describe('Formatters', () => {
  describe('formatTemperature', () => {
    it('formats temperature correctly', () => {
      expect(formatTemperature(23.5)).toBe('23°C')
      expect(formatTemperature(0)).toBe('0°C')
      expect(formatTemperature(-5.7)).toBe('-6°C')
      expect(formatTemperature(100.9)).toBe('100°C')
    })

    it('always rounds down', () => {
      expect(formatTemperature(23.9)).toBe('23°C')
      expect(formatTemperature(23.1)).toBe('23°C')
    })
  })

  describe('formatPressure', () => {
    it('formats pressure correctly', () => {
      expect(formatPressure(1013.25)).toBe('1013 hPa')
      expect(formatPressure(1000)).toBe('1000 hPa')
      expect(formatPressure(950.75)).toBe('950 hPa')
    })

    it('always rounds down', () => {
      expect(formatPressure(1013.9)).toBe('1013 hPa')
      expect(formatPressure(1013.1)).toBe('1013 hPa')
    })
  })

  describe('formatWind', () => {
    it('formats wind speed correctly', () => {
      expect(formatWind(5)).toBe('5.0 kph')
      expect(formatWind(10.5)).toBe('10.5 kph')
      expect(formatWind(0)).toBe('0.0 kph')
    })

    it('rounds to one decimal place', () => {
      expect(formatWind(5.25)).toBe('5.3 kph')
      expect(formatWind(5.24)).toBe('5.2 kph')
      expect(formatWind(5.255)).toBe('5.3 kph')
    })
  })
})
