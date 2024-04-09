import { createApp } from 'vue'
import Toast from './Toast.vue'

let vmLen = 0
function showToast(_text: string, time = 2000) {
  const toastApp = createApp(Toast, {
    text: _text,

    getVmLen() {
      return vmLen
    },
    create() {
      vmLen++
    },
    destroy() {
      vmLen--
    }
  })

  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)
  const a = toastApp.mount(mountNode) // 手动挂载
  console.log(99, toastApp, a)

  setTimeout(() => {
    // toastApp.unmount()
    // document.body.removeChild(mountNode)
    // toastApp = undefined
    // console.log('unmount..', toastApp)
  }, time);
}

// 全局组件，挂载到vue原型
function regToast(app: any) {
  console.log('toast..', app)
  app.config.globalProperties.$toast = showToast
}

export default regToast

