<script>
import { store } from '../store.js';

export default {
    data(){
        return{
            store,
        }
    }
}

</script>

<template>
    <li class="card col-3" v-for="movie in store.searchedMovies">
        <img :src="`${store.imgUrlBase}/${movie.poster_path}`" alt="">
        <h4>{{ movie.title }}</h4>
        <h6>{{ movie.original_title }}</h6>
        <img class="flag" v-if="movie.original_language === 'it'" src="../../public/italy.png">
        <img class="flag" v-else-if="movie.original_language === 'en'" src="../../public/usa.png">
        <img class="flag" v-else-if="movie.original_language === 'es'" src="../../public/spain.png">
        <img class="flag" v-else-if="movie.original_language === 'de'" src="../../public/deutsch.png">
        <p v-else> {{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
    </li>
    <li class="card col-3" v-for="serietv in store.searchedTv">
        <img :src="`${store.imgUrlBase}/${serietv.poster_path}`" alt="">
        <h4>{{ serietv.original_name }}</h4>
        <h6>{{ serietv.first_air_date }}</h6>
        <img class="flag" v-if="serietv.original_language === 'it'" src="../../public/italy.png">
        <img class="flag" v-else-if="serietv.original_language === 'en'" src="../../public/usa.png">
        <img class="flag" v-else-if="serietv.original_language === 'es'" src="../../public/spain.png">
        <img class="flag" v-else-if="serietv.original_language === 'de'" src="../../public/deutsch.png">
        <p v-else> {{ serietv.original_language }}</p>
        <p>{{ serietv.vote_average }}</p>
    </li>
</template>

<style lang="scss" scoped>
.card{
    padding: 10px;
    img.flag{
        width: 30px;
    }
}
</style>