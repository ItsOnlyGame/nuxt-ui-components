<template>
  <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
    <div class="flex w-full max-w-4xl flex-col items-center gap-2 bg-stone-100 p-8">
      <Heading size="sm">List dropdown</Heading>
      <Dropdown label="Dropdown (sm)" variant="list" size="sm">
        <DropdownListItem> Item 1 </DropdownListItem>

        <DropdownListItem> Item 2 </DropdownListItem>

        <DropdownListItem> Item 3 </DropdownListItem>
      </Dropdown>

      <Dropdown label="Dropdown (md)" variant="list" size="md">
        <DropdownListItem> Item 1 </DropdownListItem>

        <DropdownListItem> Item 2 </DropdownListItem>

        <DropdownListItem> Item 3 </DropdownListItem>
      </Dropdown>

      <Dropdown label="Dropdown (lg)" variant="list" size="lg">
        <DropdownListItem> Item 1 </DropdownListItem>

        <DropdownListItem> Item 2 </DropdownListItem>

        <DropdownListItem> Item 3 </DropdownListItem>
      </Dropdown>
    </div>

    <div class="flex w-full max-w-4xl flex-col items-center gap-2 bg-stone-100 p-8">
      <Heading size="sm">Block dropdown</Heading>
      <Dropdown label="Dropdown (sm)" variant="block" size="sm">
        <span>Labore duis non nulla enim et exercitation labore velit labore id enim.</span>
      </Dropdown>

      <Dropdown label="Dropdown (md)" variant="block" size="md">
        <span>Eu cupidatat do sit culpa. Dolore ex excepteur id anim veniam minim elit.</span>
      </Dropdown>

      <Dropdown label="Dropdown (lg)" variant="block" size="lg">
        <span>Mollit incididunt cillum cupidatat sit veniam.Nisi sunt nulla ex eu do consectetur laborum mollit.</span>
      </Dropdown>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Component: Dropdown',
  description: 'Nuxt UI dropdown components'
})
</script>
