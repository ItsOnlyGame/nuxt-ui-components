<template>
  <div class="flex flex-col gap-12">
    <div>
      <span> Currently {{ toggeledCount }} toggles are checked! </span>
    </div>

    <Heading size="sm">Default Checkbox</Heading>
    <div class="flex w-full flex-row flex-wrap justify-between gap-6">
      <UIContainer class="w-max">
        <Toggle label="Text" helper="Toggle can also have helper text" size="sm" v-model="toggles[0]" />
        <Toggle label="Text" helper="Toggle can also have helper text" size="md" v-model="toggles[1]" />
        <Toggle label="Text" helper="Toggle can also have helper text" size="lg" v-model="toggles[2]" />
      </UIContainer>

      <UIContainer class="w-max">
        <Toggle label="Text" helper="Toggle can also have helper text" size="sm" v-model="toggles[3]" disabled />
        <Toggle label="Text" helper="Toggle can also have helper text" size="md" v-model="toggles[4]" disabled />
        <Toggle label="Text" helper="Toggle can also have helper text" size="lg" v-model="toggles[5]" disabled />
      </UIContainer>
    </div>

    <Heading size="sm">Invalid Checkbox</Heading>
    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <UIContainer class="w-max">
        <form class="flex flex-col gap-4">
          <Toggle label="Text" helper="Toggle can also have helper text" size="sm" v-model="toggles[6]" pattern="" />
          <Toggle label="Text" helper="Toggle can also have helper text" size="md" v-model="toggles[7]" pattern="" />
          <Toggle label="Text" helper="Toggle can also have helper text" size="lg" v-model="toggles[8]" pattern="" />
        </form>
      </UIContainer>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Component: Toggle',
  description: 'Nuxt UI toggle component'
})

const toggles = ref([])

const toggeledCount = computed(() => {
  const toggeled = toggles.value.filter((value) => !!value)
  return toggeled.length
})
</script>
