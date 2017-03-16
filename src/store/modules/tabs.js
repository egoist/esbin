export const state = {
  html: {
    visible: false
  },
  js: {
    visible: true
  },
  output: {
    visible: true
  },
  css: {
    visible: false
  },
  console: {
    visible: false
  }
}

export const mutations = {
  TOGGLE_TAB(state, tabName) {
    state[tabName].visible = !state[tabName].visible
  }
}

export const actions = {
  toggleTab({ commit }, tabName) {
    commit('TOGGLE_TAB', tabName)
  }
}
