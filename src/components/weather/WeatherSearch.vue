<template>
  <form class="weather-search" @submit.prevent="onSubmit">
    <input v-model="model" minlength="2" type="text" :placeholder="T.LOCATION_PLACEHOLDER" />
    <button type="submit">{{ T.SEARCH }}</button>
  </form>
</template>

<script setup lang="ts">
import { T } from '@/i18n'

const emit = defineEmits(['submit'])

const model = defineModel()

const onSubmit = function () {
  emit('submit')
}
</script>

<style lang="scss" scoped>
.weather-search {
  display: flex;
  align-items: end;

  input {
    background-color: transparent;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    border: none;
    border-bottom: 2px solid #4729cd;
    padding: 8px 12px;
    font-size: 36px;
    font-weight: 700;
    transition: border-color 0.3s ease;
    width: 100%;

    &:focus {
      outline: none;
      border-bottom-color: #8b1462;
    }

    &::placeholder {
      color: #e1e1e1;
    }
  }

  button {
    display: inline-block;
    margin-left: 10px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #4729cd;
    transition: background 0.3s ease;

    &:hover {
      background-color: #8b1462;
    }

    &:active {
      background-color: #620843;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(177, 52, 219, 0.5);
    }
  }
}
</style>
