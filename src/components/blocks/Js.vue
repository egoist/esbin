<template>
  <div
    class="main__js"
    :class="{'main__block--focus': focus}">
    <div class="block__header">
      JavaScript
    </div>
    <textarea ref="textarea">{{ content }}</textarea>
  </div>
</template>

<script>
  import path from 'path'
  import CodeMirror from 'codemirror'
  import 'codemirror/addon/selection/active-line'
  import 'codemirror/addon/edit/matchbrackets'
  import 'codemirror/mode/jsx/jsx'
  import fs from 'fs-promise'
  import { mapGetters } from 'vuex'
  import { ctrl } from '@/utils'
  import toggleFocusMixin from '@/mixins/toggle-focus'

  export default {
    blockType: 'js',
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
        CodeMirror.commands.SaveJs = e => {
          this.handleSave(e.getValue())
        }

        this.editor = CodeMirror.fromTextArea(this.$refs.textarea, {
          mode: 'jsx',
          lineNumbers: true,
          lineWrapping: true,
          autofocus: true,
          styleActiveLine: true,
          matchBrackets: true
        })

        this.editor.setOption('extraKeys', {
          Tab(cm) {
            const spaces = Array(cm.getOption('indentUnit') + 1).join(' ')
            cm.replaceSelection(spaces)
          },
          [`${ctrl}-S`]: 'SaveJs'
        })

        this.editor.on('focus', () => {
          this.toggleFocus()
          window.postMessage({ type: 'blur-output' }, '*')
        })
        this.editor.on('blur', () => this.toggleFocus())
      },
      async handleSave(content) {
        const filePath = path.join(this.paths.binDir, 'index.js')
        await fs.writeFile(filePath, content, 'utf8')
      }
    }
  }
</script>
