<template>
  <div class="flex flex-col gap-12">
    <Heading size="sm">Default TimePicker</Heading>
    <span> Currently date is {{ time }} </span>

    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex flex-row gap-4">
        <TimePicker label="Time" :value="time" size="lg" />
        <TimePicker label="Time" :value="time" size="md" />
        <TimePicker label="Time" :value="time" size="sm" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Component: TimePicker',
  description: 'Nuxt UI time picker component'
})

const time = ref('12:00')
</script>
