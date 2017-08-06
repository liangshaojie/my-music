import * as types from './mutation-types'

const mutations = {
    [types.SET_DISC](state,disc){
        state.disc = disc
    },
    [types.SET_PLAY_MODE](state, mode) {
        state.mode = mode
    },
    [types.SET_SEQUENCE_LIST](state, list) {
        state.sequenceList = list
    },
    [types.SET_PLAYLIST](state, list) {
        state.playlist = list
    },
    [types.SET_CURRENT_INDEX](state, index) {
        state.currentIndex = index
    },
    [types.SET_FULL_SCREEN](state, flag) {
        state.fullScreen = flag
    },
    [types.SET_PLAYING_STATE](state, flag) {
        state.playing = flag
    },
}
export default mutations
