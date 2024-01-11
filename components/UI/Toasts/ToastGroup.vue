<template>
  <div class="pointer-events-none fixed left-0 top-0 flex h-screen w-screen flex-col items-center z-50">
    <div :class="notificationsTV({ position: $props.position, class: $props.class })">
      <TransitionGroup name="list">
        <div v-for="toast in toastState" :key="toast.id">
          <Toast :id="toast.id" :title="toast.title" :description="toast.description" :variant="toast.type" :timeout="toast.timeout" />
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { tv, type VariantProps } from 'tailwind-variants'

const notificationsTV = tv({
  base: 'pointer-events-auto absolute flex w-96 flex-col gap-2',
  variants: {
    position: {
      'top-left': 'left-6 top-6',
      'top-center': 'top-6',
      'top-right': 'right-6 top-6',
      'bottom-left': 'bottom-6 left-6',
      'bottom-center': 'bottom-6',
      'bottom-right': 'bottom-6 right-6'
    }
  },
  defaultVariants: {
    position: 'top-right'
  }
})

type NotificationsVariants = VariantProps<typeof notificationsTV>
type Props = {
  position?: NotificationsVariants['position']
  class?: string
}

defineProps<Props>()
const toastState = useState<Toast[]>('toast-data', () => [])
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 300ms ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
