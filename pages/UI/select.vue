<template>
  <div class="flex flex-col gap-12">
    <div>
      <span> Current value "{{ value }}" of Select component! </span>
    </div>

    <Heading size="sm">Default Select</Heading>
    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex flex-col gap-4">
        <Select label="Choose one" v-model="value" size="sm" id="select-01">
          <option value="" disabled selected></option>
          <option value="1">Test 1</option>
          <option value="2">Test 2</option>
          <option value="3">Test 3</option>
        </Select>

        <Select label="Choose one" v-model="value" size="md" id="select-02">
          <option value="" disabled selected></option>
          <option value="1">Test 1</option>
          <option value="2">Test 2</option>
          <option value="3">Test 3</option>
        </Select>

        <Select label="Choose one" v-model="value" size="lg" id="select-03">
          <option value="" disabled selected></option>
          <option value="1">Test 1</option>
          <option value="2">Test 2</option>
          <option value="3">Test 3</option>
        </Select>

        <Select label="Choose one" v-model="value" size="xl" id="select-04">
          <option value="" disabled selected></option>
          <option value="1">Test 1</option>
          <option value="2">Test 2</option>
          <option value="3">Test 3</option>
        </Select>
      </div>

      <div class="flex flex-col gap-4">
        <Select label="Choose one" v-model="value" size="sm" disabled id="select-05">
          <option value="" disabled selected></option>
          <option value="1">Test 1</option>
          <option value="2">Test 2</option>
          <option value="3">Test 3</option>
        </Select>

        <Select label="Choose one" v-model="value" size="md" disabled id="select-06">
          <option value="" disabled selected></option>
          <option value="1">Test 1</option>
          <option value="2">Test 2</option>
          <option value="3">Test 3</option>
        </Select>

        <Select label="Choose one" v-model="value" size="lg" disabled id="select-07">
          <option value="" disabled selected></option>
          <option value="1">Test 1</option>
          <option value="2">Test 2</option>
          <option value="3">Test 3</option>
        </Select>

        <Select label="Choose one" v-model="value" size="xl" disabled id="select-08">
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
