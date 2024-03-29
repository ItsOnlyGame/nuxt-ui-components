<template>
  <div v-if="show" :class="base()" tabindex="-1" role="dialog">
    <div :class="modal()" id="modal" role="document">
      <header id="header-3a" :class="header()">
        <h3 :class="headerText()">{{ props.label }}</h3>
        <button type="button" :class="exitButton()" @click="$emit('close')">
          <span class="relative only:-mx-5">
            <Icon name="heroicons:x-mark" class="h-5 w-5" />
          </span>
        </button>
      </header>
      <div id="content-3a" :class="content()">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const modalTV = tv({
  slots: {
    base: 'fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center',
    header: 'flex items-center',
    modal: 'flex flex-col overflow-hidden',
    headerText: 'flex-1',
    exitButton:
      'inline-flex items-center justify-center gap-2 justify-self-center whitespace-nowrap tracking-wide transition duration-300',
    content: 'flex-1 overflow-auto'
  },
  variants: {
    variant: {
      default: {
        base: 'bg-slate-300/20 backdrop-blur-sm',
        modal: 'rounded bg-white text-slate-500 shadow-xl shadow-slate-700/10',
        headerText: 'text-black',
        exitButton:
          'rounded-full text-primary-700 hover:bg-primary-100 hover:text-primary-600 focus:bg-primary-200 focus:text-primary-700'
      }
    },
    size: {
      sm: {
        modal: 'max-h-[90vh] w-11/12 max-w-xl gap-2 p-4',
        header: 'gap-4',
        headerText: 'text-lg font-medium',
        exitButton: 'h-8 px-4 text-sm font-medium'
      },
      md: {
        modal: 'max-h-[90vh] w-11/12 max-w-2xl gap-2 p-6',
        header: 'gap-4',
        headerText: 'text-xl font-medium',
        exitButton: 'h-9 px-5 text-sm font-medium'
      },
      lg: {
        modal: 'max-h-[90vh] w-11/12 max-w-3xl gap-3 p-8',
        header: 'gap-4',
        headerText: 'text-2xl font-medium',
        exitButton: 'h-10 px-5 text-sm font-medium'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'default'
  }
})

type ModalProps = VariantProps<typeof modalTV>
type Props = {
  size?: ModalProps['size']
  variant?: ModalProps['variant']

  // Label text props
  label?: string

  // Logic
  show: boolean
}

defineEmits(['close'])
const props = defineProps<Props>()

const { base, modal, headerText, header, exitButton, content } = modalTV({
  size: props.size,
  variant: props.variant
})
</script>
