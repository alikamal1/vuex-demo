import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        firstArray: [{
            id: 1, name: 'User 1'
        },
        {
            id: 2, name: 'User 2'
        },
        {
            id: 3, name: 'User 3'
        },
        {
            id: 4, name: 'User 4'
        }],
        secondArray: [
        ]
    },
    getters,
    mutations,
    actions,
})

// dispatch an action -> action commit a mutation -> mutation modify state 

// this.$store.dispatch("moveToSecondArray", element);

// moveToFirstArray(state, element) {
//     state.firstArray.push(element);
//     state.secondArray.splice(state.secondArray.indexOf(element), 1);
// },

// moveToFirstArray(state, element) {
//     state.firstArray.push(element);
//     state.secondArray.splice(state.secondArray.indexOf(element), 1);
// },
