<template>
  <div class="flex flex-col gap-8">
    <ToastGroup />

    <Heading size="sm">Toast Group</Heading>

    <div class="flex w-full flex-row flex-wrap justify-evenly gap-6">
      <div class="flex w-full max-w-lg flex-col gap-4">
        <Button @click="() => createToast('default')">Show default toast</Button>
        <Button @click="() => createToast('success')">Show success toast</Button>
        <Button @click="() => createToast('warn')">Show warn toast</Button>
        <Button @click="() => createToast('info')">Show info toast</Button>
        <Button @click="() => createToast('error')">Show error toast</Button>
      </div>
    </div>

    <Heading size="sm">Toasts</Heading>

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

<script setup lang="ts">
definePageMeta({
  title: 'Component: Toasts',
  description: 'Nuxt UI toasts component'
})

const toast = useToast()

const createToast = (type: Toast['type']) => {
  toast.add({
    title: 'Aliquip cupidatat dolor',
    description: 'Sit velit mollit eiusmod tempor quis dolore.',
    type: type,
    timeout: 3000
  })
}
</script>
