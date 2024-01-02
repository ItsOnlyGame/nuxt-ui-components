<template>
  <details :class="base()">
    <summary :class="label()">
      {{ props.label }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :class="svg()"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </summary>
    <div :class="content()">
      <slot />
    </div>
  </details>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
const accordionItemTV = tv({
  slots: {
    base: 'group w-full',
    label:
      'relative cursor-pointer list-none transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden select-none',
    svg: 'absolute shrink-0 transition duration-300 group-open:rotate-45',
    content: ''
  },
  variants: {
    variant: {
      default: {
        label: 'text-slate-700 group-hover:text-slate-900',
        svg: 'text-slate-700 group-hover:text-slate-800',
        content: 'text-slate-700'
      }
    },
    size: {
      sm: {
        base: 'p-4',
        label: 'pr-8 font-medium',
        svg: 'right-0 top-1 h-4 w-4',
        content: 'mt-2'
      },
      md: {
        base: 'p-4',
        label: 'pr-8 font-medium',
        svg: 'right-0 top-1 h-4 w-4',
        content: 'mt-3'
      },
      lg: {
        base: 'p-4',
        label: 'pr-8 font-medium',
        svg: 'right-0 top-1 h-4 w-4',
        content: 'mt-4'
      }
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})

type AccordionItemProps = VariantProps<typeof accordionItemTV>
type Props = {
  // Customization props
  variant?: AccordionItemProps['variant']
  class?: string

  label: string
}

const props = defineProps<Props>()

const { base, svg, label, content } = accordionItemTV({
  variant: props.variant
})
</script>
