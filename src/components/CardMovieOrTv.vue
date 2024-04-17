<script>
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
            console.log(item.original_language);
            if(item.original_language === 'it'){
                this.imgPath = '../../public/italy.png'
            } 
            else if(item.original_language === 'en'){
                this.imgPath = '../../public/usa.png'
            }
            else if(item.original_language === 'es'){
                this.imgPath = '../../public/spain.png'
            }
            else if(item.original_language === 'de'){
                this.imgPath = '../../public/deutsch.png'
            }
        }
    },
    mounted(){
        this.flag(this.item)
    }
}
</script>

<template>
    <li class="card col-3">
        <img :src="`${store.imgUrlBase}/${item.poster_path}`" :alt="item.title">
        <div class="overlay">
            <div>
                <h3>{{ item.title }}</h3>
                <h6 class="mb-10">{{ item.original_title }}</h6>
                <p>{{ item.overview }}</p>
            </div>
            <div>
                <img class="flag" :src="imgPath">
                <CardStars :vote="Math.floor(item.vote_average/2)"/>
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>

.card{
    padding: 10px;
    position: relative;

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