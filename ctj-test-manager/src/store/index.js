import { createStore } from 'vuex'

export default createStore({
  state: {
    token: false,
    auth: true,
    user: '',
    project: '',
    version: '',
    api: '',
    script: '',
  },
  mutations: {
    // changestate(state) {
    //   state.token = true
    // },
    // login(state,n){
    //   state.token=true;
    //   state.username=n;
    //   // sessionStorage.setItem('isLogin',true);
    //   sessionStorage.setItem('name',n);  //用于全局展示是谁登录系统
    // },
    // 为面包屑组件所使用
    saveinfo(state,data) {
      if (data.project) {
        state.project = data.project
      } else if (data.version) {
        state.version = data.version
      } else if (data.api) {
        state.api = data.api
      } else if (data.script) {
        state.script = data.script
      } else {
        console.log("saveinfo function error")
      }




    }
  },
  actions: {
  },
  modules: {
  }
})
