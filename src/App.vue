<template>
        <header>
        <nav class="container mx-auto">
          
            <div class="navbar bg-base-100 ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           <button class="btn text-white bg-primary hover:bg-primary ">
                            <router-link :to="{ name: 'about' }">ABOUT</router-link></button>
                        </ul>
                      </div>

                    <a class="btn btn-ghost normal-case text-xl"><router-link :to="{ name: 'home' }">KMDB</router-link></a>
                </div>
                <div class="navbar-end hidden lg:flex ">
                    <button class="btn text-white bg-primary hover:bg-primary "><router-link :to="{ name: 'about' }">ABOUT</router-link></button>
                </div>
            </div>
        </nav>


    </header>
    <router-view />
    
     
</template>

<script>
import './assets/css/main.css'
export default{
  name:"HomeView",
  components:{
    SingleCard,
    MovieList
  },
  props:["page"]
}
import SingleCard from "@/components/SingleCard.vue";
import MovieList from "@/components/MovieList.vue";
</script>