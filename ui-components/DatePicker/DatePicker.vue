<template>
  <div :class="base()" v-click-outside="() => (isOpen = false)">
    <button :class="button()" @click="() => (isOpen = !isOpen)">
      <span>{{ currentDateString }}</span>
      <Icon name="ion:calendar-outline" :class="calendarIcon()" />
    </button>

    <label v-if="label" :for="$props.id" :class="label()">
      {{ $props.label }}
    </label>

    <div v-show="isOpen" :class="calendarDropdown()">
      <Calendar
        :size="$props.size"
        :variant="$props.variant"
        :value="$props.modelValue"
        @input="(value) => emit('update:modelValue', value)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const datePickerTV = tv({
  slots: {
    base: 'relative inline-flex flex-col',
    button: 'peer flex flex-row items-center justify-between rounded border-2 transition-colors',
    label: 'absolute z-[1] rounded transition-all',
    calendarIcon: 'h-5 w-5',
    calendarDropdown: 'absolute top-full z-20 mt-1 flex w-max flex-col rounded shadow shadow-slate-500/30'
  },
  variants: {
    variant: {
      default: {
        label: 'bg-body-light text-primary-500 peer-focus:text-primary-700 peer-disabled:text-stone-400',
        button:
          'border-primary-500 text-primary-900 hover:bg-primary-500 focus:border-primary-700 disabled:border-stone-400 disabled:bg-transparent',
        calendarIcon: 'text-primary-900'
      }
    },
    size: {
      sm: {
        base: 'mt-4',
        button: 'min-w-60 px-3.5 py-1 text-sm',
        label: '-top-2 left-2.5 px-2 text-xs peer-hover:-top-4'
      },
      md: {
        base: 'mt-5',
        button: 'min-w-60 px-4 py-2 text-sm',
        label: '-top-2.5 left-3 px-2 py-0 text-sm peer-hover:-top-5'
      },
      lg: {
        base: 'mt-5',
        button: 'text-md min-w-60 px-4 py-2',
        label: '-top-2.5 left-3 px-2 text-sm peer-hover:-top-5'
      }
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

  label?: string

  modelValue?: string | null
  id: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'default'
})

const emit = defineEmits(['update:modelValue'])

const { base, button, label, calendarIcon, calendarDropdown } = datePickerTV({
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
