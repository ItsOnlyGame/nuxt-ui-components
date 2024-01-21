<template>
  <button
    type="button"
    :class="buttonTV({ size: props.size, variant: props.variant, class: props.class })"
    @click="(e) => $emit('click', e)"
  >
    <LeftArrowIcon v-if="$props.quickIcon == 'left-arrow'" />
    <CircleFilledIcon v-if="$props.quickIcon == 'center'" />
    <RightArrowIcon v-if="$props.quickIcon == 'right-arrow'" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const buttonTV = tv({
  base: 'inline-flex flex-row items-center justify-center whitespace-nowrap rounded-lg text-sm text-primary-900 transition-colors',
  variants: {
    variant: {
      solid: 'bg-transparent hover:bg-primary-600 active:bg-primary-700',
      hidden: 'pointer-events-none bg-transparent hover:bg-transparent'
    },
    size: {
      sm: '',
      md: 'h-7 w-7 p-1',
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

  quickIcon: 'left-arrow' | 'center' | 'right-arrow'

  class?: string
}

defineEmits(['click'])
const props = defineProps<Props>()
</script>
