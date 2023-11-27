<template>
	<div class="flex flex-col items-center" v-if="Gstore.movieDetails">
		<div class="movie-details card w-96 bg-base-100 shadow-xl image-full relative">
	<figure><img class="" :src="imgUrl"></figure>
	<div class="card-body">
		<h2 class="card-title">{{Gstore.movieDetails.title}}</h2>
	
	<p>{{Gstore.movieDetails.overview}}</p>
	</div>
	<span class="badge badge-secondary absolute bottom-1.5 right-1.5">{{ Gstore.movieDetails.status }}</span>
	</div>
	<div class="info">
		<h2 class="text-2xl text-center m-2">Movie Info : -</h2>
		<div class="grid grid-cols-2 gap-x-10 gap-y-3">
			<h2 class="font-bold">Release Date :- <span class="italic">{{ Gstore.movieDetails.release_date }}</span></h2>
			<h2 class="font-bold">Vote Count :- <span class="italic">{{Gstore.movieDetails.vote_count}}</span></h2>
			<h2 class="font-bold">Average Vote :- <span class="italic">{{Gstore.movieDetails.vote_average}}</span></h2>
			<h2 class="font-bold">Adult :- <span class="italic">{{Gstore.movieDetails.adult ? 'Yes' : 'No'}}</span></h2>
	</div>
	</div>
<div class="production-companies flex gap-x-5 overflow-x-auto items-center m-10">
		<div v-for="company in Gstore.movieDetails.production_companies" :key="company.id">
			<div v-if="company.logo_path" :data-tip="company.name"  class="tooltip tooltip-info tooltip-right">
				<img :src="prod_logo(company.logo_path)" alt="company.name" width="100">
			</div>
			<div v-if="!company.logo_path">
				<div class="badge badge-outline tooltip tooltip-info tooltip-right" :data-tip="company.name">{{company.name}}</div>
		</div>
	</div>
</div>
	</div>
</template>
<script>
import Gstore from '@/store'
	export default{
		name : "MovieDetails",
		inject:['Gstore'],
		props:['movie','id'],
		computed:{
			imgUrl(){
				return this.Gstore.movieDetails?.backdrop_path ? `https://image.tmdb.org/t/p/w500/${this.Gstore.movieDetails?.backdrop_path}` : `https://image.tmdb.org/t/p/w500/${this.Gstore.movieDetails?.poster_path}`
			},
			
		},
		methods:{
			prod_logo(path){
			return  `https://image.tmdb.org/t/p/w500${path}`
			}
		}
	}
</script>
