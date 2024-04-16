<script>
    export default {
        
    }
</script>

<template>
<div class="d-flex align-items-center">
    <img class="logo" src="../../public/netflix.jpeg" alt="">
    <ul class="d-flex">
        <li>Home</li>
        <li>Serie Tv</li>
        <li>Film</li>
        <li>Originali</li>
        <li>Aggiunti di recente</li>
        <li>La mia lista</li>
    </ul>
</div>
</template>

<style lang="scss" scoped>
.logo{
    width: 130px;
}

ul li{
    padding: 10px;

    &:hover{
        color:red;
        cursor: pointer;
    }
}
</style>