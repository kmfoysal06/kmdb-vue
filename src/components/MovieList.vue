<template>
<main>
        <div id="card-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
            <div class="card card-compact bg-base-100 shadow-xl relative"  v-for="movie in this.movies" :key="movie.id">
            <router-link :to="{name:'movie-details', query:{id:movie.id}}">
            <SingleCard :movie="movie"></SingleCard>
            </router-link>
            </div>
        </div>

        <div id="card-container2" class=" my-12 container mx-auto">

        </div>


    </main>   
</template>

<script>
import SingleCard from "@/components/SingleCard.vue"

    export default{
        name : 'MovieList',
        props:["page","category","movies","categories"],
        components:{
            SingleCard
        },
        data(){
            return {
                ms: this.movies
            }
        }
    }
</script>