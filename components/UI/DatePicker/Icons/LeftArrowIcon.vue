<template>
  <svg xmlns="http://www.w3.org/2000/svg" :class="twMerge('h-7 w-7', $props.class)" viewBox="0 0 1024 1024">
    <!-- https://github.com/element-plus/element-plus-icons  -->
    <!-- https://icon-sets.iconify.design/ep/arrow-left-bold/  -->
    <rect x="0" y="0" width="1024" height="1024" fill="none" stroke="none" />
    <path
      fill="currentColor"
      d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0"
    />
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
