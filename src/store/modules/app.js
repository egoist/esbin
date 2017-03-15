import { remote } from 'electron'

const { $data } = remote.getCurrentWindow()

export const state = {
  paths: $data.paths
}

export const getters = {
  paths(state) {
    return state.paths
  }
}
