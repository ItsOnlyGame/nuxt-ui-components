<template>
  <div :class="base()">
    <textarea
      :id="textareaId"
      type="text"
      :rows="rows || 3"
      :placeholder="props.label"
      :value="modelValue"
      @input="emitUpdate"
      :class="textarea()"
      :maxlength="$props.limit"
      :disabled="disabled"
    />
    <label :for="textareaId" :class="label()">
      {{ props.label }}
    </label>
    <small v-if="$props.helper || $props.limit" :class="small()">
      <span v-if="$props.helper"> {{ props.helper }} </span>
      <span v-if="$props.limit">{{ charCount }}/{{ $props.limit }}</span>
    </small>
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
const textareaTV = tv({
  slots: {
    base: 'relative flex flex-col',
    textarea: 'peer relative w-full outline-none transition-colors disabled:cursor-not-allowed',
    label: 'absolute z-[1] transition-all',
    small: 'flex w-full justify-between transition-all'
  },
  variants: {
    variant: {
      default: {
        textarea:
          'rounded border-2 border-primary-500 text-primary-950 placeholder-transparent invalid:border-red-500 focus:border-primary-700 disabled:border-stone-400 disabled:bg-transparent',
        label:
          'bg-body-light text-primary-500 peer-invalid:text-red-500 peer-focus:text-primary-800 peer-disabled:text-stone-400',
        small: 'text-primary-500 peer-invalid:text-red-500 peer-focus:text-primary-800 peer-disabled:text-stone-400'
      }
    },
    size: {
      sm: {
        textarea: 'px-4 py-2 text-sm',
        label: '-top-2 left-2 px-2 text-xs',
        small: 'px-2 py-1 text-xs'
      },
      md: {
        textarea: 'text-md px-4 py-2.5',
        label: '-top-2.5 left-2 px-2 text-sm',
        small: 'px-2 py-1 text-xs'
      },
      lg: {
        textarea: 'px-4 py-3 text-lg',
        label: 'text-md -top-3 left-2 px-2',
        small: 'px-2 py-1 text-xs'
      }
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})

type TextareaProps = VariantProps<typeof textareaTV>
type Props = {
  // Customization props
  variant?: TextareaProps['variant']
  size?: TextareaProps['size']

  // Label and helper text props
  helper?: string
  label?: string

  // Text input props
  modelValue?: string
  disabled?: boolean
  rows?: number
  limit?: number | string
}

const emit = defineEmits(['update:modelValue'])
const emitUpdate = (event: Event) => {
  const inputElement = event.target as HTMLInputElement
  emit('update:modelValue', inputElement.value)
}

const props = defineProps<Props>()

const textareaId = crypto.randomUUID()

const { base, textarea, small, label } = textareaTV({
  size: props.size,
  variant: props.variant
})

const charCount = computed(() => {
  return props.modelValue?.length
})
</script>
