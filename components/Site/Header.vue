<template>
  <header class="flex flex-row justify-between gap-2 border-b border-primary-800 px-8 py-3">
    <NuxtLink to="/">
      <Heading>Nuxt UI Components</Heading>
    </NuxtLink>
    <div>
      <NuxtLink v-for="route in routes" :to="route.url" :key="route.url">
        <Button variant="ghost"> {{ route.name }} </Button>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
const routes = [
  { name: 'Buttons', url: '/buttons' },
  { name: 'Headings', url: '/headings' },
  { name: 'Input', url: '/input' },
  { name: 'Checkbox', url: '/checkbox' },
  { name: 'Textarea', url: '/textarea' },
  { name: 'Modals', url: '/modals' },
  { name: 'Slideover', url: '/slideover' },
  { name: 'Select', url: '/select' },
  { name: 'Accordion', url: '/accordion' },
  { name: 'Dropdown', url: '/dropdown' },
  { name: 'Toggles', url: '/toggle' },
  { name: 'Toasts', url: '/toasts' }
]
</script>
