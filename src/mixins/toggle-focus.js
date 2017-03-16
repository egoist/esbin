export default {
  data() {
    return {
      focus: false
    }
  },
  mounted() {
    this.$options.blockType && this.$watch('isVisible', visible => {
      if (visible) {
        this.editor.refresh()
        this.editor.focus()
      }
    })
  },
  computed: {
    isVisible() {
      return this.$options.blockType &&
       this.$store.state.tabs[this.$options.blockType].visible
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
