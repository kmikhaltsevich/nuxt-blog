export const state = () => ({
  // user: {}
})

export const mutations = {
  // setUser (state, userData) {
  //   state.user = userData
  // }
}

export const getters = {
  // getUser: state => !!state.user
}

export const actions = {
  async createUser ({ dispatch }, formData) {
    try {
      console.log(formData)
    } catch (e) {
      console.error(e)
    }
  }
}
