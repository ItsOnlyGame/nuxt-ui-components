<template>
  <div :class="toast()" role="alert">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :class="icon()"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.5"
      role="graphics-symbol"
    >
      <path
        v-if="$props.variant == 'default'"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />

      <path
        v-if="$props.variant == 'success'"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
      <path
        v-if="$props.variant == 'warn'"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />

      <path
        v-if="$props.variant == 'info'"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />

      <path
        v-if="$props.variant == 'error'"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <div class="flex flex-col">
      <h3 :class="title()">{{ $props.title }}</h3>
      <p :class="description()">{{ $props.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { tv, type VariantProps } from 'tailwind-variants'

const toastTV = tv({
  slots: {
    toast: 'flex w-full flex-row items-center gap-4 rounded border',
    icon: '',
    title: 'mb-1 font-semibold',
    description: 'text-sm'
  },
  variants: {
    variant: {
      default: {
        toast: 'border-primary-950 bg-primary-900 text-primary-200'
      },
      success: {
        toast: 'border-emerald-100 bg-emerald-50 text-emerald-500'
      },
      info: {
        toast: 'border-cyan-100 bg-cyan-50 text-cyan-500'
      },
      error: {
        toast: 'border-red-200 bg-pink-100 text-red-500'
      },
      warn: {
        toast: 'border-amber-100 bg-amber-50 text-amber-500'
      }
    },
    size: {
      sm: {
        toast: 'px-3 py-2',
        icon: 'h-5 w-5'
      },
      md: {
        toast: 'px-4 py-3',
        icon: 'h-5. w-5'
      },
      lg: {
        toast: 'px-5 py-4',
        icon: 'h-6 w-6'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'default'
  }
})

type ToastProps = VariantProps<typeof toastTV>
type Props = {
  // Customization props
  size?: ToastProps['size']
  variant?: ToastProps['variant']

  title?: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
})

const { toast, icon, title, description } = toastTV({
  size: props.size,
  variant: props.variant
})
</script>
