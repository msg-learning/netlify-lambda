<template>
    <div class='home'>
        <p>
            {{ hash }}
        </p>
        <p>
            <button @click='requestHash'>Request hash</button>
        </p>
    </div>
</template>

<script>

import { mapActions, mapState } from 'vuex';

export default {

    name: 'home',

    created () {

        this.fetchHash();

    },

    methods: {
        ...mapActions( 'hash', [
            'fetchHash'
        ] ),

        requestHash () {

            this.fetchHash();

        }

    },

    computed: {
        ...mapState( 'hash', [
            'hash'
        ] )
    }

};
</script>
