<template>
  <div :class="base()" v-click-outside="() => (isOpen = false)">
    <button type="button" :class="button()" @click="() => (isOpen = !isOpen)">
      <span>{{ props.label }}</span>
      <Icon name="solar:alt-arrow-down-bold" :class="icon()" />
    </button>
    <div v-show="isOpen" :class="content()">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * NOTICE: This component uses a plugins called 'vue-click-outside' to detect clicks outside the component.
 * This is required to automatically close the dropdown, when clicked outside the component.
 *
 * Check the plugins folder
 */

import { tv, type VariantProps } from 'tailwind-variants'
const dropdownTV = tv({
  slots: {
    base: 'relative inline-flex',
    iconContainer: '',
    button:
      'inline-flex flex-row items-center gap-x-2 whitespace-nowrap rounded font-semibold text-primary-950 transition-colors',
    icon: 'relative only:-mx-5',
    content: 'absolute top-full z-20'
  },
  variants: {
    variant: {
      list: {
        button: 'bg-primary-400 hover:bg-primary-500',
        content: 'flex flex-col rounded bg-white py-2 shadow-md shadow-slate-500/10'
      },
      block: {
        button: 'bg-primary-400 hover:bg-primary-500',
        content: 'flex flex-col rounded bg-white p-2 shadow-md shadow-slate-500/10'
      }
    },
    size: {
      sm: {
        icon: 'h-5 w-5',
        content: 'mt-1 w-64',
        button: 'text-md px-3 py-1'
      },
      md: {
        icon: 'h-5 w-5',
        content: 'mt-1 w-72',
        button: 'text-md px-3 py-2'
      },
      lg: {
        icon: 'h-5 w-5',
        content: 'mt-1 w-80',
        button: 'text-md px-4 py-2'
      }
    }
  },
  defaultVariants: {
    variant: 'list',
    size: 'md'
  }
})

type DropdownProps = VariantProps<typeof dropdownTV>
type Props = {
  // Customization props
  variant?: DropdownProps['variant']
  size?: DropdownProps['size']
  class?: string

  label: string
}

const props = defineProps<Props>()

const { base, iconContainer, button, icon, content } = dropdownTV({
  variant: props.variant,
  size: props.size
})

const isOpen = ref(false)
</script>
