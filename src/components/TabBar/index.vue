<template>
	<footer id="footer">
		<ul>
			<li v-for="item in tabBar" :key="item.id">
				<router-link tag="li" :to="item.router">
					<!-- <div @click="busClick(item.name)"> -->
					<div>
						<i :class="['iconfont', item.icon]"></i>
						<p>{{ item.name }}</p>
					</div>
				</router-link>
			</li>
		</ul>
	</footer>
</template>

<script>
import bus from '@/event/EventBus';
export default {
	name: 'TabBar',
	data() {
		return {
			tabBar: [
				{ name: '电影', router: '/movie', icon: 'icon-dianying' },
				{ name: '影院', router: '/cinema', icon: 'icon-yingyuan' },
				{ name: '我的', router: '/mine', icon: 'icon-wode' }
			],
			name: ''
		};
	},
	methods: {
		// busClick(name) {
		// 	bus.$emit('busClick', { name: name });
		// }
	},
	// beforeDestroy() {}
};
</script>
<style scoped>
#footer {
	width: 100%;
	height: 50px;
	background: white;
	border-top: 2px #ebe8e3 solid;
	position: fixed;
	left: 0;
	bottom: 0;
}
#footer ul {
	display: flex;
	text-align: center;
	height: 50px;
	align-items: center;
}
#footer ul li {
	flex: 1;
	height: 40px;
}
#footer ul li.active {
	color: #f03d37;
}
#footer ul li.router-link-active {
	color: #f03d37;
}
#footer ul i {
	font-size: 20px;
}
#footer ul p {
	font-size: 12px;
	line-height: 18px;
}
</style>
