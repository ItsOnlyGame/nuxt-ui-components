<template>
  <div class="flex flex-col gap-12">
    <Heading size="sm">Default spinner</Heading>

    <div class="flex flex-col items-center gap-2">
      <Spinner size="lg" />
      <Spinner size="md" />
      <Spinner size="sm" />
      <Spinner size="xs" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Component: Spinner',
  description: 'Nuxt UI spinner components'
})
</script>
