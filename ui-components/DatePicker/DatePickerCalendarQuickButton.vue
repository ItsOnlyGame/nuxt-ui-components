<template>
  <button type="button" :class="button({ class: $props.class })" @click="(e) => $emit('click', e)">
    <Icon name="ep:arrow-left-bold" v-if="$props.quickIcon == 'left-arrow'" :class="icon()" />
    <Icon name="ph:circle-fill" v-if="$props.quickIcon == 'center'" :class="icon()" />
    <Icon name="ep:arrow-right-bold" v-if="$props.quickIcon == 'right-arrow'" :class="icon()" />
  </button>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const buttonTV = tv({
  slots: {
    button:
      'inline-flex flex-row items-center justify-center whitespace-nowrap rounded-lg text-sm text-primary-900 transition-colors',
    icon: 'h-full w-full'
  },
  variants: {
    variant: {
      solid: {
        button: 'bg-transparent hover:bg-primary-600 active:bg-primary-700'
      },
      hidden: {
        button: 'pointer-events-none bg-transparent hover:bg-transparent'
      }
    },
    size: {
      sm: {
        button: 'h-6 w-6 p-1'
      },
      md: {
        button: 'h-7 w-7 p-1'
      },
      lg: {
        button: 'h-8 w-8 p-1'
      }
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

  quickIcon: 'left-arrow' | 'center' | 'right-arrow'

  class?: string
}

defineEmits(['click'])
const props = defineProps<Props>()

const { button, icon } = buttonTV({ size: props.size, variant: props.variant })
</script>
