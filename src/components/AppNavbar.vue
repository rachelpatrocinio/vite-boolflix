<script>
import { store } from '../store.js';
    export default {
        data(){
            return{
                store,
            }
        },
        methods:{
            search(){
                console.log(store.searchBarValue)
                store.searchBarValue = ''
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