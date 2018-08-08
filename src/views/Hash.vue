<template>
    <h1 class="md-display-3">
        {{ hash }}
    </h1>
</template>

<script>

import requestHash from '@/api/hash';

export default {

    name: 'hash',

    data: () => ( {
        hash: null
    } ),

    created () {
        requestHash( this.$route.params.value )
            .then( ( { hash } ) => this.hash = hash );
    }

};

</script>
