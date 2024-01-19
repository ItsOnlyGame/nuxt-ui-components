<template>
  <div class="flex flex-col gap-12">
    <Heading size="sm">Default DatePicker</Heading>
    <span> Currently date is {{ date }}! </span>

    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex flex-row gap-4">
        <DatePicker v-model="date" size="sm" />
        <DatePicker v-model="date" size="md" />
        <DatePicker v-model="date" size="lg" />
      </div>
    </div>

    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex flex-row gap-4">
        <DatePicker v-model="date" size="sm" :allow-input-clear="true" />
        <DatePicker v-model="date" size="md" :allow-input-clear="true" />
        <DatePicker v-model="date" size="lg" :allow-input-clear="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Component: DatePicker',
  description: 'Nuxt UI date picker component'
})

const date = ref('2024-01-18')
</script>
