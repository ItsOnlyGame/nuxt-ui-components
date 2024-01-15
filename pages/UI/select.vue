<template>
  <div class="flex flex-col gap-12">
    <div>
      <span> Current value "{{ value }}" of Select component! </span>
    </div>

    <Heading size="sm">Default Select</Heading>
    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex flex-col gap-4">
        <Select label="Choose one" v-model="value" size="sm">
          <option value="" disabled selected></option>
          <option value="1">Test 1</option>
          <option value="2">Test 2</option>
          <option value="3">Test 3</option>
        </Select>

        <Select label="Choose one" v-model="value" size="md">
          <option value="" disabled selected></option>
          <option value="1">Test 1</option>
          <option value="2">Test 2</option>
          <option value="3">Test 3</option>
        </Select>

        <Select label="Choose one" v-model="value" size="lg">
          <option value="" disabled selected></option>
          <option value="1">Test 1</option>
          <option value="2">Test 2</option>
          <option value="3">Test 3</option>
        </Select>
      </div>

      <div class="flex flex-col gap-4">
        <Select label="Choose one" v-model="value" size="sm" disabled>
          <option value="" disabled selected></option>
          <option value="1">Test 1</option>
          <option value="2">Test 2</option>
          <option value="3">Test 3</option>
        </Select>

        <Select label="Choose one" v-model="value" size="md" disabled>
          <option value="" disabled selected></option>
          <option value="1">Test 1</option>
          <option value="2">Test 2</option>
          <option value="3">Test 3</option>
        </Select>

        <Select label="Choose one" v-model="value" size="lg" disabled>
          <option value="" disabled selected></option>
          <option value="1">Test 1</option>
          <option value="2">Test 2</option>
          <option value="3">Test 3</option>
        </Select>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Component: Select',
  description: 'Nuxt UI select component'
})

const value = ref('1')
</script>
