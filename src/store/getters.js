export const disc = state => state.disc
export const sequenceList = state => state.sequenceList
export const playlist = state => state.playlist
export const mode = state => state.mode
export const favoriteList = state => state.favoriteList
export const currentSong = (state) => {
    return state.playlist[state.currentIndex] || {}
}
