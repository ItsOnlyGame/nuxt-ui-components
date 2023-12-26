<template>
  <h2 :class="headingTV({ size: props.size, class: props.class, color: props.color })">
    <slot />
  </h2>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const headingTV = tv({
  base: 'w-max font-bold',
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
      primary: 'text-primary-900',
      white: 'text-white'
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'primary'
  }
})

type HeadingProps = VariantProps<typeof headingTV>
type Props = {
  size?: HeadingProps['size'],
  color?: HeadingProps['color'],
  class?: string
}

const props = defineProps<Props>()
</script>
