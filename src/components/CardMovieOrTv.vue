<script>
import { store } from '../store.js';
import CardStars from './CardStars.vue';
import CardGenres from './CardGenres.vue';

export default {
    components:{
        CardStars,
        CardGenres
    },
    props:{
        item:{
            type: Object
        }
    },
    data(){
        return{
            store,
            imgPath: ''
        }
    },
    methods:{
        flag(item){
            // console.log(item.original_language);
            this.imgPath = `../../public/${item.original_language}.png`
        }
    },
    mounted(){
        this.flag(this.item)
    }
}
</script>

<template>
    <li class="card col-3">
        <img :src="item.poster_path !== null ? `${store.imgUrlBase}/${item.poster_path}`:'/image-not-found.png'" >
        <div class="overlay">
            <div>
                <h3 v-if="item.title">{{ item.title }}</h3>
                <h3 v-else>{{ item.name }}</h3>
                <h6 v-if="item.original_title" class="mb-10">{{ item.original_title }}</h6>
                <h6 v-else class="mb-10">{{ item.original_name }}</h6>
                <p>{{ item.overview }}</p>
            </div>
            <div>
                <img  class="flag" :src="imgPath" :alt="item.original_language">
                <CardStars :vote="Math.floor(item.vote_average/2)"/>
                <p class="mt-20"> MAIN CAST:</p>
                <p v-for="singleActor in item.actor">{{ singleActor.name }}</p>
                <p class="mt-20"> GENRES:</p>
                <CardGenres :showGenres="item.genre_ids"/>
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>

.card{
    padding: 10px;
    position: relative;

    img{
        color: white;
    }

    .overlay{
        opacity: 0;
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

    &:hover .overlay{
    opacity: 1;
    transition: 0.7s;
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