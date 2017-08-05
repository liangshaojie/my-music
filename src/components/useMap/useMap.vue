<template>
    <div>
        <mapBySeachVal cityName="上海"  @changeAddr = 'changeAddr'></mapBySeachVal>
        <!--<showMapDest></showMapDest>-->
    </div>
</template>
<script type="text/ecmascript-6">
    import mapBySeachVal from './../../components/map/mapBySeachVal.vue'
    import showMapDest from './../../components/map/showMapDest.vue'
    export default {
        components:{
            mapBySeachVal,
            showMapDest
        },
        methods:{
            changeAddr(item){
                console.log(item);
            }
        }
    }
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
