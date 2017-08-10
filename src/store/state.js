import {playMode} from './../common/js/config'
import {loadFavorite} from './../common/js/cache'
const state = {
    disc: {},
    playlist: [],
    currentIndex: -1,
    fullScreen: false,
    playing: false,
    favoriteList: loadFavorite()
}

export default state
