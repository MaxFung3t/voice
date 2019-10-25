import Vue from 'vue'

Vue.directive('title', {
	inserted: function(el, binding) {
		var s = JSON.stringify
		console.log("binding.name:" + binding.name);
		console.log("binding.value:" + binding.value +'~~~~~' + s(binding.value));
		console.log("binding.expression:" + binding.expression);
		console.log("binding.arg:" + binding.arg);
		console.log("binding.modifiers:" + binding.modifiers);
		
		el.innerHTML = binding.value;
	}
})
