<template>
  <div>
    <Transition>
      <div v-if="open" :class="`slideover ${slideover()}`">
        <div :class="header()">
          <slot name="header" />

          <button :class="closeButton()" @click="$emit('close')">
            <span class="relative only:-mx-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
                role="graphics-symbol"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>

        <div class="flex min-w-full flex-col">
          <slot />
        </div>
      </div>
    </Transition>

    <div v-if="overlay && open" :class="overlay()" @click="() => $emit('close')" />
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const slideoverTV = tv({
  slots: {
    header: 'mx-6 my-2 flex flex-row items-center justify-between',
    slideover: 'fixed right-0 top-0 z-50 h-screen overflow-auto',
    overlay: 'fixed left-0 top-0 z-20 h-screen w-screen',
    closeButton:
      'inline-flex cursor-pointer items-center justify-center gap-2 justify-self-center whitespace-nowrap tracking-wide transition duration-300'
  },
  variants: {
    variant: {
      default: {
        slideover: 'bg-primary-950 text-primary-200',
        overlay: 'bg-stone-600 bg-opacity-70',
        closeButton: 'rounded-full text-white hover:bg-primary-900 focus:bg-primary-800'
      }
    },
    size: {
      sm: {
        slideover: 'w-full max-w-[300px] py-10',
        closeButton: 'h-8 px-4 text-sm font-medium'
      },
      md: {
        slideover: 'w-full max-w-[350px] py-10',
        closeButton: 'h-9 px-5 text-sm font-medium'
      },
      lg: {
        slideover: 'w-full max-w-[400px] py-10',
        closeButton: 'h-10 px-5 text-sm font-medium'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'default'
  }
})

type SlideoverProps = VariantProps<typeof slideoverTV>
type Props = {
  // Customization props
  size?: SlideoverProps['size']
  variant?: SlideoverProps['variant']
  class?: string

  // Slideover props
  open: boolean,
  overlay?: boolean
}

defineEmits(['close'])

const props = withDefaults(defineProps<Props>(), {
  overlay: true
})

const { header, slideover, overlay, closeButton } = slideoverTV({
  size: props.size,
  variant: props.variant
})
</script>

<style>
.slideover.v-enter-active,
.slideover.v-leave-active {
  transition: right 300ms ease;
}

.slideover.v-enter-from,
.slideover.v-leave-to {
  right: -500px;
}
</style>
