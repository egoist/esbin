<template>
  <div
    class="main__css"
    :class="{'main__block--focus': focus}">
    <div class="block__header">
      CSS
    </div>
    <textarea ref="textarea">{{ content }}</textarea>
  </div>
</template>

<script>
  import path from 'path'
  import CodeMirror from 'codemirror'
  import 'codemirror/addon/selection/active-line'
  import 'codemirror/mode/css/css'
  import fs from 'fs-promise'
  import { mapGetters } from 'vuex'
  import { ctrl } from '@/utils'
  import toggleFocusMixin from '@/mixins/toggle-focus'

  export default {
    blockType: 'css',
    props: ['content'],
    mixins: [toggleFocusMixin],
    mounted() {
      this.setupEditor()
    },
    computed: {
      ...mapGetters(['paths'])
    },
    methods: {
      setupEditor() {
        this.editor = CodeMirror.fromTextArea(this.$refs.textarea, {
          mode: 'css',
          lineNumbers: true,
          lineWrapping: true,
          styleActiveLine: true
        })

        this.editor.setOption('extraKeys', {
          Tab(cm) {
            const spaces = Array(cm.getOption('indentUnit') + 1).join(' ')
            cm.replaceSelection(spaces)
          }
        })

        this.editor.on('change', e => {
          this.handleSave(e.getValue())
        })

        this.editor.on('focus', () => {
          this.toggleFocus()
          window.postMessage({ type: 'blur-output' }, '*')
        })

        this.editor.on('blur', () => this.toggleFocus())
      },
      async handleSave(content) {
        const filePath = path.join(this.paths.binDir, 'style.css')
        await fs.writeFile(filePath, content, 'utf8')
      }
    }
  }
</script>
