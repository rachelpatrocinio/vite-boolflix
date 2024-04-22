<script>
import { store } from '../store.js';
import CardMovieOrTv from './CardMovieOrTv.vue';
import HeroBanner from './HeroBanner.vue';

export default {
    components:{
        CardMovieOrTv,
        HeroBanner
    },
    data(){
        return{
            store
        }
    },
    mounted(){
        this.store.searchedMovies.forEach(el=>{
            axios
                .get(`https://api.themoviedb.org/3/movie/${el.id}/credits`,{
                    params:{
                        api_key: store.API_KEY,
                        append_to_response: 'credits'
                    }
                })
                .then((response)=>{
                    el.actor = response.data.cast.slice(0,5)
                    // console.log(store.searchedMovies)
                })  
        })

        this.store.searchedTv.forEach(el=>{
            axios
                .get(`https://api.themoviedb.org/3/tv/${el.id}/credits`,{
                    params:{
                        api_key: store.API_KEY,
                        append_to_response: 'credits'
                    }
                })
                .then((response)=>{
                    el.actor = response.data.cast.slice(0,5)
                    console.log(store.searchedTv)
                })
        })
    }
}
</script>

<template>
    <main class="main">
        <HeroBanner/>
        <div class="container">
            <ul v-if="store.searchedMovies.length !== 0 || store.searchedTv.length !== 0" class="d-flex flex-wrap">
                <CardMovieOrTv v-for="movie in store.searchedMovies" :key="movie.id" :item="movie"/>
                <CardMovieOrTv v-for="serietv in store.searchedTv" :key="serietv.id" :item="serietv"/>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.main{
    padding: 50px 0;
}
</style>