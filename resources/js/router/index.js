import VueRouter from "vue-router";

const routes = [
    {
        path: '',
        name: 'Home',
        component: () => import('../pages/HomePage.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../pages/LoginPage.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../pages/RegisterPage.vue'),
    },
    {
        path: '/forgotPassword',
        name: 'Forgotpassword',
        component: () => import('../pages/ForgotPassword.vue'),
    },
    {
        path: '/newPassword/:userEmail/:token',
        name: 'NewPassword',
        component: () => import('../pages/NewPassword.vue'),
    },
    {
        path: '/successPage',
        name: 'SuccessPage',
        component: () => import('../pages/SuccessPage.vue'),
    },
    {
        path: '/resendVerify/:userEmail',
        name: 'ResendVerify',
        component: () => import('../pages/ResendVerify.vue'),
    },
    {
        path: '/movies',
        name: 'MoviesPage',
        component: () => import('../pages/MoviesPage.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;
