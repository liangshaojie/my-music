import {playMode} from './../common/js/config'
import {loadFavorite} from './../common/js/cache'
const state = {
    singer: {},
    disc: {},
    playlist: [],
    sequenceList: [],
    currentIndex: -1,
    fullScreen: false,
    playing: false,
    favoriteList: loadFavorite(),
    mode: playMode.sequence,
}

export default state
