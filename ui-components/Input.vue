<template>
  <div :class="inputStyle.base()">
    <input
      :autocomplete="$props.autocomplete"
      :id="$props.id"
      :type="$props.type"
      :placeholder="$props.label"
      :disabled="$props.disabled"
      :class="inputStyle.input()"
      :value="$props.value || $props.modelValue"
      @input="emitUpdate"
      :min="$props.min"
      :max="$props.max"
    />
    <label :for="$props.id" :class="inputStyle.label()">
      {{ $props.label }}
    </label>
    <small v-if="$props.helper" :class="inputStyle.small()">
      <span>{{ $props.helper }}</span>
    </small>
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
const inputTV = tv({
  slots: {
    base: 'relative flex flex-col',
    input: 'peer relative w-full placeholder-transparent outline-none transition-all disabled:cursor-not-allowed',
    label: 'absolute z-[1] transition-all',
    small: 'flex w-full justify-between transition-all'
  },
  variants: {
    variant: {
      default: {
        label: 'bg-body-light text-primary-500 peer-focus:text-primary-600 peer-disabled:text-stone-400',
        input:
          'rounded border-2 border-primary-500 text-primary-950 focus:border-primary-600 disabled:border-stone-400 disabled:bg-transparent',
        small: 'text-primary-500 peer-focus:text-primary-600 peer-disabled:text-stone-400'
      }
    },
    invalid: {
      true: {
        label: 'text-red-500 peer-focus:text-red-600',
        input: ' border-red-500 text-primary-950 focus:border-red-600'
      }
    },
    size: {
      sm: {
        label: '-top-2 left-3.5 px-1.5 text-xs',
        input: 'h-9 px-4',
        small: 'px-2 py-1 text-xs'
      },
      md: {
        label: '-top-2 left-3.5 px-1.5 text-xs',
        input: 'h-10 px-4',
        small: 'px-2 py-1 text-xs'
      },
      lg: {
        label: '-top-2 left-3 px-1.5 text-sm',
        input: 'h-12 px-4',
        small: 'px-2 py-1 text-xs'
      },
      xl: {
        label: 'text-md -top-3 left-3.5 px-2',
        input: 'h-14 px-5 text-lg',
        small: 'px-2 py-1 text-xs'
      }
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})

type InputProps = VariantProps<typeof inputTV>
type Props = {
  // Customization props
  variant?: InputProps['variant']
  size?: InputProps['size']

  // Label and helper text props
  helper?: string
  label?: string

  // Text input props
  id?: string
  value?: string | number | null
  modelValue?: string | number | null
  disabled?: boolean
  invalid?: boolean
  pattern?: string
  type?: 'text' | 'password' | 'number'
  autocomplete?: string

  // Number input
  min?: number | string
  max?: number | string
}

const emit = defineEmits(['update:modelValue'])
const emitUpdate = (event: Event) => {
  const inputElement = event.target as HTMLInputElement

  if (props.type == 'number') {
    emit('update:modelValue', Number(inputElement.value))
    return
  }

  emit('update:modelValue', inputElement.value)
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text'
})

const inputStyle = computed(() => {
  return inputTV({
    size: props.size,
    variant: props.variant,
    invalid: props.invalid
  })
})
</script>
