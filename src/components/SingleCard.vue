<template>
          <figure>
          <img class="w-80"
          :src="imgUrl"
          alt="Loading"  />
          <div
          class="absolute  mt-40 ml-32 text-white text-xs
          font-bold bg-black bg-opacity-50">
         <!-- {{movie?.release_date}} -->
       </div>
          </figure>
          <div class="card-body cursor-pointer">
            <div class="flex items-center gap-4">
              <span class="font-bold text-base">{{movie?.title}}</span>
            </div>
            <div class="flex items-center gap-4 mx-14">
              <h2 class="font-normal text-sm"></h2>
            </div>
            <div class="card-actions mx-14">
              <p>popularity {{movie?.popularity}}</p>
            </div>
            <div class="card-body-hover w-full h-full bg-black absolute
            text-white top-0 left-0 rounded text-center cursor-pointer">
                <div class="flex items-center gap-4
                justify-center flex-col p-2">
                  <h2 class="text-2xl">{{movie?.title}}</h2>
                  <p>{{movie?.overview}}</p>
                </div>
          </div>
          </div>
</template>

<script>
export default{
  name:"SingleCard",
  data(){
    return {
      imgUrl : `https://image.tmdb.org/t/p/w500/${this.movie?.poster_path}`
    }
  },
  props:{
    movie:{
      type:Object,
      required:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        .card-body:hover .card-body-hover{
            transform: scale(1)!important;
            display: flex;
            align-items: center;
        }
        .card-body-hover{
            transform: scale(0);
            transition: 0.3s;
        }
</style>
