import Vue from 'vue';
import Vuex from 'vuex';

import hash from '@/store/hash';

Vue.use( Vuex );

export default new Vuex.Store( {
    modules: {
        hash
    }
} );
