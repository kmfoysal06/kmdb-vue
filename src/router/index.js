import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import netError from '@/components/NetError.vue'
import MovieDetails from '@/views/MovieDetails.vue'
import Gstore from '@/store'
import Nprogress from 'nprogress'
import MovieService from "@/services/MovieService.js"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props : route =>({page : parseInt(route.query.page) || 1 , category : parseInt(route.query.category) || ' '})
  },
  {
    path:'/network-error',
    name:'netError',
    component:netError,
  },
  {
    path:'/movie',
    props: route => ({id:route.query.id}),
    // alias:'/movie/:id',
    name:'movie-details',
    beforeEnter : to => {
      return MovieService.getMovie(to.query.id)
      .then((response)=>{Gstore.movieDetails = response.data})
      .catch(err => console.log(err));
    },
    component:MovieDetails,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(()=>{
  Nprogress.start()
})
router.afterEach(()=>{
  Nprogress.done()
})

export default router
