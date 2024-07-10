<template>
  <div class="weather-view">
    <nav>
      <div>
        <WeatherSearch v-model="location" @submit="onSubmit" />
      </div>
    </nav>
    <main>
      <Transition name="fade">
        <div v-if="error.length" class="error-message absolutely-centered">Error: {{ error }}</div>
        <div v-else-if="loading" class="spinner-wrapper absolutely-centered">
          <SimpleSpinner :size="100" color="#8b1462" />
        </div>
        <CurrentWeather v-else-if="weatherDataModel" :weather="weatherDataModel" />
      </Transition>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import weatherService from '@/services/weatherService'
import { WeatherDataModel } from '@/services/models/WeatherDataModel'
import { useRoute, useRouter } from 'vue-router'
import { useCurrentWeather } from '@/composables/useCurrentWeather'
import WeatherSearch from '@/components/weather/WeatherSearch.vue'
import CurrentWeather from '@/components/weather/CurrentWeather.vue'
import SimpleSpinner from '@/components/ui/SimpleSpinner.vue'

const router = useRouter()
const route = useRoute()

const weather = useCurrentWeather()

const loading = ref(false)
const error = ref('')
const location = ref('')

const weatherDataModel = ref<WeatherDataModel | null>(null)

function onSubmit() {
  router.push({ name: 'weather', params: { location: location.value } })
}

async function loadWeather(location: string) {
  loading.value = true
  error.value = ''
  try {
    const response = await weatherService.getWeather(location)
    weather.setWeather(response)
    weatherDataModel.value = response
  } catch (e: any) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}

watch(
  () => route.params.location as string,
  async (newLocation) => {
    if (newLocation) {
      location.value = newLocation
      await loadWeather(newLocation)
    }
  }
)

if (route.params.location) {
  const newLocation = route.params.location as string
  location.value = newLocation
  loadWeather(newLocation)
}
</script>

<style scoped>
.absolutely-centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.error-message {
  font-size: 20px;
  color: #da3636;
  font-weight: 600;
}
.spinner-wrapper {
  display: flex;
  justify-content: space-around;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
