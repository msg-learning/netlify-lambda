<template>
    <div>
        <form>
            <label for='value'>
                value
            </label>
            <input
                type='text'
                name='value'
                id='value'
                v-model='value'>
            <button
                type='button'
                @click='hash'>
                Submit
            </button>
        </form>

        <p>{{ output }}</p>

    </div>
</template>

<script>

import fetchHash from '@/api/hash';

export default {

    name: 'hashValue',

    methods: {
        hash ( event ) {

            fetchHash( { value: this.value } )
                .then( ( { hash } ) => {

                    this.output = hash;

                } );

        }
    },

    data: () => ( {
        value: null,
        output: null
    } )

};

</script>
