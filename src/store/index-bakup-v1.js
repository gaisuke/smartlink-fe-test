//import the createStore object from Vuex
import { createStore } from 'vuex'
// Import axios to make HTTP requests
import axios from "axios"
export default createStore({
    state: {
        banks: [],
        inquiries: []
    },
    getters: {
        getBanks: (state) => state.banks,
        getInquiries: (state) => state.inquiries
    },
    actions: {
        async fetchBanks({ commit }) {
            try {
                const data = await axios.get('https://boss.smartlink.id/salary/bank')
                commit('SET_BANKS', data.data)
            } catch (error) {
                alert(error)
                console.log(error)
            }
        },
        async fetchInquiries({ commit }) {
            try {
                const data = await axios.get('https://boss.smartlink.id/salary/inquiry')
                commit('SET_INQUIRIES', data.data)
            } catch (error) {
                alert(error)
                console.log(error)
            }
        }
    },
    mutations: {
        SET_BANKS(state, banks) {
            state.banks = banks
        },
        SET_INQUIRIES(state, inquiries) {
            state.inquiries = inquiries
        },
    }
})
/** we have just created a boiler plate for our vuex store module**/