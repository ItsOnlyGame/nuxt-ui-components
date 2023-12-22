<template>
  <div>
    <header class="flex flex-row justify-between gap-2 border-b border-primary-800 px-8 py-3">
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

        <NuxtLink to="/input">
          <Button variant="ghost"> Input </Button>
        </NuxtLink>

        <NuxtLink to="/checkbox">
          <Button variant="ghost"> Checkbox </Button>
        </NuxtLink>
      </div>
    </header>

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
