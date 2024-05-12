import { isRef, type Ref, ref } from "vue";
// import type { Ref } from "vue";
import { useEventListener } from '@vueuse/core'

// 泛型
type MaybeRef<T> = T | Ref<T>

interface Position {
  x: number
  y: number
}

interface dragOptions {
  initPosition?: Position
}

// 或者直接使用vue的全局api toValue
function toValue<T>(el: MaybeRef<T>): T {
  console.log('toValue', el)
  if (isRef(el)) {
    return el.value
  }
  return el
}

export function useDraggable(el: MaybeRef<HTMLElement | undefined | null>, options: dragOptions) {
  if (!el) {
    return
  }

  const style = ref('')

  let isDragging = false

  // 保存鼠标点击的位置距el的左边距和上边距
  const positionToEl = {
    x: 0,
    y: 0
  }

  function start(event: any) {
    isDragging = true
    // const { left, top } = (toValue(el) as HTMLElement).getBoundingClientRect()
    // ! 非空断言运算符，使编译器忽略undefined和null类型
    const { left, top } = toValue(el)!.getBoundingClientRect()
    positionToEl.x = event.pageX - left
    positionToEl.y = event.pageY - top
    console.log('start', event.pageX, event.pageY, positionToEl)
  }

  function move(event: any) {
    if (!isDragging) {
      return
    }

    style.value = `top: ${event.pageY - positionToEl.y}px; left: ${event.pageX - positionToEl.x
      }px;cursor:move;`
  }

  function end(event: any) {
    console.log('up', event.pageX, event.pageY)
    isDragging = false
  }

  useEventListener(el, 'pointerdown', start, true)
  useEventListener(window, 'pointermove', move)
  useEventListener(el, 'pointerup', end)

  return {
    style
  }
}
