<template>
  <div :class="base()">
    <select
      :id="selectId"
      :name="selectId"
      :required="props.required"
      :class="select()"
      :value="props.modelValue"
      @input="emitUpdate"
      :disabled="disabled"
    >
      <slot />
    </select>
    <label :for="selectId" :class="label()">
      {{ props.label }}
    </label>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :class="svg()"
      viewBox="0 0 20 20"
      fill="currentColor"
      role="graphics-symbol"
    >
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
const selectTV = tv({
  slots: {
    base: 'relative my-6 md:w-60',
    select: 'peer relative w-full appearance-none outline-none transition-all disabled:cursor-not-allowed',
    label: 'absolute z-[1] transition-all',
    svg: 'pointer-events-none absolute right-2 top-3.5 h-5 w-5 transition-all peer-disabled:cursor-not-allowed'
  },
  variants: {
    variant: {
      default: {
        label:
          'bg-body-light text-primary-500 peer-invalid:text-red-500 peer-focus:text-primary-800 peer-disabled:text-stone-400',
        select:
          'rounded border-2 border-primary-500 text-primary-950 placeholder-transparent invalid:border-red-500 focus:border-primary-700 disabled:border-stone-400 disabled:bg-transparent',
        svg: 'text-primary-400 peer-focus:text-primary-800'
      }
    },
    size: {
      sm: {
        label: '-top-2 left-3.5 px-1.5 text-xs',
        select: 'h-10 px-4'
      },
      md: {
        label: '-top-2 left-3 px-1.5 text-sm',
        select: 'h-12 px-4'
      },
      lg: {
        label: 'text-md -top-3 left-3.5 px-2',
        select: 'h-14 px-5 text-lg'
      }
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})

type SelectProps = VariantProps<typeof selectTV>
type Props = {
  // Customization props
  variant?: SelectProps['variant']
  size?: SelectProps['size']
  class?: string

  // Label and helper text props
  helper?: string
  label?: string

  // Select props
  modelValue?: string
  disabled?: boolean
  required?: boolean
}

const emit = defineEmits(['update:modelValue'])
const emitUpdate = (event: Event) => {
  const selectElement = event.target as HTMLSelectElement
  emit('update:modelValue', selectElement.value)
}

const props = defineProps<Props>()

const selectId = crypto.randomUUID()

const { base, select, svg, label } = selectTV({
  size: props.size,
  variant: props.variant
})
</script>
