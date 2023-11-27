<template>
  <div class="category-container w-full">
            <div class="tabs p-5 w-full md:w-96 m-auto text-center flex justify-center" id="category-container">
                <div v-for="category in categories" :key="category.id">
                    <button class="tab mx-1 rounded-lg text-center active:bg-primary
                      active:text-white focus:bg-primary focus:text-white
                      transition-colors duration-200" :class="this.currCat === category.id  ? 'bg-primary text-white':'' ">
                      <router-link :to="{name:'home', query: {category : category.id } }">{{category.category}}</router-link>
                      </button>
                </div>
              </div>
        </div>
  <MovieList :movies="this.movies" :categories="categories"></MovieList>
  <footer>
         <div class="flex justify-center">
             <button class="btn text-white bg-primary hover:bg-primary prev-page-btn" v-if="this.page != 1"><router-link :to="{name:'home', query: { page : page - 1 ,category : currCat } }">PREVIOUS PAGE</router-link></button>
             <button class="btn text-white bg-primary hover:bg-primary next-page-btn" v-if="this.page < 500">
              <router-link :to="{name:'home', query: { page : page + 1 ,category : currCat} }">NEXT PAGE</router-link>
             </button>
         </div>
        <p class="page-no text-center bg-gray-200 p-2"></p>
    </footer>
</template>
<script>
import MovieService from "@/services/MovieService.js"
import MovieList from "@/components/MovieList.vue"
  export default{
    name : "HomeView",
    props:["page","category"],
    data(){
      return {
        movies : null,
        categories: [
                    { category:"Action",  id:28 },
                    { category:"Comedy", id:35 },
                    { category:"Horror", id:27 },
                    { category:"Adventure", id:12 }
            ],
        currCat : null
      }
    },
    components : {
      MovieList
    },
            beforeRouteEnter(routeTo,routeFrom,next){
              
                // console.log(this.category)
            MovieService
            .getMovies(routeTo.query.category || ' ',routeTo.query.page || 1)
            .then((response) => {next(comp=>{ 
                comp.movies = response.data.results;
                })
            })
            .catch((err) => {
                next({name:'netError'})
            })
        },
          beforeRouteUpdate(routeTo){
            this.currCat = parseInt(routeTo.query.category) || ' '
                // console.log(this.category)
            return MovieService
            .getMovies(routeTo.query.category || ' ',routeTo.query.page || 1)
            .then((response) => {
                this.movies = response.data.results;
                })
            .catch((err) => {
                return {name:'netError'}
            })
        }
  }
</script>