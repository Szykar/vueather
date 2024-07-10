import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import WeatherIcon from '../WeatherIcon.vue'

describe('WeatherIcon', () => {
  it('renders the correct image URL with default size', () => {
    const iconCode = '01d'
    const wrapper = mount(WeatherIcon, {
      props: { iconCode }
    })
    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe(`https://openweathermap.org/img/wn/${iconCode}@4x.png`)
  })

  it('renders the correct image URL with specified size', () => {
    const iconCode = '01d'
    const size = '2x'
    const wrapper = mount(WeatherIcon, {
      props: { iconCode, size }
    })
    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe(`https://openweathermap.org/img/wn/${iconCode}@${size}.png`)
  })
})
