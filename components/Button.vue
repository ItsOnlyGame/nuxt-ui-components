<template>
  <button
    :class="button({ size: props.size, type: props.type, class: props.class })"
    @click.once="(e) => $emit('click', e)"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "font-semibold text-primary-950 dark:text-primary-50 rounded active:opacity-80 whitespace-nowrap transition-colors",
  variants: {
    type: {
      solid: "bg-primary-500 hover:bg-primary-700",
      ghost: "bg-transparent hover:bg-primary-700",
      outline: "bg-primary-500 bg-opacity-40 hover:bg-primary-700",
    },
    size: {
      xs: "text-sm py-1 px-3",
      sm: "text-md py-1 px-3",
      md: "text-md py-2 px-3",
      lg: "text-xl py-2 px-4",
      xl: "text-2xl py-2 px-4",
    },
  },
  defaultVariants: {
    size: "md",
    type: "solid",
  },
});

type ButtonVariants = VariantProps<typeof button>;
type Props = {
  size?: ButtonVariants["size"];
  type?: ButtonVariants["type"];
  class?: string;
};

const props = defineProps<Props>();
</script>
