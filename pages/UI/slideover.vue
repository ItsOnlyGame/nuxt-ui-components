<template>
  <div class="flex flex-col gap-12">
    <Heading size="sm">Default Slideover</Heading>

    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex w-full max-w-lg flex-col gap-4">
        <Button @click="() => (slideovers[0] = true)">Show slideover (sm)</Button>
        <Button @click="() => (slideovers[1] = true)">Show slideover (md)</Button>
        <Button @click="() => (slideovers[2] = true)">Show slideover (lg)</Button>
      </div>
    </div>

    <Slideover :open="slideovers[0]" @close="() => (slideovers[0] = false)" size="sm">
      <template #header>
        <Heading size="xs" color="white">Slideover (sm)</Heading>
      </template>

      <div class="px-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ut nibh euismod ultricies. Morbi
          facilisis luctus sem sed tristique. Quisque a lacus eros. Duis vehicula magna eget justo condimentum lobortis.
          In molestie placerat feugiat. Donec tempus tortor id rutrum finibus. Maecenas ut convallis tellus, vel
          facilisis eros. Maecenas lobortis odio tellus, a rhoncus augue vehicula quis. In quis consectetur libero, et
          semper enim. Fusce sapien augue, sodales eu libero ut, suscipit semper dolor.
        </p>
        <p>
          Ut mattis quam sit amet tincidunt ornare. Sed sed tellus id nisi hendrerit laoreet eu id libero. Nam varius
          dictum tellus, sed malesuada odio viverra vel. In suscipit elit arcu, id sollicitudin purus sagittis a.
          Quisque gravida ac eros nec faucibus. Integer luctus magna at tellus consectetur accumsan. Nulla ut feugiat
          dui, sed imperdiet mi. Phasellus finibus dolor et enim venenatis porttitor.
        </p>
      </div>
    </Slideover>

    <Slideover :open="slideovers[1]" @close="() => (slideovers[1] = false)" size="md">
      <template #header>
        <Heading size="xs" color="white">Slideover (md)</Heading>
      </template>

      <div class="px-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ut nibh euismod ultricies. Morbi
          facilisis luctus sem sed tristique. Quisque a lacus eros. Duis vehicula magna eget justo condimentum lobortis.
          In molestie placerat feugiat. Donec tempus tortor id rutrum finibus. Maecenas ut convallis tellus, vel
          facilisis eros. Maecenas lobortis odio tellus, a rhoncus augue vehicula quis. In quis consectetur libero, et
          semper enim. Fusce sapien augue, sodales eu libero ut, suscipit semper dolor.
        </p>
        <p>
          Ut mattis quam sit amet tincidunt ornare. Sed sed tellus id nisi hendrerit laoreet eu id libero. Nam varius
          dictum tellus, sed malesuada odio viverra vel. In suscipit elit arcu, id sollicitudin purus sagittis a.
          Quisque gravida ac eros nec faucibus. Integer luctus magna at tellus consectetur accumsan. Nulla ut feugiat
          dui, sed imperdiet mi. Phasellus finibus dolor et enim venenatis porttitor.
        </p>
      </div>
    </Slideover>

    <Slideover :open="slideovers[2]" @close="() => (slideovers[2] = false)" size="lg">
      <template #header>
        <Heading size="xs" color="white">Slideover (xl)</Heading>
      </template>

      <div class="px-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ut nibh euismod ultricies. Morbi
          facilisis luctus sem sed tristique. Quisque a lacus eros. Duis vehicula magna eget justo condimentum lobortis.
          In molestie placerat feugiat. Donec tempus tortor id rutrum finibus. Maecenas ut convallis tellus, vel
          facilisis eros. Maecenas lobortis odio tellus, a rhoncus augue vehicula quis. In quis consectetur libero, et
          semper enim. Fusce sapien augue, sodales eu libero ut, suscipit semper dolor.
        </p>
        <p>
          Ut mattis quam sit amet tincidunt ornare. Sed sed tellus id nisi hendrerit laoreet eu id libero. Nam varius
          dictum tellus, sed malesuada odio viverra vel. In suscipit elit arcu, id sollicitudin purus sagittis a.
          Quisque gravida ac eros nec faucibus. Integer luctus magna at tellus consectetur accumsan. Nulla ut feugiat
          dui, sed imperdiet mi. Phasellus finibus dolor et enim venenatis porttitor.
        </p>
      </div>
    </Slideover>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Component: Slideover',
  description: 'Nuxt UI slideover component'
})

const slideovers = reactive([false, false, false])
</script>
