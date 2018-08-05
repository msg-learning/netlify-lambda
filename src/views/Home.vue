<template>
    <div class='home'>
        <p>
            {{ hash }}
        </p>
        <p>
            <button
                :disabled='requestInProgress'
                @click='requestHash'>Request hash</button>
        </p>
    </div>
</template>

<script>

import { mapActions, mapState } from 'vuex';

export default {

    name: 'home',

    created () {

        this.requestHash();

    },

    data: () => ( {
        requestInProgress: false
    } ),

    methods: {
        ...mapActions( 'hash', [
            'fetchHash'
        ] ),

        async requestHash () {

            this.requestInProgress = true;
            await this.fetchHash();
            this.requestInProgress = false;

        }

    },

    computed: {
        ...mapState( 'hash', [
            'hash'
        ] )
    }

};
</script>
