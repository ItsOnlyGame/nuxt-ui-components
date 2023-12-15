<template>
  <div :class="base()">
    <input
      :id="inputId"
      type="text"
      :placeholder="props.label"
      :disabled="props.disabled"
      :class="input()"
      :value="modelValue"
      @input="emitUpdate"
      pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
    />
    <label :for="inputId" :class="label()">
      {{ props.label }}
    </label>
    <small :class="small()">
      <span>{{ props.helper }}</span>
    </small>
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
const inputVariants = tv({
  slots: {
    base: 'relative flex flex-col',
    input: 'peer relative w-full outline-none transition-all disabled:cursor-not-allowed',
    label: 'absolute z-[1] transition-all',
    small: 'flex w-full justify-between transition-all',
  },
  variants: {
    variant: {
      default: {
        label: 'bg-body-light text-primary-500 peer-invalid:text-red-500 peer-focus:text-primary-800',
        input: 'rounded border-2 border-primary-500 text-primary-950 placeholder-transparent focus:border-primary-700 invalid:border-red-500',
        small: 'text-primary-500 peer-invalid:text-red-500 peer-focus:text-primary-800',
      },
    },
    size: {
      sm: {
        label: '-top-2 left-3.5 px-1.5 text-xs',
        input: 'h-10 px-4',
        small: 'px-2 py-1 text-xs',
      },
      md: {
        label: '-top-2 left-3 px-1.5 text-sm',
        input: 'h-12 px-4',
        small: 'px-2 py-1 text-xs',
      },
      lg: {
        label: 'text-md -top-3 left-3.5 px-2',
        input: 'h-14 px-5 text-lg',
        small: 'px-2 py-1 text-xs',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

type InputVariants = VariantProps<typeof inputVariants>
type Props = {
  variant?: InputVariants['variant']
  size?: InputVariants['size']
  class?: string
  helper?: string
  label?: string
  disabled?: boolean
  modelValue?: string
}

const emit = defineEmits(['update:modelValue'])
const emitUpdate = (event: Event) => {
  const inputElement = event.target as HTMLInputElement
  emit('update:modelValue', inputElement.value)
}

const props = defineProps<Props>()

const inputId = crypto.randomUUID()

const { base, input, small, label } = inputVariants({
  size: props.size,
  variant: props.variant,
})
</script>
