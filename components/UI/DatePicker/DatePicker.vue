<template>
  <div :class="base()" v-click-outside="() => (isOpen = false)">
    <button :class="button()" @click="() => (isOpen = !isOpen)">
      <span>{{ currentDateString }}</span>
      <Icon name="ion:calendar-outline" :class="calendarIcon()" />
    </button>

    <div v-show="isOpen" :class="calendarDropdown()">
      <Calendar :value="$props.modelValue" @input="(value) => emit('update:modelValue', value)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const datePickerTV = tv({
  slots: {
    base: 'relative inline-flex',
    button:
      'flex min-w-60 flex-row items-center justify-between rounded border-2 px-4 py-1.5 text-sm transition-colors',
    calendarIcon: 'h-5 w-5 text-inherit',
    calendarDropdown: 'absolute top-full z-20 mt-1 flex w-max flex-col rounded shadow shadow-slate-500/30'
  },
  variants: {
    variant: {
      default: {
        base: '',
        button:
          'border-primary-500 text-primary-900 hover:bg-primary-500 focus:border-primary-700 disabled:border-stone-400 disabled:bg-transparent'
      }
    },
    size: {
      sm: {},
      md: {},
      lg: {}
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'default'
  }
})

type CheckboxProps = VariantProps<typeof datePickerTV>
type Props = {
  // Customization props
  size?: CheckboxProps['size']
  variant?: CheckboxProps['variant']

  modelValue?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'default'
})

const emit = defineEmits(['update:modelValue'])

const { base, button, calendarIcon, calendarDropdown } = datePickerTV({
  size: props.size,
  variant: props.variant
})

const isOpen = ref(false)

const currentDateString = computed(() => {
  if (!props.modelValue) {
    return 'Pick a date'
  }

  const year = Number(props.modelValue?.split('-')[0])
  const month = Number(props.modelValue?.split('-')[1])
  const day = Number(props.modelValue?.split('-')[2])

  const date = new Date(year, month, day)
  return date.toLocaleDateString('default', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>
