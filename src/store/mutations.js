import * as types from './mutation-types'

console.log(types.SET_DISC);
const mutations = {
    [types.SET_DISC](state,disc){
        state.disc = disc
    }
}
export default mutations
