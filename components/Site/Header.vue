<template>
  <header class="flex flex-row justify-between gap-2 border-b border-primary-800 px-8 py-3">
    <NuxtLink to="/">
      <Heading>Nuxt UI Components</Heading>
    </NuxtLink>

    <div>
      <Button class="p-1.5" size="sm" variant="ghost" @click="() => (isMenuOpen = true)">
        <MenuIcon />
      </Button>
    </div>

    <Slideover @close="() => setMenuOpen(!isMenuOpen)" :open="isMenuOpen">
      <template #header>
        <Heading size="sm" color="white">Nuxt Components</Heading>
      </template>

      <div class="flex flex-row flex-wrap px-2 gap-3 items-center justify-center">
        <NuxtLink v-for="route in routes" :to="route.url">
        <Button :key="route.name"> {{ route.name }} </Button>
      </NuxtLink>
      </div>
    </Slideover>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const isMenuOpen = ref(false)

const setMenuOpen = (value: boolean) => {
  isMenuOpen.value = value
  window.scrollTo(0, 0)

  if (value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

watch(
  () => route.fullPath,
  () => setMenuOpen(false),
  { deep: true, immediate: false }
)

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
  { name: 'Spinner', url: '/UI/spinner' },
  { name: 'Date Picker', url: '/UI/date-picker' },
  { name: 'Time Picker', url: '/UI/time-picker' }
]
</script>
