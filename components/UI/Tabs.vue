<template>
  <section :class="base()">
    <ul :class="tabList()" role="tablist">
      <li v-for="(tabData, index) in $props.tabs" :key="tabData.slot">
        <button
          :class="tab({ class: selectedSlot == index ? selectedTab() : '' })"
          role="tab"
          @click="() => (selectedSlot = index)"
        >
          <span>{{ tabData.name }}</span>
        </button>
      </li>
    </ul>
    <div :class="container()" role="tabpanel">
      <slot :name="$props.tabs[selectedSlot].slot" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const tabsTV = tv({
  slots: {
    base: 'max-w-full',
    tab: '-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none',
    selectedTab: '',
    tabList: 'flex items-center border-b border-slate-200',
    container: 'px-6 py-4'
  },
  variants: {
    variant: {
      default: {
        tab: 'border-transparent stroke-slate-700 text-slate-700 hover:border-primary-500 hover:bg-primary-50 hover:stroke-primary-600 hover:text-primary-500 focus:border-primary-600 focus:bg-primary-50 focus:stroke-primary-600 focus:text-primary-600',
        selectedTab:
          'border-primary-500 stroke-primary-500 text-primary-700 hover:border-primary-600 hover:bg-primary-50 hover:stroke-primary-600 hover:text-primary-600 focus:border-primary-700 focus:bg-primary-50 focus:stroke-primary-700 focus:text-primary-700'
      }
    },
    width: {
      default: {
        tabList: '*:w-max'
      },
      full: {
        tabList: '*:w-full'
      }
    }
  },
  defaultVariants: {
    width: 'default',
    variant: 'default'
  }
})

type Tab = {
  name: string
  slot: string
}

type TabsProps = VariantProps<typeof tabsTV>
type Props = {
  // Customization props
  width?: TabsProps['width']
  variant?: TabsProps['variant']

  // Slideover props
  tabs: Array<Tab>
}

const props = defineProps<Props>()

const { base, tab, selectedTab, container, tabList } = tabsTV({
  width: props.width,
  variant: props.variant
})

const selectedSlot = ref(0)
</script>
