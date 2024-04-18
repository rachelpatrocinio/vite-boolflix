<script>
import axios  from 'axios';
import { store } from '../store.js';


export default {
    data(){
        return{
            store
        }
    },
    props:{
        showGenres:{
            type: Array
        }
    }
}
</script>

<template>
    <p>{{ showGenres }}</p>
</template>

<style lang="scss" scoped>

</style>