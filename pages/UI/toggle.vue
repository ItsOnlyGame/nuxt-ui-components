<template>
  <div class="flex flex-col gap-12">
    <div>
      <span> Currently {{ toggeledCount }} toggles are checked! </span>
    </div>

    <Heading size="sm">Default Checkbox</Heading>
    <div class="flex w-full flex-row flex-wrap justify-between gap-6">
      <UIContainer class="w-max">
        <Toggle
          label="Toggle"
          helper="Toggle can also have helper text"
          size="sm"
          v-model="toggles[0]"
          id="toggle-01"
        />
        <Toggle
          label="Toggle"
          helper="Toggle can also have helper text"
          size="md"
          v-model="toggles[1]"
          id="toggle-02"
        />
        <Toggle
          label="Toggle"
          helper="Toggle can also have helper text"
          size="lg"
          v-model="toggles[2]"
          id="toggle-03"
        />
      </UIContainer>

      <UIContainer class="w-max">
        <Toggle
          label="Toggle"
          helper="Toggle can also have helper text"
          size="sm"
          v-model="toggles[3]"
          disabled
          id="toggle-04"
        />
        <Toggle
          label="Toggle"
          helper="Toggle can also have helper text"
          size="md"
          v-model="toggles[4]"
          disabled
          id="toggle-05"
        />
        <Toggle
          label="Toggle"
          helper="Toggle can also have helper text"
          size="lg"
          v-model="toggles[5]"
          disabled
          id="toggle-06"
        />
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
