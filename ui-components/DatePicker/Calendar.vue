<template>
  <div :class="styleTV.base()">
    <div :class="styleTV.header()">
      <div :class="styleTV.dateTitle()">
        <span>{{ monthString }}</span>
        <span>{{ calendarView.year }}</span>
      </div>

      <div :class="styleTV.buttonsContainer()">
        <CalendarQuickButton @click="previousCalendarMonth" :size="$props.size" quick-icon="left-arrow" />
        <CalendarQuickButton @click="resetCalendarView" :size="$props.size" quick-icon="center" />
        <CalendarQuickButton @click="nextCalendarMonth" :size="$props.size" quick-icon="right-arrow" />
      </div>
    </div>

    <div :class="styleTV.calendar()">
      <span v-for="weekday in weekdayLetters" :key="weekday">
        {{ weekday }}
      </span>

      <CalendarDateButton
        @click="() => setDate(day.value)"
        v-for="day in monthsDays"
        :key="day.id"
        :variant="getCalendarButtonStyle(day.value)"
        :size="$props.size"
      >
        {{ day.value }}
      </CalendarDateButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const datePickerTV = tv({
  slots: {
    base: 'inline-flex h-max select-none flex-col gap-1 rounded bg-primary-500 p-3',
    header: 'flex flex-row items-center justify-between',
    dateTitle: 'text-md flex flex-row gap-2 pl-1 font-medium',
    buttonsContainer: 'flex flex-row gap-0.5',
    icon: '',
    calendar: 'grid grid-cols-7 grid-rows-6 gap-y-0.5 items-center justify-center text-center'
  },
  variants: {
    variant: {
      default: {
        base: '',
        dateTitle: 'text-primary-950',
        icon: 'text-primary-900',
        weekdays: 'text-primary-950'
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

  value?: string | null
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'default'
})

const emit = defineEmits(['input'])

const styleTV = datePickerTV({
  size: props.size,
  variant: props.variant
})

const currentDate = new Date()
const date = ref(props.value)

// This value is used to reset the calendar view to the original date.
const originalView = {
  year: props.value ? Number(props.value?.substring(0, 4)) : currentDate.getFullYear(),
  month: props.value ? Number(props.value?.substring(5, 7)) - 1 : currentDate.getMonth()
}

// This determines the calendar current view. Doesn't affect actual date value.
const calendarView = ref({
  year: originalView.year,
  month: originalView.month
})

const previousCalendarMonth = () => {
  if (calendarView.value.month === 0) {
    calendarView.value.month = 11
    calendarView.value.year--
    return
  }
  calendarView.value.month--
}

const getCalendarButtonStyle = (day: number | null) => {
  if (day == null) {
    return 'hidden'
  }

  const isSameYear = String(calendarView.value.year) == date.value?.substring(0, 4)
  const isSameMonth = String(calendarView.value.month + 1).padStart(2, '0') == date.value?.substring(5, 7)
  const isSameDay = currentDayValue.value == String(day).padStart(2, '0')

  if (isSameDay && isSameMonth && isSameYear) {
    return 'selected'
  }

  return 'solid'
}

const resetCalendarView = () => {
  console.log(originalView)
  calendarView.value.year = originalView.year
  calendarView.value.month = originalView.month
}

const nextCalendarMonth = () => {
  if (calendarView.value.month === 11) {
    calendarView.value.month = 0
    calendarView.value.year++
    return
  }
  calendarView.value.month++
}

const currentDayValue = computed(() => {
  const valueDay = date.value?.substring(8, 10)
  return valueDay
})

const setDate = (d: number | null) => {
  if (d == null) return
  if (props.disabled) return

  const year = calendarView.value.year
  const month = String(calendarView.value.month + 1).padStart(2, '0')
  const day = String(d).padStart(2, '0')

  if (currentDayValue.value == day) {
    date.value = ''
  } else {
    date.value = `${year}-${month}-${day}`
  }

  emit('input', date.value)
}

// Computed property to generate the days of the month
const monthsDays = computed(() => {
  const getWeekdayOffset = () => {
    const d = new Date(calendarView.value.year, calendarView.value.month, 1)
    // Monday is 0, Sunday is 6. Monday is the first day of the week.
    const day = d.getDay()
    return day === 0 ? 6 : day - 1
  }

  const weekdayOffset = getWeekdayOffset()
  const lastDayOfMonth = new Date(calendarView.value.year, calendarView.value.month + 1, 0).getDate()

  const monthDays = []
  for (let index = 1; index < 6 * 7; index++) {
    if (index <= weekdayOffset) {
      monthDays.push({ id: index, value: null })
      continue
    }

    if (index > lastDayOfMonth + weekdayOffset) {
      monthDays.push({ id: index, value: null })
      continue
    }
    monthDays.push({ id: index, value: index - weekdayOffset })
  }

  return monthDays
})

// Computed property to get the month name as a string
const monthString = computed(() => {
  const d = new Date(calendarView.value.year, calendarView.value.month, 1)
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
