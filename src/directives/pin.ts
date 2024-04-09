// 固定在某个位置
const pin = {
  mounted(el: any, binding: any) {
    // 是否要定住
    const pinned = binding.value
    // 修饰符，表示固定在哪
    const position = binding.modifiers
    // 传给指令的参数，表示固定的重要程度
    const arg = binding.arg

    if (pinned) {
      el.style.position = 'fixed'
      if (arg === 'warning') {
        el.style.backgroundColor = 'pink'
      }
      for (const val in position) {
        if (position[val]) {
          el.style[val] = '10px'
        }
      }
    } else {
      el.style.position = 'static'
      el.style.backgroundColor = ''
    }
  }
}

export default pin