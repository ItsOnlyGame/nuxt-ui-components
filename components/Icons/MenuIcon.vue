<template>
  <!-- https://github.com/ionic-team/ionicons -->
  <!-- https://icon-sets.iconify.design/ion/menu/ -->
  <svg xmlns="http://www.w3.org/2000/svg" :class="twMerge('h-7 w-7', $props.class)" viewBox="0 0 512 512">
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="48"
      d="M88 152h336M88 256h336M88 360h336"
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