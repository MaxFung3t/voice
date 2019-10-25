import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'
Vue.config.devtools = true;
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    mineRouter,
    cinemaRouter,
    {
      path : '/*',
      redirect : '/mine'
    }
  ]
})
