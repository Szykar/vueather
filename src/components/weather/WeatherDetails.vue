<template>
  <div class="weather-details">
    <WeatherDetailsItem :name="T.FEELS_LIKE" :value="formatTemperature(weather.getFeelsLike())" />
    <WeatherDetailsItem :name="T.PRESSURE" :value="formatPressure(weather.getPressure())" />
    <WeatherDetailsItem :name="T.HUMIDITY" :value="formatHumidity(weather.getHumidity())" />
    <WeatherDetailsItem :name="T.WIND" :value="formatWind(weather.wind.speed)">
      <div class="wind-icon-container">
        <icon-arrow :angle="weather.wind.deg - 180" />
      </div>
      {{ formatWind(weather.wind.speed) }}
    </WeatherDetailsItem>
    <WeatherDetailsItem :name="T.SUNRISE" :value="formatTime(weather.sunrise, weather.timezone)" />
    <WeatherDetailsItem :name="T.SUNSET" :value="formatTime(weather.sunset, weather.timezone)" />
  </div>
</template>

<script setup lang="ts">
import { WeatherDataModel } from '@/services/models/WeatherDataModel'
import { defineProps } from 'vue'
import WeatherDetailsItem from '@/components/weather/WeatherDetailsItem.vue'
import {
  formatHumidity,
  formatPressure,
  formatTemperature,
  formatTime,
  formatWind
} from './utils/formatters'
import { T } from '@/i18n'
import IconArrow from '@/components/ui/icons/IconArrow.vue'

interface Props {
  weather: WeatherDataModel
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.weather-details {
  font-size: 20px;
  padding: 12px 32px;
}

.wind-icon-container {
  position: relative;
  display: inline-block;
  width: 25px;
  .arrow-icon {
    width: 50px;
    height: 50px;
    position: absolute;
    left: -10px;
    top: -32px;
  }
}
</style>
