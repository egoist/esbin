import { remote } from 'electron'

const { $data } = remote.getCurrentWindow()

export const state = {
  paths: $data.paths,
  port: $data.port
}

export const getters = {
  paths(state) {
    return state.paths
  },
  port(state) {
    return state.port
  }
}
