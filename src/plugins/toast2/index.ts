import { createApp, type App } from "vue";
import Toast from './Toast.vue'

let wrapper: HTMLDivElement
function showToast(txt: string, type: string, time = 2000) {
  let toastApp: App<Element> | undefined = createApp(Toast, {
    text: txt,
    type
  })

  if (!wrapper) {
    wrapper = document.createElement('div')
    wrapper.classList.add('my-toast')
    document.body.appendChild(wrapper)
  }

  const node = document.createElement('div')
  wrapper.appendChild(node)
  toastApp.mount(node)

  setTimeout(() => {
    // 卸载，添加淡出动画
    // 使用animate.css
    node.classList.add('animate__animated')
    node.classList.add('animate__fadeOutUp')
    setTimeout(() => {
      (toastApp as App<Element>).unmount()
      node.remove()
      toastApp = undefined
    }, 1000)
  }, time)
}

// 全局组件，挂载到vue原型
function regToast(app: any) {
  app.config.globalProperties.$toast2 = showToast
}

export default regToast
