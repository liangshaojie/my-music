export const disc = state => state.disc
export const sequenceList = state => state.sequenceList
export const playlist = state => state.playlist
export const mode = state => state.mode
export const favoriteList = state => state.favoriteList
export const currentIndex = state => state.currentIndex
export const currentSong = (state) => {
    return state.playlist[state.currentIndex] || {}
}
export const fullScreen = state => state.fullScreen
export const playing = state => state.playing
export const singer = state => state.singer
export const topList = state => state.topList
export const searchHistory = state => state.searchHistory
