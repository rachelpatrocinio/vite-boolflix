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
                        console.log(res.data.results)
                        store.searchedTv = res.data.results
                    })
                store.searchBarValue = '';
            }
        }
    }
</script>

<template>
    <div>
        <input type="text" v-model="store.searchBarValue" for="search" @keyup.enter="search">
        <button @click="search" id="search">SEARCH</button>
    </div>
</template>

<style lang="scss" scoped>
</style>