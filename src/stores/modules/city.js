const state = {
	nm: '北京',
	id: 1
}
const getters = {
	
}
const mutations = {
	CITY_INFO(state , payload){
		state.nm = payload.nm;
		state.id = payload.id;
	}
}
const actions = {
	
}
export default{
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}