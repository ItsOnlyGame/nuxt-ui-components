<template>
  <div :class="base()">
    <label :class="label()">
      {{ $props.label }}
    </label>
    <div :class="timeInput()">
      <input
        type="text"
        :class="input()"
        @input="inputEvent"
        v-model="hoursValue"
        @keydown="handleKeyboardInput"
        maxlength="2"
        ref="hoursInputRef"
      />
      <p :class="seperator()">:</p>
      <input
        type="text"
        :class="input()"
        @input="inputEvent"
        v-model="minutesValue"
        @keydown="handleKeyboardInput"
        maxlength="2"
        ref="minutesInputRef"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
const timePickerTV = tv({
  slots: {
    base: 'relative flex h-max select-none flex-col items-start justify-center rounded',
    label: '',
    timeInput: 'flex flex-row items-center justify-center',
    input: 'rounded text-center outline-none',
    seperator: ''
  },
  variants: {
    variant: {
      default: {
        base: 'bg-primary-200',
        label: 'text-primary-950',
        input: 'bg-primary-100',
        seperator: ''
      }
    },
    size: {
      sm: {
        base: 'px-4 py-2',
        label: 'font-semibold',
        timeInput: 'gap-1',
        input: 'h-10 min-h-max w-10 text-xl font-semibold',
        seperator: 'mb-2 text-3xl font-semibold'
      },
      md: {
        base: 'px-4 py-2',
        label: 'font-semibold',
        timeInput: 'gap-1',
        input: 'h-12 min-h-max w-12 text-2xl font-semibold',
        seperator: 'mb-2 text-3xl font-semibold'
      },
      lg: {
        base: 'px-6 py-2 gap-1',
        label: 'font-semibold text-lg',
        timeInput: 'gap-1',
        input: 'h-14 min-h-max w-14 text-3xl font-semibold',
        seperator: 'mb-2 text-3xl font-semibold'
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

const { base, label, timeInput, input, seperator } = timePickerTV({
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
