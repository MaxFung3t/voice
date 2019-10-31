import Vue from 'vue'
import Vuex from 'vuex'
import changeNum from '@/stores/modules/changeNum'
import city from '@/stores/modules/city'
Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		changeNum,
		city
	}
})