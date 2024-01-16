<template>
  <div class="flex flex-col gap-8">
    <Heading size="sm">Alerts</Heading>

    <Heading size="sm">Default Alerts</Heading>

    <div class="flex flex-col gap-2">
      <Alert variant="default" size="sm" title="Default">
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
      <Alert variant="default" size="md" title="Default">
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
      <Alert variant="default" size="lg" title="Default">
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
    </div>

    <div class="flex flex-col gap-2">
      <Alert variant="success" size="sm" title="Success">
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
      <Alert variant="success" size="md" title="Success">
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
      <Alert variant="success" size="lg" title="Success">
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
    </div>

    <div class="flex flex-col gap-2">
      <Alert variant="warn" size="sm" title="Warn">
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
      <Alert variant="warn" size="md" title="Warn">
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
      <Alert variant="warn" size="lg" title="Warn">
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
    </div>

    <div class="flex flex-col gap-2">
      <Alert variant="info" size="sm" title="Info">
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
      <Alert variant="info" size="md" title="Info">
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
      <Alert variant="info" size="lg" title="Info">
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
    </div>

    <div class="flex flex-col gap-2">
      <Alert variant="error" size="sm" title="Error">
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
      <Alert variant="error" size="md" title="Error">
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
      <Alert variant="error" size="lg" title="Error">
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
    </div>

    <Heading size="sm">Hidden Icon Alerts</Heading>

    <div class="flex flex-col gap-2">
      <Alert variant="default" size="sm" title="Default" hide-icon>
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
      <Alert variant="default" size="md" title="Default" hide-icon>
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
      <Alert variant="default" size="lg" title="Default" hide-icon>
        <p>Deserunt ad eu duis dolor sit aute aliquip do ex ex ullamco commodo enim.</p>
      </Alert>
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
