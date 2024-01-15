<template>
  <nav role="navigation">
    <ul :class="base()">
      <li v-if="showFirstButton">
        <button @click="() => emitClick(1)" :class="button()">
          <span class="sr-only">First</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="icon()"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
            role="graphics-symbol"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </li>
      <li v-if="showQuickLinks && !hidePrevButton">
        <button @click="() => emitClick(previousPage)" :class="button()">
          <span class="sr-only">Previous</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="icon()"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
            role="graphics-symbol"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </li>

      <li v-for="index in relevantPages">
        <button
          :key="index"
          @click="() => emitClick(index)"
          :class="button({ class: $props.page == index ? selectedButton() : '' })"
        >
          {{ index }}
        </button>
      </li>

      <li v-if="showQuickLinks && !hideNextButton">
        <button @click="() => emitClick(nextPage)" :class="button()">
          <span class="sr-only">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="icon()"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
            role="graphics-symbol"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </li>
      <li v-if="showLastButton">
        <button @click="() => emitClick(props.count)" :class="button()">
          <span class="sr-only">Last</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="icon()"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
            role="graphics-symbol"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { tv, type VariantProps } from 'tailwind-variants'
const paginationTV = tv({
  slots: {
    base: 'flex list-none items-center justify-center text-sm text-slate-700',
    button:
      'inline-flex items-center justify-center gap-4 rounded text-sm font-medium transition duration-300 focus-visible:outline-none',
    selectedButton: '',
    icon: '-mx-1 '
  },
  variants: {
    variant: {
      default: {
        button:
          'stroke-slate-700 text-slate-700 hover:bg-primary-50 hover:stroke-primary-500 hover:text-primary-500 active:bg-primary-200',
        selectedButton:
          'bg-primary-500 text-white ring-offset-2 hover:bg-primary-600 hover:stroke-primary-500 focus:bg-primary-600'
      }
    },
    size: {
      sm: {
        base: 'gap-2',
        button: 'h-8 px-3',
        icon: 'h-3.5 w-3.5'
      },
      md: {
        base: 'gap-1',
        button: 'h-10 px-4',
        icon: 'h-4 w-4'
      },
      lg: {
        base: 'gap-2',
        button: 'h-10 px-4',
        icon: 'h-5 w-5'
      }
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})

type PaginationProps = VariantProps<typeof paginationTV>
type Props = {
  // Customization props
  variant?: PaginationProps['variant']
  size?: PaginationProps['size']

  // Quick Buttons
  showFirstButton?: boolean | string
  showLastButton?: boolean | string

  hidePrevButton?: boolean
  hideNextButton?: boolean

  // Page values
  pagesShown?: number
  count: number
  page: number
}

const emit = defineEmits(['change'])
const props = withDefaults(defineProps<Props>(), {
  // Quick Buttons
  showFirstButton: false,
  showLastButton: false,

  hidePrevButton: false,
  hideNextButton: false,

  // Page values
  pagesShown: 7
})

const { base, button, selectedButton, icon } = paginationTV({
  size: props.size,
  variant: props.variant
})

const emitClick = (page: number) => {
  emit('change', page)
}

// Whether to show quick links if the page count is large enough
const showQuickLinks = computed(() => {
  return props.count > props.pagesShown
})

// Creates a list of relevant pages
const relevantPages = computed<number[]>(() => {
  const rowWidth = Math.min(props.pagesShown, props.count)
  let offset = Math.round((props.pagesShown + 1) / 2)

  let rowStart = Math.max(props.page - offset, 0)
  if (rowWidth + rowStart > props.count) {
    rowStart = props.count - rowWidth
  }

  const pagesArray = Array.from({ length: rowWidth }, (_, index) => rowStart + index + 1)
  return pagesArray
})

const nextPage = computed(() => {
  if (props.page >= props.count) {
    return props.count
  }
  return props.page + 1
})

const previousPage = computed(() => {
  if (props.page <= 1) {
    return 1
  }
  return props.page - 1
})
</script>
