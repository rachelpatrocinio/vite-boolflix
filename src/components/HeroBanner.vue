<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    data(){
        return{
            store,
            array: []
        }
    },
    mounted(){
        axios
            .get('https://api.themoviedb.org/3/search/movie',{
                params: {
                    api_key: store.API_KEY,
                    query: 'gene'
                }
            })
            .then((res)=>{
                this.array = res.data.results
                console.log(res.data.results)
            })
    }
}

</script>

<template>
    <div class="d-flex hero">
        <img v-for="(item,i) in array" :key="i" :src="`${store.imgUrlBase}/${item.poster_path}`" alt="">
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