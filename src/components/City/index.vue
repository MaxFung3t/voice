<template>
	<div class="city_body">
		<div class="city_list">
			<Loading v-if="isLoading" />
			<Scroller v-else ref="city_list">
				<div>
					<div class="city_hot" ref="city_hot">
						<h2>热门城市</h2>
						<ul class="clearfix">
							<li v-for="item in hotListInfo" :key="item.id" @tap="handleToCity(item.nm,item.id)">{{ item.nm }}</li>
						</ul>
					</div>
					<div class="city_sort" ref="city_sort">
						<div v-for="item in cityListInfo" :key="item.index">
							<h2>{{ item.index }}</h2>
							<ul>
								<li v-for="itemList in item.list" :key="itemList.id" @tap="handleToCity(itemList.nm,itemList.id)">{{ itemList.nm }}</li>
							</ul>
						</div>
					</div>
				</div>
			</Scroller>
		</div>

		<div class="city_index">
			<div class="hot_city" v-if="!isLoading" @touchstart="handeleToHotIndex">热门城市</div>
			<ul>
				<li v-for="(item, index) in cityListInfo" :key="item.index" @touchstart="handleToIndex(index)">{{ item.index }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'City',
	components: {},
	props: {},
	data() {
		return {
			cityListInfo: [],
			hotListInfo: [],
			isLoading: true
		};
	},
	mounted() {
		var cityList = window.localStorage.getItem('cityList');
		var hostList = window.localStorage.getItem('hostList');
		if (cityList && hostList) {
			this.cityListInfo = JSON.parse(cityList);
			this.hotListInfo = JSON.parse(hotList);
			this.isLoading = false;
		} else {
			this.axios.get('/api/cityList').then(res => {
				var msg = res.data.msg;
				if (msg === 'ok') {
					this.isLoading = false;
					var cities = res.data.data.cities;
					var { cityList, hotList } = this.formCityList(cities);
					console.log(this.formCityList(cities));
					this.cityListInfo = cityList;
					this.hotListInfo = hotList;
					window.localStorage.setItem('cityList', JSON.stringify(cityList));
					window.localStorage.setItem('hotList', JSON.stringify(hotList));
				}
			});
		}
	},
	methods: {
		formCityList(cities) {
			var cityList = [];
			var hotList = [];
			for (var i = 0; i < cities.length; i++) {
				//热门城市列表
				if (cities[i].isHot === 1) {
					hotList.push(cities[i]);
				}
			}
			for (var i = 0; i < cities.length; i++) {
				var firstLetter = cities[i].py.substr(0, 1).toUpperCase();
				if (toCom(firstLetter)) {
					//判断后存在新的字母，不存在就添加新的字母的并添加该城市到该新加的字母列表里去
					cityList.push({
						index: firstLetter,
						list: [
							{
								nm: cities[i].nm,
								id: cities[i].id
							}
						]
					});
				} else {
					for (var j = 0; j < cityList.length; j++) {
						//判断后不存在新的字母，就把城市添加到已有的字母的列表里去
						if (cityList[j].index === firstLetter) {
							cityList[j].list.push({
								nm: cities[i].nm,
								id: cities[i].id
							});
						}
					}
				}
			}
			cityList.sort((n1, n2) => {
				if (n1.index > n2.index) {
					return 1;
				} else if (n1.index < n2.index) {
					return -1;
				} else {
					return 0;
				}
			});

			function toCom(firstLetter) {
				for (var i = 0; i < cityList.length; i++) {
					if (cityList[i].index === firstLetter) {
						return false;
					}
				}
				return true;
			}

			return {
				cityList,
				hotList
			};
			// console.log(cityList)
		},
		handleToIndex(index) {
			let h2 = this.$refs.city_sort.getElementsByTagName('h2');
			// this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
			this.$refs.city_list.toScrollTop(-h2[index].offsetTop);
		},
		handeleToHotIndex() {
			console.log('11111');
			let h2 = this.$refs.city_hot.getElementsByTagName('h2');
			// this.$refs.city_hot.parentNode.scrollTop = h2.offsetTop;
			this.$refs.city_list.toScrollTop(0);
		},
		handleToCity(nm,id){
			this.$store.commit('city/CITY_INFO',{nm:nm,id:id});
			window.localStorage.setItem('cityNm',nm);
			window.localStorage.setItem('cityId',id);
			this.$router.push('/movie/nowPlaying')
		}
	}
};
</script>

<style scoped>
#content .city_body {
	margin-top: 45px;
	display: flex;
	width: 100%;
	position: absolute;
	top: 0;
	bottom: 0;
}

.city_body .city_list {
	flex: 1;
	overflow: auto;
}

.city_body .city_list::-webkit-scrollbar {
	background-color: transparent;
	width: 0;
}

.city_body .city_hot {
	margin-top: 20px;
}

.city_body .city_hot h2 {
	padding-left: 15px;
	line-height: 30px;
	font-size: 14px;
	background: #f0f0f0;
	font-weight: normal;
}

.city_body .city_hot ul li {
	float: left;
	background: #fff;
	width: 29%;
	height: 33px;
	margin-top: 15px;
	margin-left: 3%;
	padding: 0 4px;
	border: 1px solid #e6e6e6;
	border-radius: 3px;
	line-height: 33px;
	text-align: center;
	box-sizing: border-box;
}

.city_body .city_sort div {
	margin-top: 20px;
}

.city_body .city_sort h2 {
	padding-left: 15px;
	line-height: 30px;
	font-size: 14px;
	background: #f0f0f0;
	font-weight: normal;
}

.city_body .city_sort ul {
	padding-left: 10px;
	margin-top: 10px;
}

.city_body .city_sort ul li {
	line-height: 30px;
	border-bottom: 1px solid #f1f1f1;
}

.city_body .city_index {
	width: 32px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
}
.city_body .city_index ul li {
	font-size: 14px;
	margin-bottom: 2px;
}
.city_body .city_index .hot_city {
	font-size: 12px;
	margin-bottom: 4px;
}
</style>
