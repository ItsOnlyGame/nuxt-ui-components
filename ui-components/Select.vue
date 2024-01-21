<template>
  <div :class="base()">
    <select
      :id="selectId"
      :name="selectId"
      :required="props.required"
      :class="select()"
      :value="props.modelValue"
      @input="emitUpdate"
      :disabled="disabled"
    >
      <slot />
    </select>
    <label :for="selectId" :class="label()">
      {{ props.label }}
    </label>
    <Icon name="solar:alt-arrow-down-bold" :class="svg()" />
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
const selectTV = tv({
  slots: {
    base: 'relative md:w-60',
    select: 'peer relative w-full appearance-none outline-none transition-all disabled:cursor-not-allowed',
    label: 'absolute z-[1] transition-all',
    svg: 'pointer-events-none absolute transition-all peer-disabled:cursor-not-allowed'
  },
  variants: {
    variant: {
      default: {
        label:
          'bg-body-light text-primary-500 peer-invalid:text-red-500 peer-focus:text-primary-800 peer-disabled:text-stone-400',
        select:
          'rounded border-2 border-primary-500 text-primary-950 placeholder-transparent invalid:border-red-500 focus:border-primary-700 disabled:border-stone-400 disabled:bg-transparent',
        svg: 'text-primary-500 peer-focus:text-primary-800 peer-disabled:text-stone-400'
      }
    },
    size: {
      sm: {
        label: '-top-2 left-3.5 px-1.5 text-xs',
        select: 'h-10 px-4',
        svg: 'right-2 top-3 h-5 w-5'
      },
      md: {
        label: '-top-2 left-3 px-1.5 text-sm',
        select: 'h-12 px-4',
        svg: 'right-2 top-3.5 h-6 w-6'
      },
      lg: {
        label: 'text-md -top-3 left-3.5 px-2',
        select: 'h-14 px-5 text-lg',
        svg: 'right-2 top-4 h-7 w-7'
      }
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})

type SelectProps = VariantProps<typeof selectTV>
type Props = {
  // Customization props
  variant?: SelectProps['variant']
  size?: SelectProps['size']

  // Label and helper text props
  helper?: string
  label?: string

  // Select props
  modelValue?: string | number
  disabled?: boolean
  required?: boolean
  id?: string
}

const emit = defineEmits(['update:modelValue'])
const emitUpdate = (event: Event) => {
  const selectElement = event.target as HTMLSelectElement

  if (typeof props.modelValue == 'number') {
    emit('update:modelValue', Number(selectElement.value))
    return
  }

  emit('update:modelValue', selectElement.value)
}

const props = defineProps<Props>()

const selectId = ref(props.id || '')
onMounted(() => {
  if (!props.id) {
    selectId.value = crypto.randomUUID()
  }
})

const { base, select, svg, label } = selectTV({
  size: props.size,
  variant: props.variant
})
</script>
