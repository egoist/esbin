<template>
  <div id="app">
    <esbin-header></esbin-header>
    <esbin-main :files="files" v-if="files"></esbin-main>
  </div>
</template>

<script>
  import path from 'path'
  import EsbinHeader from '@/components/Header'
  import EsbinMain from '@/components/Main'
  import { fs } from '@/utils'
  import { mapGetters } from 'vuex'

  export default {
    name: 'app',
    data() {
      return {
        files: null
      }
    },
    computed: {
      ...mapGetters(['paths'])
    },
    async created() {
      await this.readSeedFiles()
    },
    methods: {
      async readSeedFiles() {
        const [html, js, css] = await Promise.all([
          'index.html', 'index.js', 'style.css'
        ].map(name => fs.readFile(path.join(this.paths.binDir, name), 'utf8')))

        this.files = {
          html, js, css
        }
      }
    },
    components: {
      EsbinHeader,
      EsbinMain
    }
  }
</script>

<style>
  html, body, #app {
    height: 100%;
  }
  body {
    background-color: #f9f9f9;
    margin: 0;
    font: 14px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
  * {
    box-sizing: border-box;
  }
</style>
