<template>
    <md-content>
        <h1 class="md-display-3">
            {{ hash }}
        </h1>
        <p>
            <md-button
                class="md-primary"
                :disabled="requestInProgress"
                @click="requestHash">Request hash</md-button>
        </p>
    </md-content>
</template>

<script>

import { mapActions, mapState } from 'vuex';

export default {

    name: 'home',

    created () {
        if ( !this.hash ) {
            this.requestHash();
        }
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
