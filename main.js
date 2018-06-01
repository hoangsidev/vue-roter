import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home.vue'
import Contact from './components/Contact.vue'

const app_route = new Vue({
    el: '#app_route',
    router: new VueRouter({
        mode: 'history',
        routes: [
            { path: '/home', component: Home },
            { path: '/contact', component: Contact }
        ]
    })
})