<template>
  <svg xmlns="http://www.w3.org/2000/svg" :class="twMerge('h-7 w-7', $props.class)" viewBox="0 0 256 256">
    <!-- https://github.com/phosphor-icons/core  -->
    <!-- https://icon-sets.iconify.design/ph/circle-fill/  -->
    <rect x="0" y="0" width="256" height="256" fill="none" stroke="none" />
    <g transform="translate(256 0) scale(-1 1)">
      <path fill="currentColor" d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104" />
    </g>
  </svg>
</template>

<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'
defineProps({
  class: {
    type: String,
    required: false,
    default: ''
  }
})
</script>
