<template>
  <div class="flex flex-col gap-12">
    <div>
      <span> Current page: {{ currentPage }} </span>
    </div>

    <Heading size="sm">Default pagination</Heading>
    <div class="flex flex-col items-center gap-12">
      <div class="flex flex-col gap-2">
        <Pagination :count="10" :page="currentPage" @change="changePage" size="sm" variant="default" />
        <Pagination :count="10" :page="currentPage" @change="changePage" size="md" variant="default" />
        <Pagination :count="10" :page="currentPage" @change="changePage" size="lg" variant="default" />
      </div>

      <div class="flex flex-col gap-2">
        <Pagination :count="10" :page="currentPage" @change="changePage" size="sm" variant="default" show-first-button="true" show-last-button="true" />
        <Pagination :count="10" :page="currentPage" @change="changePage" size="md" variant="default" show-first-button="true" show-last-button="true" />
        <Pagination :count="10" :page="currentPage" @change="changePage" size="lg" variant="default" show-first-button="true" show-last-button="true" />
      </div>

      <div class="flex flex-col gap-2">
        <Pagination :count="5" :page="currentPage" @change="changePage" size="sm" variant="default" />
        <Pagination :count="5" :page="currentPage" @change="changePage" size="md" variant="default" />
        <Pagination :count="5" :page="currentPage" @change="changePage" size="lg" variant="default" />
      </div>

      <div class="flex flex-col gap-2">
        <Pagination :count="5" :page="currentPage" @change="changePage" size="sm" variant="default" show-first-button="true" show-last-button="true" />
        <Pagination :count="5" :page="currentPage" @change="changePage" size="md" variant="default" show-first-button="true" show-last-button="true" />
        <Pagination :count="5" :page="currentPage" @change="changePage" size="lg" variant="default" show-first-button="true" show-last-button="true" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Component: Pagination',
  description: 'Nuxt UI pagination components'
})

const currentPage = ref(0)

const changePage = (page: number) => {
  currentPage.value = page
}
</script>
