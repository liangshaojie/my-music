<template>
    <div id="app" @touchmove.prevent>
        <m-header></m-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import MHeader from './components/m-header/m-header'
    export default {
        components:{
            MHeader
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
