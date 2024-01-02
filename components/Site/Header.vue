<template>
  <header class="flex flex-row justify-between gap-2 border-b border-primary-800 px-8 py-3">
    <NuxtLink to="/">
      <Heading>Nuxt UI Components</Heading>
    </NuxtLink>
    <div>
      <NuxtLink to="/buttons">
        <Button variant="ghost"> Buttons </Button>
      </NuxtLink>

      <NuxtLink to="/headings">
        <Button variant="ghost"> Headings </Button>
      </NuxtLink>

      <NuxtLink to="/input">
        <Button variant="ghost"> Input </Button>
      </NuxtLink>

      <NuxtLink to="/checkbox">
        <Button variant="ghost"> Checkbox </Button>
      </NuxtLink>

      <NuxtLink to="/textarea">
        <Button variant="ghost"> Textarea </Button>
      </NuxtLink>

      <NuxtLink to="/modals">
        <Button variant="ghost"> Modals </Button>
      </NuxtLink>

      <NuxtLink to="/slideover">
        <Button variant="ghost"> Slideover </Button>
      </NuxtLink>

      <NuxtLink to="/select">
        <Button variant="ghost"> Select </Button>
      </NuxtLink>

      <NuxtLink to="/accordion">
        <Button variant="ghost"> Accordion </Button>
      </NuxtLink>
    </div>
  </header>
</template>
