import Vue from "vue";
import axios from "axios";

Vue.use(axios);

export default {
    namespaced: true,
    state: {
        hotel : null
    },
    getters: {
        hotel(state) {
            return state.hotel;
        },
    },
    mutations: {
        ['SET_HOTEL_DETAILS'](state, hotel) {
            state.hotel = hotel.data;
            
            return hotel;
        },
    },
    actions: {
        getCardDetails ({commit}, hotelID) {
         return axios.get('http://my-json-server.typicode.com/fly365com/code-challenge/hotelDetails/'+hotelID)
            .then((data)=> {
               
               commit('SET_HOTEL_DETAILS', data);
                              
            })
        }
    }
}
