<template>
  <main class="flex flex-col items-center gap-10 h-full p-8">
    <div class="flex flex-col items-center gap-2 w-32">
      <h2 class="text-slate-100">Solid buttons</h2>
      <Button @click="onClick" size="xs">Some text (xs)</Button>
      <Button @click="onClick" size="sm">Some text (sm)</Button>
      <Button @click="onClick" size="md">Some text (md)</Button>
      <Button @click="onClick" size="lg">Some text (lg)</Button>
      <Button @click="onClick" size="xl">Some text (xl)</Button>
    </div>

    <div class="flex flex-col items-center gap-2 w-32">
      <h2 class="text-slate-100">Ghost buttons</h2>
      <Button @click="onClick" size="xs" type="ghost">Some text (xs)</Button>
      <Button @click="onClick" size="sm" type="ghost">Some text (sm)</Button>
      <Button @click="onClick" size="md" type="ghost">Some text (md)</Button>
      <Button @click="onClick" size="lg" type="ghost">Some text (lg)</Button>
      <Button @click="onClick" size="xl" type="ghost">Some text (xl)</Button>
    </div>

    <div class="flex flex-col items-center gap-2 w-32">
      <h2 class="text-slate-100">Buttons</h2>
      <Button @click="onClick" size="xs" type="outline">Some text (xs)</Button>
      <Button @click="onClick" size="sm" type="outline">Some text (sm)</Button>
      <Button @click="onClick" size="md" type="outline">Some text (md)</Button>
      <Button @click="onClick" size="lg" type="outline">Some text (lg)</Button>
      <Button @click="onClick" size="xl" type="outline">Some text (xl)</Button>
    </div>
  </main>
</template>

<script setup>

const onClick = (e) => {
  console.log('button works!')
}

</script>
