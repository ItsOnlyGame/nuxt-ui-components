<template>
  <h2 :class="heading({ size: props.size, class: props.class })">
    <slot />
  </h2>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from "tailwind-variants";

const heading = tv({
  base: "font-bold text-black dark:text-white",
  variants: {
    size: {
      xs: "text-xl",
      sm: "text-2xl",
      md: "text-3xl",
      lg: "text-4xl",
      xl: "text-5xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type HeadingVariants = VariantProps<typeof heading>;
type Props = {
  size?: HeadingVariants["size"];
  class?: string;
};

const props = defineProps<Props>();
</script>
