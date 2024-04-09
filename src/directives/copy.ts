const copy = {
  mounted: (el: any, binging: any) => {
    const copyFn = (event: any) => {
      navigator.clipboard.writeText(binging.value)
    }
    el.addEventListener('click', copyFn)
  }
}

export default copy
