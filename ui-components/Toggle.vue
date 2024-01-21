<template>
  <div class="relative flex flex-wrap items-center">
    <input
      :class="toggle()"
      type="checkbox"
      :id="$props.id"
      :value="modelValue"
      @input="emitUpdate"
      :disabled="disabled"
    />
    <label :class="label()" :for="$props.id">
      {{ props.helper }}
    </label>
    <small :class="small()">
      <span>{{ $props.helper }}</span>
    </small>
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const toggleTV = tv({
  slots: {
    base: 'relative flex flex-wrap items-center',
    toggle:
      'peer relative cursor-pointer appearance-none transition-colors after:absolute after:left-0 after:top-0 after:rounded-full after:transition-all focus:outline-none focus-visible:outline-none',
    label: 'cursor-pointer peer-disabled:cursor-not-allowed',
    small: 'w-full transition',
    svg: 'pointer-events-none absolute transition-all duration-300 peer-disabled:cursor-not-allowed'
  },
  variants: {
    variant: {
      default: {
        toggle:
          'rounded-full bg-slate-300 after:bg-slate-500 checked:bg-primary-300 checked:after:bg-primary-500 hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-primary-300 checked:after:hover:bg-primary-600 disabled:bg-slate-200 disabled:after:bg-slate-300',
        label: 'text-black peer-disabled:text-slate-500',
        small: 'text-slate-500 peer-invalid:text-red-500',
        svg: '-rotate-90 fill-white stroke-white opacity-0 peer-checked:rotate-0 peer-checked:opacity-100'
      }
    },
    size: {
      sm: {
        toggle: 'h-3.5 w-7 after:h-3.5 after:w-3.5 checked:after:left-3.5',
        label: 'pl-2 text-sm',
        small: 'py-0.5 pl-9 text-xs',
        svg: 'left-0 top-1 h-3.5 w-3.5'
      },
      md: {
        toggle: 'h-4 w-8 after:h-4 after:w-4 checked:after:left-4',
        label: 'text-md pl-2',
        small: 'py-0.5 pl-10 text-xs',
        svg: 'left-0 top-1 h-4 w-4'
      },
      lg: {
        toggle: 'h-5 w-10 after:h-5 after:w-5 checked:after:left-5',
        label: 'pl-2 text-lg',
        small: 'py-0.5 pl-12 text-xs',
        svg: 'left-0 top-1 h-5 w-5'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'default'
  }
})

type ToggleProps = VariantProps<typeof toggleTV>
type Props = {
  // Customization props
  size?: ToggleProps['size']
  variant?: ToggleProps['variant']

  // Label and helper text props
  helper?: string
  label?: string

  // Toggle props
  id: string
  modelValue?: boolean
  disabled?: boolean
}

const emit = defineEmits(['update:modelValue'])
const emitUpdate = (event: Event) => {
  const inputElement = event.target as HTMLInputElement
  emit('update:modelValue', inputElement.checked)
}

const props = defineProps<Props>()


const { base, toggle, small, label, svg } = toggleTV({
  size: props.size,
  variant: props.variant
})
</script>
