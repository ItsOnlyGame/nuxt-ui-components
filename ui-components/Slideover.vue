<template>
  <div :class="base()">
    <Transition>
      <div v-if="open" :class="`overlay ${overlay()}`" @click.self="$emit('close')">
        <div :class="`slideover ${slideover()}`">
          <div :class="header()">
            <slot name="header" />

            <button type="button" :class="closeButton()" @click="$emit('close')">
              <span class="relative only:-mx-5">
                <Icon name="heroicons:x-mark" class="h-5 w-5" />
              </span>
            </button>
          </div>

          <div class="flex min-w-full flex-col">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const slideoverTV = tv({
  slots: {
    base: 'pointer-events-none absolute left-0 top-0 h-full w-full',
    overlay: 'pointer-events-auto absolute left-0 top-0 z-20 h-full w-full overflow-x-hidden',
    header: 'mx-6 my-2 flex flex-row items-center justify-between',
    slideover: 'fixed right-0 top-0 z-50 h-screen overflow-auto',
    closeButton:
      'inline-flex cursor-pointer items-center justify-center gap-2 justify-self-center whitespace-nowrap tracking-wide transition duration-300'
  },
  variants: {
    variant: {
      default: {
        overlay: 'bg-slate-300/20 backdrop-blur-sm',
        slideover: 'bg-primary-950 text-primary-200',
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

  // Slideover props
  open: boolean
}

defineEmits(['close'])

const props = defineProps<Props>()

const { base, overlay, header, slideover, closeButton } = slideoverTV({
  size: props.size,
  variant: props.variant
})
</script>

<style>
.overlay.v-enter-active,
.overlay.v-leave-active,
.overlay.v-enter-active .slideover,
.overlay.v-leave-active .slideover {
  transition: right 250ms cubic-bezier(1, 0, 0, 1);
}

.overlay.v-enter-from,
.overlay.v-leave-to,
.overlay.v-enter-from .slideover,
.overlay.v-leave-to .slideover {
  right: -100%;
}
</style>
