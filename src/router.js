import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Hash from '@/views/Hash';

Vue.use( Router );

export default new Router( {
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hash/:value',
            name: 'hash',
            component: Hash
        },
        {
            path: '/hash-value',
            name: 'hash-value',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/HashValue.vue' )
        }
    ]
} );
