<template>
  <svg
    class="arrow-icon"
    viewBox="0 0 100 100"
    :transform="`rotate(${props.angle})`"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="windGust" transform="translate(50,50)">
      <line id="arrow" x1="0" y1="20" x2="0" y2="-20" stroke="red" stroke-width="5" />
      <path id="arrowhead" d="M-5,-15 L0,-20 L5,-15" fill="none" stroke="red" stroke-width="5" />
    </g>
  </svg>
</template>

<script setup lang="ts">
type PropsType = {
  angle: number
}
const props = defineProps<PropsType>()
</script>
