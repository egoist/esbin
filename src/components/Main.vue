<template>
  <section class="main">
    <block-html
      class="main__block"
      v-show="isVisible('html')"
      :content="files.html">
    </block-html>
    <block-js
      class="main__block"
      v-show="isVisible('js')"
      :content="files.js">
    </block-js>
    <block-output
      v-show="isVisible('output')"
      class="main__block">
    </block-output>
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  import BlockHtml from '@/components/blocks/Html'
  import BlockJs from '@/components/blocks/Js'
  import BlockOutput from '@/components/blocks/Output'

  export default {
    props: ['files'],
    computed: {
      ...mapState(['tabs'])
    },
    methods: {
      isVisible(tabName) {
        return this.tabs[tabName].visible
      }
    },
    components: {
      BlockHtml,
      BlockJs,
      BlockOutput
    }
  }
</script>

<style src="codemirror/lib/codemirror.css"></style>

<style>
  .main {
    height: calc(100% - 40px);
    display: flex;
  }

  .main__block,
  .CodeMirror {
    height: 100%;
    background-color: transparent;
  }

  .main__block:not(:last-child) {
    border-right: 1px solid #e2e2e2;
  }

  .main__block {
    flex-grow: 1;
    width: 0;
  }

  .main__block--focus {
    background-color: white;
  }
</style>
