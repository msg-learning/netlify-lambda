import Vue from 'vue';
import VueGtm from 'vue-gtm';
import Router from '@/router';

Vue.use( VueGtm, {
    enabled: true,
    debug: process.env.NODE_ENV !== 'production',
    vueRouter: Router
} );
