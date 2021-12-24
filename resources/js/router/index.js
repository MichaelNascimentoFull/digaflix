import VueRouter from "vue-router";

const routes = [
    {
        path: '',
        name: 'home',
        component: () => import('../pages/HomePage.vue'),
    },
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router;
