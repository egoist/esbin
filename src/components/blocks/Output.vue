<template>
  <div
    class="main__output"
    :class="{'main__block--focus': focus}">
    <div class="block__header">
      Output
    </div>
    <iframe
      ref="iframe"
      frameborder="0"
      width="100%"
      class="main__output__iframe"
      :src="`http://localhost:${port}`">
    </iframe>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import toggleFocusMixin from '@/mixins/toggle-focus'

  export default {
    mixins: [toggleFocusMixin],
    computed: {
      ...mapGetters(['port'])
    },
    mounted() {
      window.addEventListener('message', ({data}) => {
        if (data.type === 'focus-output') {
          this.toggleFocus(true)
        } else if (data.type === 'blur-output') {
          this.toggleFocus(false)
        }
      })
    }
  }
</script>

<style scoped>
  .main__output {
    overflow: hidden;
  }

  .main__output__iframe {
    height: 100%;
  }
</style>
