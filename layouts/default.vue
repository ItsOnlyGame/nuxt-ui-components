<template>
  <div class="flex min-h-screen flex-grow flex-col">
    <Header />

    <div class="flex h-full flex-col items-center p-4 flex-grow">
      <div class="flex h-full w-full max-w-7xl flex-col gap-8">
        <Heading class="self-start">
          {{ $route.meta.title }}
        </Heading>
        <slot />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
const route = useRoute()
useHead({
  titleTemplate: () => route.meta.title,
  meta: [{ name: 'description', content: route.meta.description }]
})
</script>
