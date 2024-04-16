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
        <h4>{{ movie.title }}</h4>
        <h6>{{ movie.original_title }}</h6>
        <img v-if="movie.original_language === 'it'" src="../../public/italy.png">
        <img v-else-if="movie.original_language === 'en'" src="../../public/usa.png">
        <img v-else-if="movie.original_language === 'es'" src="../../public/spain.png">
        <img v-else-if="movie.original_language === 'de'" src="../../public/deutsch.png">
        <p v-else> {{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
    </li>
</template>

<style lang="scss" scoped>
.card{
    padding: 10px;
    img{
        width: 30px;
    }
}
</style>