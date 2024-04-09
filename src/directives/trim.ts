

const trim = {
  mounted: (el: any, binging: any, vnode: any) => {
    const trimFn = (event: any) => {
      // event.target.value = event.target.value.trim()
      el.value = el.value.trim()
    }
    const keydownFn = function (event: KeyboardEvent) {
      console.log('keydown.', event, event.key, event.keyCode)
      if (event.keyCode === 13) {
        trimFn(event)
      }
    }

    el.__blurHandler__ = trimFn
    el.__keyHandler__ = keydownFn

    el.addEventListener('blur', trimFn)
    el.addEventListener('keydown', keydownFn)
  },
  unmounted(el: any) {
    el.removeEventListener('blur', el.__blurHandler__)
    el.removeEventListener('keydown', el.__keyHandler__)
  }
}

// export default {
//   install: (app: App<Element>, options: any) => {
//     console.log('trim', app, options)
//     app.directive('trim', trim)
//   }
// }

export default trim