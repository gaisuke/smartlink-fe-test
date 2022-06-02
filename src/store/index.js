import Vue from 'vue'
import Vuex  from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
    banks: []
}

const getters = {

}

const actions = {
    getBanks({ commit }) {
        axios.get('https://boss.smartlink.id/salary/bank')
        .then(response => {
            commit('SET_BANKS', response.data)
        })
    }
}

const mutations = {
    SET_BANKS(state, banks) {
        state.banks = banks
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})