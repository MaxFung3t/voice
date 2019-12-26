export default {
	path: '/movie',
	name: '/movie',
	component: () => import('@/views/Movie'),
	children: [{
			path: 'city',
			name: 'city',
			component: () => import('@/components/City')
		},
		{
			path: 'nowPlaying',
			name: 'nowPlaying',
			component: () => import('@/components/NowPlaying')
		},
		{
			path: 'comingSoon',
			name: 'comingSoon',
			component: () => import('@/components/ComingSoon')
		},
		{
			path: 'search',
			name: 'search',
			component: () => import('@/components/Search')
		},
		{
			path: 'detail/1/:movieId',
			name: 'detail',
			components: {
				default: ()=> import('@/components/NowPlaying'),
				detail: () => import('@/views/Movie/detail')
			},
			props : {
				detail : true
			}
		},
		{
			path: 'detail/2/:movieId',
			name: 'detail',
			components: {
				default: ()=> import('@/components/ComingSoon'),
				detail: () => import('@/views/Movie/detail')
			},
			props : {
				detail : true
			}
		},
		{
			path: '/movie',
			redirect: '/movie/nowPlaying'
		}
	]
}
