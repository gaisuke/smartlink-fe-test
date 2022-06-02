import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        banks: [],
    },
    getters: {
        banks: state => {
            return state.banks;
        }
    },
    mutations: {
        SET_ITEMS (state, banks) {
            state.banks = banks
        }
    },
    action: {
        async loadBanks ({ commit }) {
            try {
                const response = await axios.get('https://boss.smartlink.id/salary/bank');
                commit('SET_ITEMS', response.data)
            } catch (error) {
                console.log(error)
            }
        }
    }
}) 