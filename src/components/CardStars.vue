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
        <font-awesome-icon class="star-icon" :icon="['fas', 'star']" v-for="star in vote" />
        <font-awesome-icon class="star-icon" :icon="['far', 'star']" v-for="star in store.totalStars-vote" />
    </div>
</template>



<style lang="scss" scoped>
.star-icon{
    color: gold;
}
</style>