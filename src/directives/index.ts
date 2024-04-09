import type { App } from 'vue'
import trim from './trim'
import focus from './focus'
import copy from './copy'
import debounce from './debounce'
import throttle from './throttle'
import pin from './pin'

const directives: any = {
  trim,
  focus,
  copy,
  debounce,
  throttle,
  pin
}

export default {
  install(app: App<Element>, options: any) {
    console.log('install dir', options)
    Object.keys(directives).forEach(dir => {
      app.directive(dir, directives[dir])
    })
  }
}