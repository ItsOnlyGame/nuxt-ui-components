<template>
  <div class="flex flex-col gap-12">
    <Heading size="sm">Default Text Input</Heading>
    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex flex-col gap-4">
        <Input label="Text" helper="This would give help" size="sm" v-model="text" variant="default" />
        <Input label="Text" helper="This would give help" size="md" v-model="text" variant="default" />
        <Input label="Text" helper="This would give help" size="lg" v-model="text" variant="default" />
      </div>

      <div class="flex flex-col gap-4">
        <Input label="Text" helper="This would give help" size="sm" variant="default" v-model="text" disabled />
        <Input label="Text" helper="This would give help" size="md" variant="default" v-model="text" disabled />
        <Input label="Text" helper="This would give help" size="lg" variant="default" v-model="text" disabled />
      </div>
    </div>

    <Heading size="sm">Invalid Text Input</Heading>
    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex flex-col gap-4">
        <form class="flex flex-col gap-4">
          <Input label="Text" helper="This would give help" size="sm" variant="default" v-model="text" pattern="" />
          <Input label="Text" helper="This would give help" size="md" variant="default" v-model="text" pattern="" />
          <Input label="Text" helper="This would give help" size="lg" variant="default" v-model="text" pattern="" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Component: Input',
  description: 'Nuxt UI input component',
})

const text = ref('Some text')
</script>
