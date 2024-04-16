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
    }
}
</script>

<template>
    <main class="main">
        <HeroBanner/>
        <div class="container">
            <ul v-if="store.searchedMovies.length !== 0 || store.searchedTv.length !== 0" class="d-flex flex-wrap">
                <CardMovieOrTv/>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.main{
    padding: 50px 0;
}
</style>