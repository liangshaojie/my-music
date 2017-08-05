<template>
    <div class="showMap">
        <iframe
            width="100%"
            height="100%"
            frameborder=0 style="display:block;position:absolute;z-index:999999;top:0;left:0"
            :src="iframeSrc">
        </iframe>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return{
                iframeSrc:''
            }
        },
        props: {
            start:{
                type: String,
                default: '116.403124,39.940693'
            },
            dest:{
                type: String,
                default: '116.481488,39.990464'
            },
            destName:{
                type: String,
                default: '到这里去'
            }
        },
        mounted() {
            this.iframeSrc = 'http://m.amap.com/navi/?start='+this.start+'&dest='+this.dest+'&destName='+this.destName+'&key=d3f5d8b3b05231fa6a11375492310e3a&platform=mobile'
        },
        methods:{
        }
    }
//    http://m.amap.com/navi/
</script>
<style scoped lang="less" rel="stylesheet/less">
    .showMap{
        width:100%;
        height:100%;
    }
</style>
