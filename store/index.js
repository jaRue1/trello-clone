const actions = {
  async onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      // remove state
      state.commit('SET_USER', null)

      //redirect user to signin
      this.$router.push({
        path: '/auth/signin',
      })
    } else {
      const { uid, email } = authUser
      state.commit('SET_USER', {
        uid,
        email,
      })
    }
  },
}
// defining state
const state = () => ({
  user: null,
})
// defining a way to change the state
const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
}
// getting the current state of a user
const getters = {
  getUser(state){
    return state.user
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}