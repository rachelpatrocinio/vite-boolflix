<script>
import AppLogo from './AppLogo.vue';
import AppNavbar from './AppNavbar.vue';

export default {
    components:{
        AppLogo,
        AppNavbar
    }
}
</script>

<template>
    <header class="main-header">
        <div class="container">
            <div class="row d-flex justify-content-between align-items-center">
                <AppLogo/>
                <AppNavbar/>
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped>
.main-header{
    color: white;
    height: 80px;

    .container{
    width: 100%;
    }
}
</style>