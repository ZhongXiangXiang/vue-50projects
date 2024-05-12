import { onMounted, onUnmounted, ref } from 'vue'
import { useEventListener } from './useEvent'

export function useMouse() {
  // 封装管理的状态
  const x = ref(0)
  const y = ref(0)

  // 组合式函数可随时更改其状态
  function update(event: MouseEvent) {
    x.value = event.pageX
    y.value = event.pageY
  }

  useEventListener(window, 'mousemove', update)
  // onMounted(() => window.addEventListener('mousemove', update))
  // onUnmounted(() => window.removeEventListener('mousemove', update))

  // 通过返回值暴露所管理的状态
  return { x, y }
}