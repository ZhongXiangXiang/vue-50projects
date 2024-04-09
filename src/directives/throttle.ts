const throttle = {
  mounted(el: any, binding: any) {
    const { fn, event, delay = 1000 } = binding.value
    if (typeof fn !== 'function' || !event) return

    el.timer = null
    el.throttleDandler = function () {
      console.log(22, el.timer)
      if (el.timer) {
        return
      }

      el.timer = setTimeout(() => {
        fn()
        el.timer = null
      }, delay)
    }
    el.addEventListener(event, el.throttleDandler)
  },
  unmounted(el: any, binding: any) {
    if (el.timer) {
      clearTimeout(el.timer)
      el.timer = null
    }
    el.removeEventListener(binding.value.event, el.throttleDandler)
  }
}

export default throttle
