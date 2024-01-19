<template>
  <svg xmlns="http://www.w3.org/2000/svg" :class="twMerge('h-7 w-7', $props.class)" viewBox="0 0 1024 1024">
    <!-- https://github.com/ant-design/ant-design-icons  -->
    <!-- https://icon-sets.iconify.design/ant-design/clear-outlined/  -->
    <path
      fill="currentColor"
      d="m899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-.3 1.5-.4 3-.4 4.4c0 14.4 11.6 26 26 26h723c1.5 0 3-.1 4.4-.4c14.2-2.4 23.7-15.9 21.2-30M204 390h272V182h72v208h272v104H204zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260z"
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
