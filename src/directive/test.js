import Vue from 'vue'

Vue.directive('test',{
	bind(){
		console.log('bind');
	},
	inserted(){
		console.log('inserted');
	},
	updated(){
		console.log('updated')
	},
	componentUpdated(){
		console.log('componentUpdated')
	},
	unbind(){
		console.log('unbind')
	}
})