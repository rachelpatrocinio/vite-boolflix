<script>
import { store } from '../store.js';
import CardStars from './CardStars.vue';

export default {
    components:{
        CardStars
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <li class="card col-3" v-for="movie in store.searchedMovies" :key="movie.id">
        <img :src="`${store.imgUrlBase}/${movie.poster_path}`" :alt="movie.title">
        <div class="overlay">
            <div>
                <h3>{{ movie.title }}</h3>
                <h6 class="mb-10">{{ movie.original_title }}</h6>
                <p>{{ movie.overview }}</p>
            </div>
            <div>
                <img class="flag" v-if="movie.original_language === 'it'" src="../../public/italy.png">
                <img class="flag" v-else-if="movie.original_language === 'en'" src="../../public/usa.png">
                <img class="flag" v-else-if="movie.original_language === 'es'" src="../../public/spain.png">
                <img class="flag" v-else-if="movie.original_language === 'de'" src="../../public/deutsch.png">
                <p v-else> {{ movie.original_language }}</p>
                <CardStars :vote="Math.floor(movie.vote_average/2)"/>
            </div>
        </div>
    </li>
    <li class="card col-3" v-for="serietv in store.searchedTv" :key="serietv.id">
        <img :src="`${store.imgUrlBase}/${serietv.poster_path}`" :alt="serietv.original_name">
        <div class="overlay">
            <div>
                <h4>{{ serietv.original_name }}</h4>
                <h6>{{ serietv.first_air_date }}</h6>
                <p>{{ serietv.overview }}</p>
            </div>
            <div>
                <img class="flag" v-if="serietv.original_language === 'it'" src="../../public/italy.png">
                <img class="flag" v-else-if="serietv.original_language === 'en'" src="../../public/usa.png">
                <img class="flag" v-else-if="serietv.original_language === 'es'" src="../../public/spain.png">
                <img class="flag" v-else-if="serietv.original_language === 'de'" src="../../public/deutsch.png">
                <p v-else> {{ serietv.original_language }}</p>
                <CardStars :vote="Math.floor(serietv.vote_average/2)"/>
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.overlay{
    opacity: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 10px;
    padding: 5px;
    background-color: rgba($color: black, $alpha: 0.9);
    color:white;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card{
    padding: 10px;
    position: relative;

    .overlay{
        opacity: 0;
    }

    &:hover .overlay{
    opacity: 1;
    transition: 0.7s;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 10px;
    padding: 5px;
    background-color: rgba($color: black, $alpha: 0.9);
    color:white;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }

    img:not(img.flag){
        height: 380px;
        object-fit: cover;
        object-position: center;
    }

    img.flag{
        width: 30px;
    }
}
</style>