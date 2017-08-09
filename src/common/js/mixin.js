import {mapGetters, mapMutations, mapActions} from 'vuex'



export const playerMixin = {
    computed: {
        ...mapGetters([
            'sequenceList',
            'playlist',
            'currentSong',
            'mode',
            'favoriteList'
        ]),
        iconMode() {
            return this.mode === playMode.sequence ? 'icon-sequence' : this.mode === playMode.loop ? 'icon-loop' : 'icon-random'
        },
    },
    methods: {
        ...mapActions([
            'saveFavoriteList',
            'deleteFavoriteList'
        ]),
        ...mapMutations({
            setPlayMode: 'SET_PLAY_MODE',
            setPlaylist: 'SET_PLAYLIST',
            setCurrentIndex: 'SET_CURRENT_INDEX',
            setPlayingState: 'SET_PLAYING_STATE'
        }),
        changeMode() {
            const mode = (this.mode + 1) % 3
            this.setPlayMode(mode)
            let list = null
            if (mode === playMode.random) {
                list = shuffle(this.sequenceList)
            } else {
                list = this.sequenceList
            }
            this.resetCurrentIndex(list)
            this.setPlaylist(list)
        },
    }
}
