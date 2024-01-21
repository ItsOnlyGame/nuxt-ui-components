<template>
  <div class="flex flex-col gap-12">
    <div>
      <span> Currently {{ checkedCount }} checkboxes are checked! </span>
    </div>

    <Heading size="sm">Default Checkbox</Heading>
    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex flex-col gap-4">
        <Checkbox
          label="Checkbox"
          helper="Checkbox can also have helper text"
          size="sm"
          v-model="checkboxes[0]"
          id="checkbox-01"
        />
        <Checkbox
          label="Checkbox"
          helper="Checkbox can also have helper text"
          size="md"
          v-model="checkboxes[1]"
          id="checkbox-02"
        />
        <Checkbox
          label="Checkbox"
          helper="Checkbox can also have helper text"
          size="lg"
          v-model="checkboxes[2]"
          id="checkbox-03"
        />
      </div>

      <div class="flex flex-col gap-4">
        <Checkbox
          label="Checkbox"
          helper="Checkbox can also have helper text"
          size="sm"
          v-model="checkboxes[3]"
          disabled
          id="checkbox-04"
        />
        <Checkbox
          label="Checkbox"
          helper="Checkbox can also have helper text"
          size="md"
          v-model="checkboxes[4]"
          disabled
          id="checkbox-05"
        />
        <Checkbox
          label="Checkbox"
          helper="Checkbox can also have helper text"
          size="lg"
          v-model="checkboxes[5]"
          disabled
          id="checkbox-06"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Component: Checkbox',
  description: 'Nuxt UI checkbox component'
})

const checkboxes = ref([])

const checkedCount = computed(() => {
  const checked = checkboxes.value.filter((value) => !!value)
  return checked.length
})
</script>
