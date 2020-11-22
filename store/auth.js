export const state = () => ({
  token: null
})

export const mutations = {
  setToken (state, token) {
    state.token = token
  }
}

export const getters = {
  isAuthenticated: state => !!state.token
}

export const actions = {
  async onLogin ({ dispatch }, formData) {
    const token = await new Promise(resolve => {
      setTimeout(() => resolve('mock-token'), 500)
    })
    dispatch('setToken', token)
  },
  async onLogout ({ dispatch }) {
    await dispatch('setToken', null)
  },
  setToken ({ commit }, token) {
    commit('setToken', token)
  }
}
