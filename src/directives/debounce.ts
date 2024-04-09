
const debounce = {
  mounted(el: any, binding: any) {
    const { fn, event, delay = 300 } = binding.value
    if (typeof fn !== 'function' || !event) return

    el.timer = null

    el.debounceHandler = function () {
      if (el.timer) {
        clearTimeout(el.timer)
        el.timer = null // 置为null，表明手动清除了定时器
      }

      el.timer = setTimeout(() => {
        fn()
        el.timer = null // 置为null，定时器已触发
      }, delay)
    }

    el.addEventListener(event, el.debounceHandler)
  },
  unmounted(el: any, binding: any) {
    if (el.timer) {
      clearTimeout(el.timer)
      el.timer = null
    }
    el.removeEventListener(binding.value.event, el.debounceHandler)
  }
}

export default debounce
