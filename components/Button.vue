<template>
  <button
    :class="button({ size: props.size, variant: props.variant, class: props.class })"
    @click.once="(e) => $emit('click', e)"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'whitespace-nowrap rounded font-semibold text-primary-950 transition-colors active:opacity-80 dark:text-primary-50',
  variants: {
    variant: {
      solid: 'bg-primary-400 hover:bg-primary-500',
      ghost: 'bg-transparent hover:bg-primary-300 hover:bg-opacity-40',
      outline: 'bg-primary-400 bg-opacity-40 hover:bg-primary-500',
    },
    size: {
      xs: 'px-3 py-1 text-sm',
      sm: 'text-md px-3 py-1',
      md: 'text-md px-3 py-2',
      lg: 'px-4 py-2 text-xl',
      xl: 'px-4 py-2 text-2xl',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'solid',
  },
})

type ButtonVariants = VariantProps<typeof button>
type Props = {
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
  class?: string
}

const props = defineProps<Props>()
</script>
