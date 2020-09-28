export const state = () => ({
  snackBar: {
    active: false,
    text: ''
  }
})

export const mutations = {
  openSnackBar (state, data) {
    state.snackBar = {
      active: data.active,
      text: data.text
    }
  },
  closeSnackBar (state) {
    state.snackBar = {
      active: false,
      text: ''
    }
  }
}

export const getters = {
  getSnackBar: state => state.snackBar
}

export const actions = {
  async openNotification ({ state, commit }, data) {
    if (state.snackBar.active) {
      await commit('closeSnackBar')
      return setTimeout(() => { commit('openSnackBar', data) }, 400)
    }
    commit('openSnackBar', data)
  }
}
