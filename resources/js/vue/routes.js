import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/dashboard'
import Login from './components/login'
import Register from './components/register'

Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            name: "Login",
            component: Login,
        },
        {
            path: '/dashboard',
            name: "Dashboard",
            component: Dashboard,
        },

        {
            path: '/register',
            name: "Register",
            component: Register,
        },
    ],
    mode: 'history',
})