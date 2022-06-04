import Vue from 'vue'
import VueRouter from 'vue-router';
import FakturGaji from '@/views/FakturGaji'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: 'faktur-gaji',
        component: FakturGaji,
    },
]

const router =new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router;