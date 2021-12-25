import VueRouter from "vue-router";

const routes = [
    {
        path: '',
        name: 'home',
        component: () => import('../pages/HomePage.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/LoginPage.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../pages/RegisterPage.vue'),
    },
    {
        path: '/forgotpassword',
        name: 'forgotpassword',
        component: () => import('../pages/ForgotPassword.vue'),
    },
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router;
