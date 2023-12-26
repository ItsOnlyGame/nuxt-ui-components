<template>
  <div>
    <Header />

    <div class="flex h-full flex-col items-center p-4">
      <div class="flex h-full w-full max-w-7xl flex-col gap-8">
        <Heading class="self-start">
          {{ $route.meta.title }}
        </Heading>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
useHead({
  titleTemplate: () => route.meta.title,
  meta: [{ name: 'description', content: route.meta.description }]
})
</script>
