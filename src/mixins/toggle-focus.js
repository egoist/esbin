export default {
  data() {
    return {
      focus: false
    }
  },
  methods: {
    toggleFocus(payload) {
      this.focus = typeof payload === 'boolean' ?
        payload :
       !this.focus
    }
  }
}
