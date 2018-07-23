const apptype = {
  state: {
    type: '',
    name: ''
  },
  mutations: {
    SET_APPTYPE: (state, type) => {
      state.type = type
    },
    SET_APPNAME: (state, name) => {
      state.name = name
    }
  }
}

export default apptype
