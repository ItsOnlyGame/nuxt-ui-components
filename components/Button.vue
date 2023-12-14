<template>
  <button
    :class="
      button({ size: props.size, variant: props.variant, class: props.class })
    "
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
    variant: {
      solid: "bg-primary-500 hover:bg-primary-700",
      ghost: "bg-transparent hover:bg-primary-700 hover:bg-opacity-40",
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
    variant: "solid",
  },
});

type ButtonVariants = VariantProps<typeof button>;
type Props = {
  size?: ButtonVariants["size"];
  variant?: ButtonVariants["variant"];
  class?: string;
};

const props = defineProps<Props>();
</script>
