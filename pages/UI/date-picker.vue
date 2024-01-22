<template>
  <div class="flex flex-col gap-12">
    <Heading size="sm">Default DatePicker</Heading>
    <span> Currently date is {{ date }}! </span>

    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex flex-col md:flex-row gap-4 items-center justify-center">
        <DatePicker id="date-picker-01" label="Date" v-model="date" size="sm" />
        <DatePicker id="date-picker-02" label="Date" v-model="date" size="md" />
        <DatePicker id="date-picker-03" label="Date" v-model="date" size="lg" />
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
