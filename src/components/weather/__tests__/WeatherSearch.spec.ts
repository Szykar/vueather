import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WeatherSearch from './../WeatherSearch.vue'
import { T } from '@/i18n'

describe('WeatherSearch', () => {
  it('renders the form with input and button', () => {
    const wrapper = mount(WeatherSearch)
    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('displays correct placeholder and button text', () => {
    const wrapper = mount(WeatherSearch)
    expect(wrapper.find('input').attributes('placeholder')).toBe(T.LOCATION_PLACEHOLDER)
    expect(wrapper.find('button').text()).toBe(T.SEARCH)
  })

  it('emits submit event when form is submitted', async () => {
    const wrapper = mount(WeatherSearch)
    await wrapper.find('form').trigger('submit')
    expect(wrapper.emitted('submit')).toBeTruthy()
    expect(wrapper.emitted('submit')).toHaveLength(1)
  })
})
