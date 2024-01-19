<template>
  <div class="flex flex-col gap-12">
    <Heading size="sm">Default Modal</Heading>
    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex w-full max-w-lg flex-col gap-4">
        <Button @click="() => modals[0] = true">Show modal (sm)</Button>
        <Button @click="() => modals[1] = true">Show modal (md)</Button>
        <Button @click="() => modals[2] = true">Show modal (lg)</Button>
      </div>
    </div>

    <Modal label="Lorem Ipsum (sm)" :show="modals[0]" @close="() => (modals[0] = false)" size="sm">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu bibendum nisi. Nullam aliquam lacinia ante a
        pretium. Sed lobortis bibendum nulla, ut fringilla nibh pulvinar in. Aliquam accumsan nisi ut nunc tincidunt
        interdum. Donec ac consectetur quam. Fusce leo ipsum, efficitur eget nibh vel, feugiat faucibus neque.
      </p>
    </Modal>

    <Modal label="Lorem Ipsum (md)" :show="modals[1]" @close="() => (modals[1] = false)" size="md">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu bibendum nisi. Nullam aliquam lacinia ante a
        pretium. Sed lobortis bibendum nulla, ut fringilla nibh pulvinar in. Aliquam accumsan nisi ut nunc tincidunt
        interdum. Donec ac consectetur quam. Fusce leo ipsum, efficitur eget nibh vel, feugiat faucibus neque.
      </p>
    </Modal>

    <Modal label="Lorem Ipsum (lg)" :show="modals[2]" @close="() => (modals[2] = false)" size="lg">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu bibendum nisi. Nullam aliquam lacinia ante a
        pretium. Sed lobortis bibendum nulla, ut fringilla nibh pulvinar in. Aliquam accumsan nisi ut nunc tincidunt
        interdum. Donec ac consectetur quam. Fusce leo ipsum, efficitur eget nibh vel, feugiat faucibus neque.
      </p>
    </Modal>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Component: Modal',
  description: 'Nuxt UI modal component'
})

const modals = reactive([false, false, false])

</script>
