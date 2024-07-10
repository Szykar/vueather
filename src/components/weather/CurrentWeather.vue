<template>
  <div class="current-weather">
    <WeatherHeader :weather="weather" />
    <WeatherDetails :weather="weather" />
  </div>
</template>

<script setup lang="ts">
import { WeatherDataModel } from '@/services/models/WeatherDataModel'
import { defineProps } from 'vue'
import WeatherHeader from '@/components/weather/WeatherHeader.vue'
import WeatherDetails from '@/components/weather/WeatherDetails.vue'

interface Props {
  weather: WeatherDataModel
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.current-weather {
  margin-top: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 900px) {
    flex-direction: row;
  }
}
</style>
