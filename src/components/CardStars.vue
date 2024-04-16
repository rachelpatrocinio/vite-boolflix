<script>
import { store } from '../store.js';

export default {
    props:{
        vote:{
            type: Number
        }
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
     <div>
        <i v-for="star in vote" class="fa-solid fa-star"></i>
        <i v-for="star in 5-vote" class="fa-regular fa-star"></i>
    </div>
</template>



<style lang="scss" scoped>
</style>