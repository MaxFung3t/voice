const state = {
	nm: window.localStorage.getItem('cityNm') || '北京',
	id: window.localStorage.getItem('cityId') || 1
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