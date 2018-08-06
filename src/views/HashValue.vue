<template>
    <md-content>

        <h1 class="md-display-3">
            {{ output || '??' }}
        </h1>

        <form
            novalidate
            class="md-layout md-alignment-top-center"
            @submit.prevent="isLoading">

            <md-card class="md-layout-item md-size-25 md-elevation-0">

                <md-card-header>
                    <div class="md-title">SHA1 a string</div>
                    <p class="md-subheading">The hashed output will be a base64 string</p>
                </md-card-header>

                <md-card-content>
                    <md-field>

                        <label for="value">
                            value
                        </label>

                        <md-input
                            type="text"
                            name="value"
                            id="value"
                            v-model="value"></md-input>

                    </md-field>
                </md-card-content>

                <md-card-actions>
                    <md-button
                        class="md-primary"
                        type="button"
                        @click="hash">
                        Submit
                    </md-button>
                </md-card-actions>

            </md-card>

        </form>

    </md-content>
</template>

<script>

import fetchHash from '@/api/hash';

export default {

    name: 'hashValue',

    methods: {
        async hash ( event ) {

            this.isLoading = true;

            await fetchHash( { value: this.value } )
                .then( ( { hash } ) =>
                    this.output = hash
                );

            this.isLoading = false;

        }
    },

    data: () => ( {
        value: null,
        output: null,
        isLoading: false
    } )

};

</script>
