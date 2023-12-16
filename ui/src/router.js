import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/timer',
            name: 'timer',
            component: () => import('./views/Timer.vue'),
            props: true,
            meta: {
                title: 'Tarkov Timer'
            },
        }

    ]
})