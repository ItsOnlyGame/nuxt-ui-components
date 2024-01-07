// Directive that handles click events outside of the element this directive is attached to.
// v-click-outside

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted(el, binding) {
      el.clickOutsideEvent = function (event: Event) {
        // here I check that click was outside the el and his children
        if (!(el == event.target || el.contains(event.target))) {
          // and if it did, change data from directive
          binding.value(event)
        }
      }
      document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted(el) {
      document.body.removeEventListener('click', el.clickOutsideEvent)
    },
    getSSRProps() {
      // you can provide SSR-specific props here
      return {}
    }
  })
})
