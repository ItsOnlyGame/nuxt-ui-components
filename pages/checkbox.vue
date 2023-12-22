<template>
  <div class="flex flex-col gap-12">
    <div>
      <span>
        Currently {{ checkedCount }} checkboxes are checked!
      </span>
    </div>

    <Heading size="sm">Default Checkbox</Heading>
    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex flex-col gap-4">
        <Checkbox label="Text" helper="This would give help" size="sm" v-model="checkboxes[0]" />
        <Checkbox label="Text" helper="This would give help" size="md" v-model="checkboxes[1]" />
        <Checkbox label="Text" helper="This would give help" size="lg" v-model="checkboxes[2]" />
      </div>

      <div class="flex flex-col gap-4">
        <Checkbox label="Text" helper="This would give help" size="sm" v-model="checkboxes[3]" disabled />
        <Checkbox label="Text" helper="This would give help" size="md" v-model="checkboxes[4]" disabled />
        <Checkbox label="Text" helper="This would give help" size="lg" v-model="checkboxes[5]" disabled />
      </div>
    </div>

    <Heading size="sm">Invalid Checkbox</Heading>
    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex flex-col gap-4">
        <form class="flex flex-col gap-4">
          <Checkbox label="Text" helper="This would give help" size="sm" v-model="checkboxes[6]" pattern="" />
          <Checkbox label="Text" helper="This would give help" size="md" v-model="checkboxes[7]" pattern="" />
          <Checkbox label="Text" helper="This would give help" size="lg" v-model="checkboxes[8]" pattern="" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Component: Checkbox',
  description: 'Nuxt UI checkbox component',
})

const checkboxes = ref([]) 

const checkedCount = computed(() => {
  const checked = checkboxes.value.filter(value => !!value)
  return checked.length
})
</script>
