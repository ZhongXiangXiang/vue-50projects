import { onMounted, onUnmounted } from 'vue'

export function useEventListener(target: HTMLElement | Window, event: string, cb: any) {
  onMounted(() => target.addEventListener(event, cb))
  onUnmounted(() => target.removeEventListener(event, cb))
}