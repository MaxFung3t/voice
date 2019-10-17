import Vue from 'vue'
import Vuex from 'vuex'
import changeNum from '@/stores/modules/changeNum'
Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		changeNum
	}
})

// const state = {
// 	changeNum : 8 //初始化一个changeNum值
// };
// const getters = {
// changeClick:function(state) {  //承载变化的changeNum
// 	return state.changeNum
// }
// }
// const mutations = {
// add:function(state, n){ //如何变化changeNum,插入n
// 	state.changeNum += n;
// }
// }
// const actions = {
// addFunc:function(context, item){ //触发mutations里面的add ,传入数据形参item 对应到n
// 	context.commit('add', item);
// }
// }
// export default new Vuex.Store({
// 	state,
// 	getters,
// 	mutations,
// 	actions
// })
