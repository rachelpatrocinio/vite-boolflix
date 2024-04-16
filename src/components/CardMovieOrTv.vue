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
        <p>{{ movie.originial_language }}</p>
        <p>{{ movie.vote_average }}</p>
    </li>
</template>

<style lang="scss" scoped>
.card{
    padding: 10px;
}

</style>