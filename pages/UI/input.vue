<template>
  <div class="flex flex-col gap-12">
    <Heading size="sm">Default Text Input</Heading>
    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex flex-col gap-4">
        <Input
          label="Text"
          helper="Input can also have helper text"
          size="sm"
          v-model="text"
          variant="default"
          id="input-01"
        />
        <Input
          label="Text"
          helper="Input can also have helper text"
          size="md"
          v-model="text"
          variant="default"
          id="input-02"
        />
        <Input
          label="Text"
          helper="Input can also have helper text"
          size="lg"
          v-model="text"
          variant="default"
          id="input-03"
        />
        <Input
          label="Text"
          helper="Input can also have helper text"
          size="xl"
          v-model="text"
          variant="default"
          id="input-04"
        />
      </div>

      <div class="flex flex-col gap-4">
        <Input
          label="Text"
          helper="Input can also have helper text"
          size="sm"
          variant="default"
          v-model="text"
          disabled
          id="input-05"
        />
        <Input
          label="Text"
          helper="Input can also have helper text"
          size="md"
          variant="default"
          v-model="text"
          disabled
          id="input-06"
        />
        <Input
          label="Text"
          helper="Input can also have helper text"
          size="lg"
          variant="default"
          v-model="text"
          disabled
          id="input-07"
        />
        <Input
          label="Text"
          helper="Input can also have helper text"
          size="xl"
          variant="default"
          v-model="text"
          disabled
          id="input-08"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Component: Input',
  description: 'Nuxt UI input component'
})

const text = ref('Some text')
</script>
