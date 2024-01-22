<template>
  <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
    <div class="flex flex-col items-center gap-2">
      <Heading size="sm">Solid buttons</Heading>
      <Button @click="onClick" size="xs" id="checkbox-solid-01">Some text (xs)</Button>
      <Button @click="onClick" size="sm" id="checkbox-solid-02">Some text (sm)</Button>
      <Button @click="onClick" size="md" id="checkbox-solid-03">Some text (md)</Button>
      <Button @click="onClick" size="lg" id="checkbox-solid-04">Some text (lg)</Button>
      <Button @click="onClick" size="xl" id="checkbox-solid-05">Some text (xl)</Button>
    </div>

    <div class="flex flex-col items-center gap-2">
      <Heading size="sm">Ghost buttons</Heading>
      <Button @click="onClick" size="xs" variant="ghost" id="checkbox-ghost-01">Some text (xs)</Button>
      <Button @click="onClick" size="sm" variant="ghost" id="checkbox-solid-02">Some text (sm)</Button>
      <Button @click="onClick" size="md" variant="ghost" id="checkbox-solid-03">Some text (md)</Button>
      <Button @click="onClick" size="lg" variant="ghost" id="checkbox-solid-04">Some text (lg)</Button>
      <Button @click="onClick" size="xl" variant="ghost" id="checkbox-solid-05">Some text (xl)</Button>
    </div>

    <div class="flex flex-col items-center gap-2">
      <Heading size="sm">Soft Buttons</Heading>
      <Button @click="onClick" size="xs" variant="soft" id="checkbox-soft-01">Some text (xs)</Button>
      <Button @click="onClick" size="sm" variant="soft" id="checkbox-soft-02">Some text (sm)</Button>
      <Button @click="onClick" size="md" variant="soft" id="checkbox-soft-03">Some text (md)</Button>
      <Button @click="onClick" size="lg" variant="soft" id="checkbox-soft-04">Some text (lg)</Button>
      <Button @click="onClick" size="xl" variant="soft" id="checkbox-soft-05">Some text (xl)</Button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Component: Button',
  description: 'Nuxt UI button components'
})

const onClick = (e) => {
  console.log('button works!')
}
</script>
