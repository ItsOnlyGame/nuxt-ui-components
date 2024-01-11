<template>
  <div class="flex flex-col gap-8">
    <Heading size="sm">Default Toasts</Heading>

    <div class="flex flex-col gap-2">
      <Toast
        variant="default"
        size="sm"
        title="Default"
        description="Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim."
      />
      <Toast
        variant="default"
        size="md"
        title="Default"
        description="Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim."
      />
      <Toast
        variant="default"
        size="lg"
        title="Default"
        description="Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim."
      />
    </div>

    <div class="flex flex-col gap-2">
      <Toast
        variant="success"
        size="sm"
        title="Success"
        description="Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim."
      />
      <Toast
        variant="success"
        size="md"
        title="Success"
        description="Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim."
      />
      <Toast
        variant="success"
        size="lg"
        title="Success"
        description="Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim."
      />
    </div>

    <div class="flex flex-col gap-2">
      <Toast
        variant="warn"
        size="sm"
        title="Warn"
        description="Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim."
      />
      <Toast
        variant="warn"
        size="md"
        title="Warn"
        description="Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim."
      />
      <Toast
        variant="warn"
        size="lg"
        title="Warn"
        description="Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim."
      />
    </div>

    <div class="flex flex-col gap-2">
      <Toast
        variant="info"
        size="sm"
        title="Info"
        description="Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim."
      />
      <Toast
        variant="info"
        size="md"
        title="Info"
        description="Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim."
      />
      <Toast
        variant="info"
        size="lg"
        title="Info"
        description="Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim."
      />
    </div>

    <div class="flex flex-col gap-2">
      <Toast
        variant="error"
        size="sm"
        title="Error"
        description="Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim."
      />
      <Toast
        variant="error"
        size="md"
        title="Error"
        description="Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim."
      />
      <Toast
        variant="error"
        size="lg"
        title="Error"
        description="Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim."
      />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Component: Toasts',
  description: 'Nuxt UI toasts component'
})
</script>
