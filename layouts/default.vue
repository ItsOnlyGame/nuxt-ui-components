<template>
  <header
    class="flex flex-row gap-2 justify-between px-8 py-3 border-b border-primary-800"
  >
    <NuxtLink to="/">
      <Heading>Nuxt UI Components</Heading>
    </NuxtLink>
    <div>
      <NuxtLink to="/buttons">
        <Button variant="ghost"> Buttons </Button>
      </NuxtLink>

      <NuxtLink to="/headings">
        <Button variant="ghost"> Headings </Button>
      </NuxtLink>
    </div>
  </header>

  <div class="flex flex-col items-center h-full p-4">
    <div class="flex flex-col max-w-7xl w-full h-full gap-8">
      <Heading class="self-start">{{ $route.meta.title }}</Heading>
      <slot />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
useHead({
  titleTemplate: () => route.meta.title,
  meta: [{ name: "description", content: route.meta.description }],
});
</script>
