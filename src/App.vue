<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useCurrentWeather } from '@/composables/useCurrentWeather'
import { computed } from 'vue'

const weather = useCurrentWeather()

const weatherAppBg = computed(() => weather.currentWeather.value?.getWeatherCondition())
</script>

<template>
  <div :class="['weather-app', weatherAppBg]">
    <RouterView />
  </div>
</template>

<style scoped>
.weather-app {
  transition: background 1s ease;
  padding: 2rem;
  height: 100vh;
}

.weather-app.thunderstorm {
  background: linear-gradient(to bottom, #1a1a1a, #4d4d4d, #666666);
}

.weather-app.drizzle {
  background: linear-gradient(to bottom, #a5a5a5, #b3b3b3, #c2c2c2);
}

.weather-app.rain {
  background: linear-gradient(to bottom, #4b5d67, #7b8d93, #a9b9c0);
}

.weather-app.snow {
  background: linear-gradient(to bottom, #e6e6e6, #f2f2f2, #ffffff);
}

.weather-app.atmosphere {
  background: linear-gradient(to bottom, #b3b3b3, #cccccc, #e6e6e6);
}

.weather-app.clear {
  background: linear-gradient(to bottom, #4a90e2, #87ceeb, #b7e9f7);
}

.weather-app.clouds {
  background: linear-gradient(to bottom, #307bd2, #227090, #678f9b);
}
</style>
