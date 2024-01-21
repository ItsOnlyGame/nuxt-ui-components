<p align="center">
<img src="https://raw.githubusercontent.com/ItsOnlyGame/nuxt-ui-components/main/public/icon.svg" alt="Nuxt UI Components" width="300">
</p>

# Nuxt UI Components

This is a collection of UI components created in Nuxt 3.

#### NOTICE:
This is under development.  
Changes will occur and the project is still in early stages of development.  

## Why did I create this?

I got tired of different UI components with their somewhat limited styling.  
I was also wishing for of a "copy and paste" style of UI components.

I found out about [WindUI](https://wind-ui.com/components/buttons/) which is for React and gave the hard source code to different components. I enjoyed the experience of having full control of the components.

Now I just want the same experience in Nuxt.

## How does this work?

First you need to install these dependencies:

```bash
# npm
npm install tailwindcss tailwind-variants
npm install --save-dev nuxt-icon @hypernym/nuxt-anime

# yarn
yarn add tailwindcss tailwind-variants
yarn add --dev nuxt-icon @hypernym/nuxt-anime

# pnpm
pnpm add tailwindcss tailwind-variants
pnpm add -D nuxt-icon @hypernym/nuxt-anime
```

I suggest reading a bit more about tailwind-variants and how it works from here [Guide](https://www.tailwind-variants.org/docs/getting-started).

After that you need to copy everything from these folders to you own project:
- [ui-components](ui-components). Move to your components folder, or take example from nuxt.config.ts.
- [plugins](plugins)
- [composables](composables)