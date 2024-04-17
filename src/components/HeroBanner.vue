<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    data(){
        return{
            store
        }
    },
    mounted(){
        axios
            .get('https://api.themoviedb.org/3/search/movie',{
                params: {
                    api_key: store.API_KEY,
                    query: 'r',
                    page: Math.random()*10
                }
            })
            .then((res)=>{
                store.randomMovies = res.data.results
                // console.log(res.data.results)
            })
    }
}

</script>

<template>
    <div class="d-flex hero">
        <img v-for="(randomMovie,i) in store.randomMovies" :key="i" :src="`${store.imgUrlBase}/${randomMovie.poster_path}`" alt="">
    </div>
</template>

<style lang="scss" scoped>
.hero{
    overflow: auto;
    img{
        padding: 10px;
    }
}
</style>