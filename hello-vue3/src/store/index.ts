import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

type Computed = () => any;
// interface loggingIdentity<T> {
//   count: number;
//   //T就是 使用的时候传过来的类型
//   // number:T
// }

// const moduleA = {
//   state: {count:0},
//   mutations: { 
//     increment(state:loggingIdentity<number>){
//       state.count++
//     }
//   },
//   actions: {
//     increment (context :any) {
//       context.commit('increment')
//     }
//   },
//   getters: { 
//     //es6里面的get
//   }
// }

export default new Vuex.Store({
  state: {
    name:"wangLi",
    name1:"wangLi1",
    name2:"wangLi2",
    message:'hello'
  },
  mutations: {
    change:(state,name)=>{
      state.name = name;
    },
    updateMessage:(state,msg)=>{
      state.message = msg;
    }
  },
  /**
   * 里面可以写同步actions 和 异步actions 
   * 并且可以和 async/await组合 并发多个action
   */
  actions: { 
    increment (context,user) {
      context.commit('change',user.name)
    }
  },
  modules: {
    //拆分不同的reduser
    // moduleA
  }
});
