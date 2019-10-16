import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	showFooter: true,
  	changableNum: 0
  },
  mutations: {
  	show(state){
  		state.showFooter = true;
  	},
  	hide(state){
  		state.showFooter = false;
  	},
  	newNum(state,sum){
  		state.changableNum += sum;
  	}
  },
  actions: {

  },
  getters:{
  	isShow(state){
  		return state.showFooter;
  	},
  	getChangedNum(){
  		return state.changebleNum
  	}
  }
})
