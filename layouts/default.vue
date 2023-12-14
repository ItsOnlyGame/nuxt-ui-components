<template>
  <header class="flex flex-row gap-2 justify-between px-8 py-3 border-b border-primary-800">
    <NuxtLink to="/">
      <Heading>Nuxt UI Components</Heading>
    </NuxtLink>
    <div>
      <NuxtLink to="/buttons">
        <Button variant="ghost"> Buttons </Button>
      </NuxtLink>
    </div>
  </header>

  <main class="flex flex-col items-center gap-10 h-full p-8">
    <slot />
  </main>
</template>
