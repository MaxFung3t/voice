const state = {
		changeNum : 8 //初始化一个changeNum值
};
const getters = {
	changeClick:function(state) {  //承载变化的changeNum
		return state.changeNum
	}
}
const mutations = {
	add:function(state, n){ //如何变化changeNum,插入n
		state.changeNum += n;
	}
}
const actions = {
	addFunc:function(context, item){ //触发mutations里面的add ,传入数据形参item 对应到n
		context.commit('add', item);
	}
}
export default{
    namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
	state,
	getters,
	mutations,
	actions
}