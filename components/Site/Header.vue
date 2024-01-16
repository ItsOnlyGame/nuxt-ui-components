<template>
  <header class="flex flex-row justify-between gap-2 border-b border-primary-800 px-8 py-3">
    <NuxtLink to="/">
      <Heading>Nuxt UI Components</Heading>
    </NuxtLink>
    <div>
      <NuxtLink v-for="route in routes" :to="route.url">
        <Button :key="route.name" variant="ghost"> {{ route.name }} </Button>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
const routes = [
  { name: 'Buttons', url: '/UI/buttons' },
  { name: 'Headings', url: '/UI/headings' },
  { name: 'Input', url: '/UI/input' },
  { name: 'Checkbox', url: '/UI/checkbox' },
  { name: 'Textarea', url: '/UI/textarea' },
  { name: 'Modals', url: '/UI/modals' },
  { name: 'Slideover', url: '/UI/slideover' },
  { name: 'Select', url: '/UI/select' },
  { name: 'Accordion', url: '/UI/accordion' },
  { name: 'Dropdown', url: '/UI/dropdown' },
  { name: 'Toggles', url: '/UI/toggle' },
  { name: 'Toasts', url: '/UI/toasts' },
  { name: 'Pagination', url: '/UI/pagination' },
  { name: 'Tabs', url: '/UI/tabs' },
  { name: 'Alerts', url: '/UI/alerts' },
]
</script>
