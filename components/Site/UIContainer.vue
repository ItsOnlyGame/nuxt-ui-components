<template>
  <div :class="twMerge('flex w-full flex-col items-start gap-8 bg-stone-100 p-8', $props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

defineProps({
  class: {
    type: [String],
    required: false,
    default: ''
  }
})
</script>
