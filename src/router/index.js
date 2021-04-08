import Vue from 'vue'
import VueRouter from 'vue-router'
const Tixiantongji = () => import('@/views/pages/TiXianToneJi.vue')

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/tixiantongji'
    },
    {
        path: '/tixiantongji',
        component:Tixiantongji
    }

]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router