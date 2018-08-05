import getHash from '@/api/hash';

const state = {
    hash: null
};

const mutations = {
    setHash ( state, hash ) {

        state.hash = hash;

    }
};

const actions = {

    fetchHash ( { commit }, payload ) {

        return getHash( payload )
            .then( ( { hash } ) => commit( 'setHash', hash ) );

    }

};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
