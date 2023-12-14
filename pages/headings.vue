<template>
  <div class="flex flex-row justify-evenly w-full flex-wrap gap-6">
    <div class="flex flex-col items-center gap-2">
      <Heading size="xs">xs: Some text</Heading>
      <Heading size="sm">sm: Some text</Heading>
      <Heading size="md">md: Some text</Heading>
      <Heading size="lg">lg: Some text</Heading>
      <Heading size="xl">xl: Some text</Heading>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Component: Heading",
  description: "Nuxt UI heading components",
});

const onClick = (e) => {
  console.log("button works!");
};
</script>
