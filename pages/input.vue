<template>
  <div class="flex flex-col gap-12">
    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex flex-col gap-4">
        <Input label="Email" helper="This would give help" size="sm" variant="default" />
        <Input label="Email" helper="This would give help" size="md" variant="default" />
        <Input label="Email" helper="This would give help" size="lg" variant="default" />
      </div>

      <div class="flex flex-col gap-4">
        <Input label="Email" helper="This would give help" size="sm" variant="default" disabled />
        <Input label="Email" helper="This would give help" size="md" variant="default" disabled />
        <Input label="Email" helper="This would give help" size="lg" variant="default" disabled />
      </div>
    </div>

    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex flex-col gap-4">
        <form @submit="() => console.log('Done!')" class="flex flex-col gap-4">
          <Input label="Email" helper="This would give help" size="sm" variant="default" required />
          <Input label="Email" helper="This would give help" size="md" variant="default" required />
          <Input label="Email" helper="This would give help" size="lg" variant="default" required />
        </form>
      </div>

      <div class="flex flex-col gap-4">
        <form @submit="() => console.log('Done!')" class="flex flex-col gap-4">
          <Input label="Email" helper="This would give help" size="sm" variant="default" disabled />
          <Input label="Email" helper="This would give help" size="md" variant="default" disabled />
          <Input label="Email" helper="This would give help" size="lg" variant="default" disabled />
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
</script>
