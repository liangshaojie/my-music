<template>
    <transition name="slide">
        <!--<music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>-->
    </transition>
</template>

<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex'
    import {getSongList} from './../../api/recommend'

    export default {
        created() {
            this._getSongList()
            console.log(this.disc);
        },
        computed: {
            ...mapGetters(['disc'])
        },
        methods: {
            _getSongList() {
//                if (!this.disc.dissid) {
//                    this.$router.push('/recommend')
//                    return
//                }
//                getSongList(this.disc.dissid).then((res) => {
//                    if (res.code === ERR_OK) {
//                        this.songs = this._normalizeSongs(res.cdlist[0].songlist)
//                    }
//                })
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .slide-enter-active, .slide-leave-active
        transition: all 0.3s

    .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)
</style>
