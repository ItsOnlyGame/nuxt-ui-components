<template>
  <h2 :class="heading({ size: props.size, class: props.class })">
    <slot />
  </h2>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const heading = tv({
  base: 'w-max font-bold text-black dark:text-white',
  variants: {
    size: {
      xs: 'text-xl',
      sm: 'text-2xl',
      md: 'text-3xl',
      lg: 'text-4xl',
      xl: 'text-5xl'
    },
    color: {
      default: 'text-black',
      primary: 'text-primary-900'
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'primary'
  }
})

type HeadingVariants = VariantProps<typeof heading>
type Props = {
  size?: HeadingVariants['size']
  class?: string
}

const props = defineProps<Props>()
</script>
