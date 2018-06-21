import Vue from 'vue'
import Router from 'vue-router'
import Write from './views/Write.vue'
import List from './views/List.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Write
        }, {
            path: '/write',
            name: 'write',
            component: Write
        },
        {
            path: '/list',
            name: 'list',
            component: List
        }
    ]
})
