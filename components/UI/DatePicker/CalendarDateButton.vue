<template>
  <button
    type="button"
    :class="buttonTV({ size: props.size, variant: props.variant, class: props.class })"
    @click="(e) => $emit('click', e)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const buttonTV = tv({
  base: 'inline-flex flex-row items-center justify-center whitespace-nowrap rounded-lg text-sm text-primary-950 transition-colors',
  variants: {
    variant: {
      solid: 'bg-transparent hover:bg-primary-600 active:bg-primary-700',
      hidden: 'pointer-events-none bg-transparent hover:bg-transparent',
      selected: 'bg-primary-800 text-primary-50'
    },
    size: {
      sm: '',
      md: 'h-9 w-9 p-2',
      lg: ''
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'solid'
  }
})

type ButtonVariants = VariantProps<typeof buttonTV>
type Props = {
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
  class?: string
}

defineEmits(['click'])
const props = defineProps<Props>()
</script>
