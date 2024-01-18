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
  base: 'inline-flex flex-row items-center justify-center whitespace-nowrap rounded-full font-semibold text-primary-950 transition-colors',
  variants: {
    variant: {
      solid: 'bg-primary-400 hover:bg-primary-500 active:bg-primary-400',
      hidden: 'bg-transparent hover:bg-transparent pointer-events-none'
    },
    size: {
      sm: 'text-md h-7 w-7 p-1',
      md: 'text-md h-8 w-8 p-1.5',
      lg: 'text-md h-10 w-10 p-2',
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
