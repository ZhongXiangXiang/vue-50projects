import { ref } from 'vue'

export default {
  template: `<div>
    {{message}}
    <div>count is: {{count}}</div>
  </div>`,
  setup() {
    const message = ref('hihi~222')
    const count = ref(12)

    return {
      message,
      count
    }
  }
}