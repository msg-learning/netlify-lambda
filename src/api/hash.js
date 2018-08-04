import Vue from 'vue';

const endpoint = '/.netlify/functions/hash';

export default function get ( payload ) {

    return Vue.http
        .get( endpoint, {
            params: payload
        } )
        .then( data => data.data );

}
