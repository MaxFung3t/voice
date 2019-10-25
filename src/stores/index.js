import Vue from 'vue'
import Vuex from 'vuex'
import changeNum from '@/stores/modules/changeNum'
Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		changeNum
	}
})