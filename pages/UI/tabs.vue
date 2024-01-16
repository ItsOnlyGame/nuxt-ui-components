<template>
  <div class="flex flex-col gap-12">
    <Heading size="sm">Default Tabs</Heading>

    <Tabs :tabs="tabs" width="default">
      <template #tab1>
        <p>
          Magna aliquip non esse anim dolore ad veniam eiusmod non. Nulla laborum consectetur nulla ex excepteur nulla
          mollit aliquip sit enim commodo sunt voluptate. Nulla do ad proident reprehenderit qui nisi voluptate et
          veniam.
        </p>
        <p>
          Sunt commodo pariatur sit qui labore exercitation magna do mollit. Magna enim culpa commodo laborum ut
          voluptate laboris eiusmod duis mollit nisi deserunt nulla. Lorem duis anim aute ipsum magna aliqua irure
          adipisicing dolore eiusmod laboris duis est.
        </p>
      </template>

      <template #tab2>
        <p>
          Ullamco anim pariatur est non minim cupidatat qui. Esse officia id ex laboris deserunt quis cillum Lorem quis
          voluptate. Dolore id aliqua sit nisi magna et labore reprehenderit eu laboris laborum velit. Eu aute labore
          amet eiusmod cillum mollit exercitation aliquip cillum minim deserunt sit incididunt. Tempor voluptate
          pariatur duis proident. Fugiat duis consequat aliqua non nisi ullamco exercitation dolor officia excepteur
          adipisicing eu cupidatat do. Esse enim voluptate labore amet consequat voluptate ipsum et ipsum.
        </p>
        <p>
          Magna aliquip non esse anim dolore ad veniam eiusmod non. Nulla laborum consectetur nulla ex excepteur nulla
          mollit aliquip sit enim commodo sunt voluptate. Nulla do ad proident reprehenderit qui nisi voluptate et
          veniam.
        </p>
      </template>

      <template #tab3>
        <p>
          Sunt commodo pariatur sit qui labore exercitation magna do mollit. Magna enim culpa commodo laborum ut
          voluptate laboris eiusmod duis mollit nisi deserunt nulla. Lorem duis anim aute ipsum magna aliqua irure
          adipisicing dolore eiusmod laboris duis est.
        </p>
        <p>
          Ullamco anim pariatur est non minim cupidatat qui. Esse officia id ex laboris deserunt quis cillum Lorem quis
          voluptate. Dolore id aliqua sit nisi magna et labore reprehenderit eu laboris laborum velit. Eu aute labore
          amet eiusmod cillum mollit exercitation aliquip cillum minim deserunt sit incididunt. Tempor voluptate
          pariatur duis proident. Fugiat duis consequat aliqua non nisi ullamco exercitation dolor officia excepteur
          adipisicing eu cupidatat do. Esse enim voluptate labore amet consequat voluptate ipsum et ipsum.
        </p>
      </template>
    </Tabs>

    <Heading size="sm">Full Width Tabs</Heading>

    <Tabs :tabs="tabs" width="full">
      <template #tab1>
        <p>
          Magna aliquip non esse anim dolore ad veniam eiusmod non. Nulla laborum consectetur nulla ex excepteur nulla
          mollit aliquip sit enim commodo sunt voluptate. Nulla do ad proident reprehenderit qui nisi voluptate et
          veniam.
        </p>
        <p>
          Sunt commodo pariatur sit qui labore exercitation magna do mollit. Magna enim culpa commodo laborum ut
          voluptate laboris eiusmod duis mollit nisi deserunt nulla. Lorem duis anim aute ipsum magna aliqua irure
          adipisicing dolore eiusmod laboris duis est.
        </p>
      </template>

      <template #tab2>
        <p>
          Ullamco anim pariatur est non minim cupidatat qui. Esse officia id ex laboris deserunt quis cillum Lorem quis
          voluptate. Dolore id aliqua sit nisi magna et labore reprehenderit eu laboris laborum velit. Eu aute labore
          amet eiusmod cillum mollit exercitation aliquip cillum minim deserunt sit incididunt. Tempor voluptate
          pariatur duis proident. Fugiat duis consequat aliqua non nisi ullamco exercitation dolor officia excepteur
          adipisicing eu cupidatat do. Esse enim voluptate labore amet consequat voluptate ipsum et ipsum.
        </p>
        <p>
          Magna aliquip non esse anim dolore ad veniam eiusmod non. Nulla laborum consectetur nulla ex excepteur nulla
          mollit aliquip sit enim commodo sunt voluptate. Nulla do ad proident reprehenderit qui nisi voluptate et
          veniam.
        </p>
      </template>

      <template #tab3>
        <p>
          Sunt commodo pariatur sit qui labore exercitation magna do mollit. Magna enim culpa commodo laborum ut
          voluptate laboris eiusmod duis mollit nisi deserunt nulla. Lorem duis anim aute ipsum magna aliqua irure
          adipisicing dolore eiusmod laboris duis est.
        </p>
        <p>
          Ullamco anim pariatur est non minim cupidatat qui. Esse officia id ex laboris deserunt quis cillum Lorem quis
          voluptate. Dolore id aliqua sit nisi magna et labore reprehenderit eu laboris laborum velit. Eu aute labore
          amet eiusmod cillum mollit exercitation aliquip cillum minim deserunt sit incididunt. Tempor voluptate
          pariatur duis proident. Fugiat duis consequat aliqua non nisi ullamco exercitation dolor officia excepteur
          adipisicing eu cupidatat do. Esse enim voluptate labore amet consequat voluptate ipsum et ipsum.
        </p>
      </template>
    </Tabs>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Component: Tabs',
  description: 'Nuxt UI tabs component'
})

const tabs = [
  { name: 'Tab 1', slot: 'tab1' },
  { name: 'Tab 2', slot: 'tab2' },
  { name: 'Tab 3', slot: 'tab3' }
]
</script>
