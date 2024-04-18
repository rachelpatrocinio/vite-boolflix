<script>
import axios  from 'axios';
import { store } from '../store.js';
import CardStars from './CardStars.vue';

export default {
    components:{
        CardStars
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

        store.searchedMovies.forEach(el=>{
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

        store.searchedTv.forEach(el=>{
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
    <li class="card col-3">
        <img :src="item.poster_path !== null ? `${store.imgUrlBase}/${item.poster_path}`:'/image-not-found.png'" >
        <div class="overlay">
            <div>
                <h3>{{ item.title }}</h3>
                <h3>{{ item.name }}</h3>
                <h6 class="mb-10">{{ item.original_title }}</h6>
                <h6 class="mb-10">{{ item.first_arir_date }}</h6>
                <p>{{ item.overview }}</p>
            </div>
            <div>
                <img  class="flag" :src="imgPath" :alt="item.original_language">
                <CardStars :vote="Math.floor(item.vote_average/2)"/>
                <p class="mt-20"> MAIN CAST:</p>
                <p v-for="singleActor in item.actor">{{ singleActor.name }}</p>
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