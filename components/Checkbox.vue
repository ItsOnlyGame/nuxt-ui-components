<template>
  <div :class="base()">
    <input
      :class="checkbox()"
      type="checkbox"
      :id="checkboxId"
      :value="modelValue"
      @input="emitUpdate"
      :disabled="disabled"
    />
    <label :class="label()" :for="checkboxId">
      {{ props.label }}
    </label>
    <small :class="small()">
      <span>{{ props.helper }}</span>
    </small>
    <svg
      :class="svg()"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="graphics-symbol"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const checkboxVariants = tv({
  slots: {
    base: 'relative flex flex-wrap items-center',
    checkbox:
      'peer cursor-pointer appearance-none transition-colors focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed',
    label: 'cursor-pointer peer-disabled:cursor-not-allowed',
    small: 'w-full transition',
    svg: 'pointer-events-none absolute transition-all duration-300 peer-disabled:cursor-not-allowed'
  },
  variants: {
    variant: {
      default: {
        checkbox:
          'rounded border-2 border-slate-500 bg-white checked:border-primary-500 checked:bg-primary-500 checked:hover:border-primary-600 checked:hover:bg-primary-600 checked:focus:border-primary-700 checked:focus:bg-primary-700 disabled:border-slate-100 disabled:bg-slate-50',
        label: 'text-black peer-disabled:text-slate-400',
        small: 'text-primary-500 peer-invalid:text-red-500',
        svg: 'fill-white stroke-white -rotate-90 opacity-0 peer-checked:rotate-0 peer-checked:opacity-100'
      }
    },
    size: {
      sm: {
        checkbox: 'h-3.5 w-3.5',
        label: 'pl-2 text-sm',
        small: 'py-0.5 pl-6 text-xs',
        svg: 'left-0 top-1 h-3.5 w-3.5'
      },
      md: {
        checkbox: 'h-4 w-4',
        label: 'pl-2 text-md',
        small: 'py-0.5 pl-[26px] text-xs',
        svg: 'left-0 top-1 h-4 w-4'
      },
      lg: {
        checkbox: 'h-5 w-5',
        label: 'pl-2 text-lg',
        small: 'py-0.5 pl-[30px] text-xs',
        svg: 'left-0 top-1 h-5 w-5'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'default'
  }
})

type CheckboxVariants = VariantProps<typeof checkboxVariants>
type Props = {
  // Customization props
  size?: CheckboxVariants['size']
  variant?: CheckboxVariants['variant']
  class?: string

  // Label and helper text props
  helper?: string
  label?: string

  // Checkbox props
  modelValue?: boolean
  disabled?: boolean
}

const emit = defineEmits(['update:modelValue'])
const emitUpdate = (event: Event) => {
  const inputElement = event.target as HTMLInputElement
  emit('update:modelValue', inputElement.checked)
}

const props = defineProps<Props>()
const checkboxId = crypto.randomUUID()

const { base, checkbox, small, label, svg } = checkboxVariants({
  size: props.size,
  variant: props.variant
})
</script>
