<template>
  <div class="flex flex-col gap-12">
    <Heading size="sm">Default Text Input</Heading>
    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex flex-col gap-4 w-full max-w-lg">
        <Textarea label="Text" helper="This would give help" size="sm" v-model="text" variant="default" />
        <Textarea label="Text" helper="This would give help" size="md" v-model="text" variant="default" />
        <Textarea label="Text" helper="This would give help" size="lg" v-model="text" variant="default" />
      </div>

      <div class="flex flex-col gap-4 w-full max-w-lg">
        <Textarea label="Text" helper="This would give help" size="sm" variant="default" v-model="text" disabled />
        <Textarea label="Text" helper="This would give help" size="md" variant="default" v-model="text" disabled />
        <Textarea label="Text" helper="This would give help" size="lg" variant="default" v-model="text" disabled />
      </div>
    </div>

    <Heading size="sm">Invalid Text Input</Heading>
    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex flex-col gap-4 w-full max-w-lg">
        <form class="flex flex-col gap-4 w-full max-w-lg">
          <Textarea label="Text" helper="This would give help" size="sm" variant="default" v-model="text" />
          <Textarea label="Text" helper="This would give help" size="md" variant="default" v-model="text" />
          <Textarea label="Text" helper="This would give help" size="lg" variant="default" v-model="text" />
        </form>
      </div>
    </div>

    <Heading size="sm">Invalid Text Input</Heading>
    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex flex-col gap-4 w-full max-w-lg">
        <Textarea label="Text" helper="This would give help" size="sm" variant="default" limit="20" v-model="text" />
        <Textarea label="Text" helper="This would give help" size="md" variant="default" limit="20" v-model="text" />
        <Textarea label="Text" helper="This would give help" size="lg" variant="default" limit="20" v-model="text" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Component: Textarea',
  description: 'Nuxt UI textarea component'
})

const text = ref('Some text')
</script>
