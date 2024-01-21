<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :class="base({ class: $props.class })">
    <circle cx="12" cy="12" r="10" class="stroke-slate-200" stroke-width="4" />
    <path
      d="M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2"
      :class="loading()"
      stroke-width="4"
    />
  </svg>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const spinnerTV = tv({
  slots: {
    base: 'animate animate-spin',
    loading: ''
  },
  variants: {
    size: {
      xs: {
        base: 'h-7 w-7'
      },
      sm: {
        base: 'h-8 w-8'
      },
      md: {
        base: 'h-9 w-9'
      },
      lg: {
        base: 'h-10 w-10'
      }
    },
    color: {
      primary: {
        loading: 'stroke-primary-500'
      },
      emerald: {
        loading: 'stroke-emerald-500'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'primary'
  }
})

type SpinnerProps = VariantProps<typeof spinnerTV>
type Props = {
  size?: SpinnerProps['size']
  color?: SpinnerProps['color']
  class?: string
}

const props = defineProps<Props>()
const { base, loading } = spinnerTV({ color: props.color, size: props.size })
</script>
