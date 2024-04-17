<script>
import { store } from '../store.js';
import axios from 'axios';
    export default {
        data(){
            return{
                store
            }
        },
        methods:{
            search(){
                // console.log(store.searchBarValue)
                this.searchMovie()
                this.searchTv()
                store.searchBarValue = '';
            },
            searchMovie(){
                axios
                    .get('https://api.themoviedb.org/3/search/movie',{
                        params:{
                            api_key: store.API_KEY,
                            query: store.searchBarValue
                        }
                    })
                    .then((res) =>{
                        // console.log(res)
                        store.searchedMovies = res.data.results;
                        // console.log(store.searchedMovies)
                    })
            },
            searchTv(){
                axios
                    .get('https://api.themoviedb.org/3/search/tv',{
                        params:{
                            api_key: store.API_KEY,
                            query: store.searchBarValue
                        }
                    })
                    .then((res) =>{
                        store.searchedTv = res.data.results;
                        // console.log(store.searchedTv)
                    })
                store.searchBarValue = '';
            }
        }
    }
</script>

<template>
    <div>
        <button @click="search" class="ms-10 p-5" id="search"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>
        <input type="text" class="p-5" v-model="store.searchBarValue" for="search" @keyup.enter="search" placeholder="Search...">
    </div>
</template>

<style lang="scss" scoped>
button{
    border: none;
    background-color: #0F0F0F;
    color: white;
    font-size: 20px;
}

input[type="text"]{
    background-color: #0F0F0F;
    border: none;
    outline-color: red;
    color: white;
}
</style>