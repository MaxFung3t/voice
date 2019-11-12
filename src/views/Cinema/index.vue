<template>
	<div id="main">
		<Header />
		<div id="content">
			<div class="vuexTest">vueX测试:{{ arrList }}</div>
			<div class="cinema_menu">
				<div class="city_switch">
					全城
					<i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="brand_swtich">
					品牌
					<i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					特色
					<i class="iconfont icon-lower-triangle"></i>
				</div>
			</div>

			<CiList />
		</div>

		<TabBar />
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import CiList from '@/components/CiList';

export default {
	name: 'Cinema',
	computed: {
		// ...mapState({  //用mapState来获取changeNum.js里面的state的属性值
		//    arrList:state=>state.changeNum.changeNum
		// }),
		...mapGetters('changeNum', {
			//用mapGetters来获取changeNum.js里面的getters
			arrList: 'changeClick'
		})
	},
	components: {
		Header,
		TabBar,
		CiList
	}
};
</script>
<style scoped>
#content	.vuexTest{
	width: 100%;
	height: 45px;
	line-height: 45px;
	text-align: center;
	background-color: #007AFF;
	color: #000;
}
#content .cinema_menu {
	width: 100%;
	height: 45px;
	border-bottom: 1px solid #e6e6e6;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: white;
}

</style>
