<template>
  <section :class="accordionTV({ variant: props.variant, class: props.class })">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const accordionTV = tv({
  base: 'w-full',
  variants: {
    variant: {
      default: 'divide-y divide-slate-200 rounded',
      outline: 'divide-y divide-slate-200 rounded border border-slate-200 bg-white',
      elevated: 'divide-y divide-slate-200 rounded bg-white shadow-md shadow-slate-200'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

type AccordionProps = VariantProps<typeof accordionTV>
type Props = {
  variant?: AccordionProps['variant']
  class?: string
}
const props = defineProps<Props>()
</script>
