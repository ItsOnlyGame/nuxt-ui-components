<template>
  <div :class="base()">
    <div :class="header()">
      <div :class="dateTitle()">
        <span>{{ monthString }}</span>
        <span>{{ calendarViewDate.year }}</span>
      </div>

      <div :class="buttonsContainer()">
        <DatePickerButton @click="previousCalendarMonth" :size="$props.size">
          <LeftArrowIcon :class="icon()" />
        </DatePickerButton>

        <DatePickerButton @click="setCurrentCalendar" :size="$props.size">
          <CircleFilledIcon :class="icon()" />
        </DatePickerButton>

        <DatePickerButton @click="nextCalendarMonth" :size="$props.size">
          <RightArrowIcon :class="icon()" />
        </DatePickerButton>
      </div>
    </div>

    <div :class="calendar()">
      <span :class="weekdays()" v-for="weekday in weekdayLetters" :key="weekday">
        {{ weekday }}
      </span>

      <DatePickerButton
        @click="() => setDate(day.value)"
        v-for="day in monthsDays"
        :key="day.id"
        :variant="day.value == null ? 'hidden' : 'solid'"
        :size="$props.size"
      >
        {{ day.value }}
      </DatePickerButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const datePickerTV = tv({
  slots: {
    base: 'h-max select-none rounded',
    header: 'my-2 flex flex-row items-center justify-between',
    dateTitle: 'flex flex-col',
    buttonsContainer: 'flex flex-row gap-1',
    button: '',
    icon: '',
    calendar: 'grid grid-cols-7 grid-rows-6 items-center justify-center',
    weekdays: 'text-center'
  },
  variants: {
    variant: {
      default: {
        base: 'bg-primary-200',
        header: '',
        dateTitle: 'text-primary-950',
        buttonsContainer: '',
        icon: 'text-primary-900',
        calendar: '',
        weekdays: 'text-primary-950'
      }
    },
    size: {
      sm: {
        base: 'px-4 py-2',
        header: '',
        dateTitle: 'text-lg font-bold',
        buttonsContainer: '',
        button: '',
        calendar: 'gap-1',
        weekdays: 'font-semibold'
      },
      md: {
        base: 'px-6 py-4',
        header: '',
        dateTitle: 'text-lg font-bold',
        buttonsContainer: '',
        button: '',
        calendar: 'gap-1',
        weekdays: 'font-semibold'
      },
      lg: {
        base: 'px-6 py-4',
        header: '',
        dateTitle: 'text-xl font-bold',
        buttonsContainer: '',
        button: '',
        calendar: 'gap-1',
        weekdays: 'font-semibold'
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

  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'default'
})

const emit = defineEmits(['update:modelValue'])

const { base, header, dateTitle, buttonsContainer, button, icon, calendar, weekdays } = datePickerTV({
  size: props.size,
  variant: props.variant
})

const currentDate = new Date()
const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(
  currentDate.getDate()
).padStart(2, '0')}`

const date = ref(props.modelValue || formattedDate)

const calendarViewDate = ref({
  year: props.modelValue ? Number(props.modelValue?.substring(0, 4)) : currentDate.getFullYear(),
  month: props.modelValue ? Number(props.modelValue?.substring(5, 7)) - 1 : currentDate.getMonth()
})

const previousCalendarMonth = () => {
  if (calendarViewDate.value.month === 0) {
    calendarViewDate.value.month = 11
    calendarViewDate.value.year--
    return
  }
  calendarViewDate.value.month--
}

const setCurrentCalendar = () => {
  calendarViewDate.value.year = Number(date.value.substring(0, 4))
  calendarViewDate.value.month = Number(date.value.substring(5, 7)) - 1
}

const nextCalendarMonth = () => {
  if (calendarViewDate.value.month === 11) {
    calendarViewDate.value.month = 0
    calendarViewDate.value.year++
    return
  }
  calendarViewDate.value.month++
}

const setDate = (d: number | null) => {
  if (d == null) return

  const year = calendarViewDate.value.year
  const month = String(calendarViewDate.value.month + 1).padStart(2, '0')
  const day = String(d).padStart(2, '0')

  date.value = `${year}-${month}-${day}`
  emit('update:modelValue', date.value)
}

const weekdayOffset = computed(() => {
  const d = new Date(calendarViewDate.value.year, calendarViewDate.value.month, 1)
  // Monday is 0, Sunday is 6. Monday is the first day of the week.
  const day = d.getDay()
  return day === 0 ? 6 : day - 1
})

const lastDayOfMonth = computed(() => {
  return new Date(calendarViewDate.value.year, calendarViewDate.value.month + 1, 0).getDate()
})

// Computed property to generate the days of the month
const monthsDays = computed(() => {
  const monthDays = []
  for (let index = 1; index < 6 * 7; index++) {
    if (index <= weekdayOffset.value) {
      monthDays.push({ id: index, value: null })
      continue
    }

    if (index > lastDayOfMonth.value + weekdayOffset.value) {
      monthDays.push({ id: index, value: null })
      continue
    }
    monthDays.push({ id: index, value: index - weekdayOffset.value })
  }

  return monthDays
})

// Computed property to get the month name as a string
const monthString = computed(() => {
  const d = new Date(calendarViewDate.value.year, calendarViewDate.value.month, 1)
  return d.toLocaleString('default', { month: 'long' })
})

// Computed property to get the first two letters of each weekday name
const weekdayLetters = computed(() => {
  const weekdayLetters = []
  for (let i = 0; i < 7; i++) {
    const d = new Date(2024, 0, 1 + i)
    const dayName = d.toLocaleString('default', { weekday: 'long' })
    weekdayLetters.push(dayName.substring(0, 2).toUpperCase())
  }
  return weekdayLetters
})
</script>
