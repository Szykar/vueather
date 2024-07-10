<template>
  <img :src="src" />
</template>

<script setup lang="ts">
const props = defineProps({
  iconCode: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: '4x'
  }
})

const src = `https://openweathermap.org/img/wn/${props.iconCode}@${props.size}.png`
</script>
