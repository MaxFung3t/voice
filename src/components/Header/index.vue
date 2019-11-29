<template>
	<header id="header">
		<slot></slot>
		<h1>{{ title }}</h1>
	</header>
</template>

<script>
import bus from '@/event/EventBus';
export default {
	name: 'Header',
	components: {},
	props: {
		title:{
			type: String,
			default:'电影'
		}
	},
	data() {
		return {
			name: ''
		};
	},
	watch: {
		$route(newVal, oldVal) {
			console.log(oldVal);
		}
	},
	computed: {},
	methods: {},
	created() {},
	mounted() {
		// console.log('222222'+this.$route.path)
		// switch(this.$route.path){
		// 	case '/movie/nowPlaying':
		// 		this.name = 'dianying';
		// 	case '/cinema':
		// 		this.name = 'yingyuan'
		// 	case '/mine':
		// 	this.name = 'wode'
		// }
		// console.log(this.$route)
		// bus.$off('busClick');
		// bus.$on('busClick', val => {
		// 	console.log(val);
		// 	this.content = val.name;
		// });
	}
	// beforeDestroy() {
	// 	bus.$off('busClick');
	// }
};
</script>
<style scoped>
#header{width:100%; height:50px; color: #fff; background: #e54847; border-bottom: 1px solid #e54847; position: relative;}
#header h1{ font-size: 18px; text-align: center; line-height: 50px; font-weight: normal; }
#header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
</style>
