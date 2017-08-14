import * as types from './mutation-types'
import {playMode} from './../common/js/config'
import {shuffle} from './../common/js/util'
import { savePlay,deleteFavorite,saveFavorite} from './../common/js/cache'
function findIndex(list, song) {
    return list.findIndex((item) => {
        return item.id === song.id
    })
}
export const randomPlay = function ({commit}, {list}) {
    commit(types.SET_PLAY_MODE, playMode.random)
    commit(types.SET_SEQUENCE_LIST, list)
    let randomList = shuffle(list)
    commit(types.SET_PLAYLIST, randomList)
    commit(types.SET_CURRENT_INDEX, 0)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING_STATE, true)
}

export const selectPlay = function ({commit, state}, {list, index}) {
    commit(types.SET_SEQUENCE_LIST, list)
    if (state.mode === playMode.random) {
        let randomList = shuffle(list)
        commit(types.SET_PLAYLIST, randomList)
        index = findIndex(randomList, list[index])
    } else {
        commit(types.SET_PLAYLIST, list)
    }
    commit(types.SET_CURRENT_INDEX, index)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING_STATE, true)
}

export const savePlayHistory = function ({commit}, song) {
    commit(types.SET_PLAY_HISTORY, savePlay(song))
}
export const deleteFavoriteList = function ({commit}, song) {
    commit(types.SET_FAVORITE_LIST, deleteFavorite(song))
}
export const saveFavoriteList = function ({commit}, song) {
    commit(types.SET_FAVORITE_LIST, saveFavorite(song))
}


export const deleteSong = function ({commit, state}, song) {
    let playlist = state.playlist.slice()
    let sequenceList = state.sequenceList.slice()
    let currentIndex = state.currentIndex
    let pIndex = findIndex(playlist, song)
    playlist.splice(pIndex, 1)
    let sIndex = findIndex(sequenceList, song)
    sequenceList.splice(sIndex, 1)
    if (currentIndex > pIndex || currentIndex === playlist.length) {
        currentIndex--
    }
    commit(types.SET_PLAYLIST, playlist)
    commit(types.SET_SEQUENCE_LIST, sequenceList)
    commit(types.SET_CURRENT_INDEX, currentIndex)
    if (!playlist.length) {
        commit(types.SET_PLAYING_STATE, false)
    } else {
        commit(types.SET_PLAYING_STATE, true)
    }
}

export const deleteSongList = function ({commit}) {
    commit(types.SET_CURRENT_INDEX, -1)
    commit(types.SET_PLAYLIST, [])
    commit(types.SET_SEQUENCE_LIST, [])
    commit(types.SET_PLAYING_STATE, false)
}

export const clearSearchHistory = function ({commit}) {
    commit(types.SET_SEARCH_HISTORY, clearSearch())
}




