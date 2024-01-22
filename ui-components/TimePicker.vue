<template>
  <div :class="base()">
    <input
      type="text"
      :class="input()"
      @input="inputEvent"
      v-model="hoursValue"
      @keydown="handleKeyboardInput"
      maxlength="2"
      ref="hoursInputRef"
    />
    <input
      type="text"
      :class="input()"
      @input="inputEvent"
      v-model="minutesValue"
      @keydown="handleKeyboardInput"
      maxlength="2"
      ref="minutesInputRef"
    />

    <label :class="label()">
      {{ $props.label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
const timePickerTV = tv({
  slots: {
    base: 'relative flex h-max select-none flex-row items-start justify-center rounded border-2',
    label: 'absolute z-[1] transition-all',
    input: 'rounded text-center outline-none'
  },
  variants: {
    variant: {
      default: {
        base: 'border-primary-500 text-primary-950 focus:border-primary-600 disabled:border-stone-400 disabled:bg-transparent',
        label: 'bg-body-light text-primary-500 peer-focus:text-primary-600 peer-disabled:text-stone-400',
        input: 'bg-primary-200 focus:bg-primary-400'
      }
    },
    size: {
      sm: {
        base: 'gap-2 p-1 pt-2',
        label: '-top-2 left-3.5 px-1.5 text-xs',
        input: 'text-md h-8 w-12'
      },
      md: {
        base: 'gap-2 p-1 pt-2',
        label: '-top-3 left-3.5 px-1.5 text-sm',
        input: 'h-9 w-16 text-lg'
      },
      lg: {
        base: 'gap-2 p-1 pt-3',
        label: 'text-md -top-3 left-3.5 px-2',
        input: 'h-10 w-16 text-lg'
      }
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})

type TimerPickerProps = VariantProps<typeof timePickerTV>
type Props = {
  // Customization props
  variant?: TimerPickerProps['variant']
  size?: TimerPickerProps['size']

  label?: string
  value?: string
}

const emit = defineEmits(['update:modelValue'])
const props = defineProps<Props>()

const { base, label, input } = timePickerTV({
  size: props.size,
  variant: props.variant
})

const hoursValue = ref(props.value ? props.value.split(':')[0] : '')
const minutesValue = ref(props.value ? props.value.split(':')[1] : '')

const hoursInputRef = ref<HTMLInputElement | null>(null)
const minutesInputRef = ref<HTMLInputElement | null>(null)

const inputEvent = (event: Event) => {
  validateInput(event)

  const hours = hoursInputRef.value?.value.padStart(2, '0')
  const minutes = minutesInputRef.value?.value.padStart(2, '0')

  emit('update:modelValue', `${hours}:${minutes}`)
}

// Validates input to only allow numbers and handles focus logic on the inputs.
const validateInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (!/^\d*$/.test(target.value)) {
    target.value = target.value.replace(/[^0-9]/g, '')
  }

  if (event.target === hoursInputRef.value && target.value.length === 2) {
    minutesInputRef.value?.focus()
  }

  if (event.target === minutesInputRef.value && target.value.length === 0) {
    hoursInputRef.value?.focus()
  }
}

// Handles backspace on empty minutes input.
const handleKeyboardInput = (event: KeyboardEvent) => {
  const target = event.target as HTMLInputElement
  if (event.key === 'Backspace' && event.target === minutesInputRef.value && target.value === '') {
    hoursInputRef.value?.focus()
    event.preventDefault()
  }

  if (event.key == 'ArrowLeft' && target == minutesInputRef.value && target.selectionStart == 0) {
    hoursInputRef.value?.focus()
    hoursInputRef.value?.setSelectionRange(hoursInputRef.value?.value.length, hoursInputRef.value?.value.length)
    event.preventDefault()
  }

  if (event.key == 'ArrowRight' && target == hoursInputRef.value && target.selectionStart == target.value.length) {
    minutesInputRef.value?.focus()
    minutesInputRef.value?.setSelectionRange(minutesInputRef.value?.value.length, minutesInputRef.value?.value.length)
    event.preventDefault()
  }
}
</script>
