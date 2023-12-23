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
      :maxlength="limit"
      :disabled="disabled"
    />
    <label :for="textareaId" :class="label()">
      {{ props.label }}
    </label>
    <small :class="small()">
      <span> {{ props.helper }} </span>
      <span v-if="limit">{{ charCount }}/{{ limit }}</span>
    </small>
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
const textareaVariants = tv({
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
          'rounded border-2 border-primary-500 text-primary-950 placeholder-transparent focus:border-primary-700 invalid:border-red-500 disabled:border-stone-400 disabled:bg-transparent',
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
        textarea: 'px-4 py-2.5 text-md',
        label: '-top-2.5 left-2 px-2 text-sm',
        small: 'px-2 py-1 text-xs'
      },
      lg: {
        textarea: 'px-4 py-3 text-lg',
        label: '-top-3 left-2 px-2 text-md',
        small: 'px-2 py-1 text-xs'
      }
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})

type TextareaVariant = VariantProps<typeof textareaVariants>
type Props = {
  // Customization props
  variant?: TextareaVariant['variant']
  size?: TextareaVariant['size']
  class?: string

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

const { base, textarea, small, label } = textareaVariants({
  size: props.size,
  variant: props.variant
})

const charCount = computed(() => {
  return props.modelValue?.length
})
</script>
