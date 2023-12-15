<template>
  <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
    <div class="flex flex-col items-center gap-2">
      <Heading size="sm">Solid buttons</Heading>
      <Button @click="onClick" size="xs">Some text (xs)</Button>
      <Button @click="onClick" size="sm">Some text (sm)</Button>
      <Button @click="onClick" size="md">Some text (md)</Button>
      <Button @click="onClick" size="lg">Some text (lg)</Button>
      <Button @click="onClick" size="xl">Some text (xl)</Button>
    </div>

    <div class="flex flex-col items-center gap-2">
      <Heading size="sm">Ghost buttons</Heading>
      <Button @click="onClick" size="xs" variant="ghost">Some text (xs)</Button>
      <Button @click="onClick" size="sm" variant="ghost">Some text (sm)</Button>
      <Button @click="onClick" size="md" variant="ghost">Some text (md)</Button>
      <Button @click="onClick" size="lg" variant="ghost">Some text (lg)</Button>
      <Button @click="onClick" size="xl" variant="ghost">Some text (xl)</Button>
    </div>

    <div class="flex flex-col items-center gap-2">
      <Heading size="sm">Outline Buttons</Heading>
      <Button @click="onClick" size="xs" variant="outline">Some text (xs)</Button>
      <Button @click="onClick" size="sm" variant="outline">Some text (sm)</Button>
      <Button @click="onClick" size="md" variant="outline">Some text (md)</Button>
      <Button @click="onClick" size="lg" variant="outline">Some text (lg)</Button>
      <Button @click="onClick" size="xl" variant="outline">Some text (xl)</Button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Component: Button',
  description: 'Nuxt UI button components',
})

const onClick = (e) => {
  console.log('button works!')
}
</script>
