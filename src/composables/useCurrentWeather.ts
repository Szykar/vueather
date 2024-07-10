import { ref, readonly } from 'vue'
import type { WeatherDataModel } from '@/services/models/WeatherDataModel'

const currentWeather = ref<WeatherDataModel | null>(null)

export function useCurrentWeather() {
  function setWeather(newWeather: WeatherDataModel) {
    currentWeather.value = newWeather
  }

  return {
    currentWeather: readonly(currentWeather),
    setWeather
  }
}
