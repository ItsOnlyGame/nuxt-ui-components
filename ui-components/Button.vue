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
  base: 'inline-flex flex-row items-center gap-x-2 whitespace-nowrap rounded text-primary-950 transition-colors',
  variants: {
    variant: {
      solid: 'bg-primary-400 hover:bg-primary-500 active:bg-primary-400',
      ghost: 'bg-transparent hover:bg-primary-300/80 active:bg-primary-400',
      soft: 'bg-primary-500/40 hover:bg-primary-500 active:bg-primary-400'
    },
    size: {
      xs: 'px-2 py-1 text-sm font-normal',
      sm: 'px-3 py-1.5 text-sm font-medium',
      md: 'text-md px-4 py-1.5 font-medium',
      lg: 'px-4 py-2 text-xl font-medium',
      xl: 'px-4 py-2 text-2xl font-medium'
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
