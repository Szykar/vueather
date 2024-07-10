<template>
  <div class="weather-header">
    <WeatherIcon class="weather-header__icon" :icon-code="weather.getIconCode()" />
    <div class="weather-header__desc"></div>
    <div class="weather-header__temp">{{ formatTemperature(weather.getTemperature()) }}</div>
    <div class="weather-header__desc">{{ weather.getWeatherDescription() }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { formatTemperature } from './utils/formatters'
import { WeatherDataModel } from '@/services/models/WeatherDataModel'
import WeatherIcon from '@/components/weather/WeatherIcon.vue'

interface Props {
  weather: WeatherDataModel
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.weather-header {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 10px;

  &__icon {
    margin: -50px -14px -40px -14px;
  }

  &__temp {
    font-size: 80px;
    line-height: 76px;
    font-weight: 700;
    color: #fff;
    text-shadow:
      2px 2px 4px rgba(0, 0, 0, 0.5),
      -2px -2px 4px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }

  &__desc {
    font-size: 20px;
    color: #fff;
    text-shadow:
      1px 1px 3px rgba(0, 0, 0, 0.5),
      -1px -1px 3px rgba(255, 255, 255, 0.5);
    margin-top: 4px;
  }
}
</style>
