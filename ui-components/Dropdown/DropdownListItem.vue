<template>
  <button
    type="button"
    :class="dropdownListItemTV({ size: props.size, color: props.color, class: props.class })"
    @click="(e) => $emit('click', e)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const dropdownListItemTV = tv({
  base: 'flex items-start justify-start transition-colors duration-300',
  variants: {
    size: {
      sm: 'gap-2 p-1.5 px-5',
      md: 'gap-2 p-2 px-5',
      lg: 'gap-2 p-2.5 px-5'
    },
    color: {
      primary: 'text-primary-700 hover:bg-primary-100 focus:bg-primary-100'
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'primary'
  }
})

type DropdownListItemProps = VariantProps<typeof dropdownListItemTV>
type Props = {
  size?: DropdownListItemProps['size']
  color?: DropdownListItemProps['color']
  class?: string
}

defineEmits(['click'])
const props = defineProps<Props>()
</script>
