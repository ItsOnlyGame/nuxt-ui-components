<template>
  <div :class="base()">
    <input
      :id="inputId"
      :type="$props.type"
      :placeholder="$props.label"
      :disabled="$props.disabled"
      :class="input()"
      :value="$props.value || $props.modelValue"
      @input="emitUpdate"
      :pattern="pattern"
    />
    <label :for="inputId" :class="label()">
      {{ $props.label }}
    </label>
    <small :class="small()">
      <span>{{ $props.helper }}</span>
    </small>
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
const inputTV = tv({
  slots: {
    base: 'relative flex flex-col',
    input: 'peer relative w-full outline-none transition-all disabled:cursor-not-allowed',
    label: 'absolute z-[1] transition-all',
    small: 'flex w-full justify-between transition-all'
  },
  variants: {
    variant: {
      default: {
        label:
          'bg-body-light text-primary-500 peer-invalid:text-red-500 peer-focus:text-primary-800 peer-disabled:text-stone-400',
        input:
          'rounded border-2 border-primary-500 text-primary-950 placeholder-transparent invalid:border-red-500 focus:border-primary-700 disabled:border-stone-400 disabled:bg-transparent',
        small: 'text-primary-500 peer-invalid:text-red-500 peer-focus:text-primary-800 peer-disabled:text-stone-400'
      }
    },
    size: {
      sm: {
        label: '-top-2 left-3.5 px-1.5 text-xs',
        input: 'h-10 px-4',
        small: 'px-2 py-1 text-xs'
      },
      md: {
        label: '-top-2 left-3 px-1.5 text-sm',
        input: 'h-12 px-4',
        small: 'px-2 py-1 text-xs'
      },
      lg: {
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
  value?: string | number | null
  modelValue?: string | number | null
  disabled?: boolean
  pattern?: string
  type?: 'text' | 'password' | 'number'
  id?: string

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

const inputId = ref(props.id || '')
onMounted(() => {
  if (!props.id) {
    inputId.value = crypto.randomUUID()
  }
})

const { base, input, small, label } = inputTV({
  size: props.size,
  variant: props.variant
})
</script>
