<template>
  <header class="header">
    <div class="header__logo">
      <button>Copy path to bin</button>
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
        :class="{'header__tab--active': isActive('console')}"
        @click="toggleTab('console')">
        Console
      </div>
    </div>

    <div class="header__control">
    </div>
  </header>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState(['tabs']),
      ...mapGetters(['paths'])
    },
    methods: {
      ...mapActions(['toggleTab']),
      isActive(tabName) {
        return this.tabs[tabName].visible
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
    padding: 0 10px;
    border-bottom: 1px solid #e2e2e2;
  }

  .header>div {
    flex: 1;
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
