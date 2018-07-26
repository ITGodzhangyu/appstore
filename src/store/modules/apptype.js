const apptype = {
  state: {
    type: '',
    name: '',
    appid:''
  },
  mutations: {
    SET_APPTYPE: (state, type) => {
      state.type = type
    },
    SET_APPNAME: (state, name) => {
      state.name = name
    },
    SET_APPID: (state, appid) => {
      state.appid = appid
    }
  }
}

export default apptype
