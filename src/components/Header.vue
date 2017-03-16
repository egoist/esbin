<template>
  <header class="header">
    <div class="header__actions">
      <button @click="toggleActions">
        {{ showActions ? 'Hide Actions' : 'Show Actions' }}
      </button>
      <ul class="header__actions__list" v-show="showActions">
        <li
          class="header__action"
          @click="copyBinDir">
          Copy path to bin directory
        </li>
        <li
          class="header__action"
          @click="openDefaultBrowser">
          Open in default browser
        </li>
      </ul>
    </div>

    <div class="header__tabs">
      <div
        class="header__tab"
        :class="{'header__tab--visible': isActive('html')}"
        @click="toggleTab('html')">
        HTML
      </div>
      <div
        class="header__tab"
        :class="{'header__tab--visible': isActive('css')}"
        @click="toggleTab('css')">
        CSS
      </div>
      <div
        class="header__tab"
        :class="{'header__tab--visible': isActive('js')}"
        @click="toggleTab('js')">
        JS
      </div>
      <div
        class="header__tab"
        :class="{'header__tab--visible': isActive('output')}"
        @click="toggleTab('output')">
        Output
      </div>
      <div
        class="header__tab"
        :class="{'header__tab--visible': isActive('console')}"
        @click="toggleTab('console')">
        Console
      </div>
    </div>

    <div class="header__control">
    </div>
  </header>
</template>

<script>
  import { clipboard, shell } from 'electron'
  import { mapState, mapGetters, mapActions } from 'vuex'
  import toast from 'native-toast'

  export default {
    data() {
      return {
        showActions: false
      }
    },
    computed: {
      ...mapState(['tabs']),
      ...mapGetters(['paths', 'port'])
    },
    methods: {
      ...mapActions(['toggleTab']),
      isActive(tabName) {
        return this.tabs[tabName].visible
      },
      copyBinDir() {
        clipboard.writeText(this.paths.binDir)
        toast({
          type: 'success',
          message: `Copied: "${this.paths.binDir}"`,
          edge: true,
          position: 'top'
        })
      },
      openDefaultBrowser() {
        shell.openExternal(`http://localhost:${this.port}`)
      },
      toggleActions() {
        this.showActions = !this.showActions
      }
    }
  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f0f0f0;
    height: 40px;
    padding: 0 5px;
    border-bottom: 1px solid #e2e2e2;
  }

  .header>div {
    flex: 1;
  }

  .header__actions {
    position: relative;
  }

  .header__actions__list {
    position: absolute;
    top: 30px;
    left: 0;
    padding-left: 0;
    background-color: white;
    margin: 0;
    border: 1px solid rgb(204, 204, 204);
    box-shadow: 1px 3px 7px rgba(0, 0, 0, 0.1);
    border-top: none;
    z-index: 9999;
  }

  .header__action {
    padding: 10px;
    cursor: pointer;
  }

  .header__action:hover {
    background-color: #f9f9f9;
  }

  .header__tabs {
    display: flex;
    justify-content: center;
  }

  .header__tab {
    border: 1px solid #d4d4d4;
    padding: 5px 8px;
    cursor: pointer;
    user-select: none;
  }

  .header__tab:hover {
    background-color: white;
  }

  .header__tab:first-child {
    border-radius: 4px 0 0 4px;
  }

  .header__tab:not(:first-child) {
    margin-left: -1px;
  }

  .header__tab:last-child {
    border-radius: 0 4px 4px 0;
  }

  .header__tab--visible {
    border-color: #d6d6d6;
    background-color: #EBF3FF;
  }

  .header__control__icon {
    display: flex;
    cursor: pointer;
  }
</style>

<style>
  .header__control__icon svg {
    width: 24px;
    height: @width;
  }

  .header__control__icon:hover svg {
    fill: #EBF3FF;
  }
</style>
