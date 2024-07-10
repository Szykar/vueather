<template>
  <div class="weather-details__item">
    <div class="item__name">
      {{ name }}
    </div>
    <div class="item__value">
      <slot>{{ value }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['name', 'value'])
</script>

<style scoped lang="scss">
.weather-details__item {
  min-width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 3px 16px 3px 16px;
  margin: 6px 0;
  border-radius: 15px;
  border-bottom: 1px solid rgba(24, 35, 80, 0.34);
  color: #fff;
  background: rgba(34, 34, 34, 0.5);
}
</style>
