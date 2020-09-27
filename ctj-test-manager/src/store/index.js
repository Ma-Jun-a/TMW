import { createStore } from 'vuex'

export default createStore({
  state: {
    token: false,
    auth: true
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
  },
  actions: {
  },
  modules: {
  }
})
