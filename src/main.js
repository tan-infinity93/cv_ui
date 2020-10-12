import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import VueToastr from "vue-toastr";
import '@fortawesome/fontawesome-free/css/all.css'
import Login from './components/Login';
import HelloWorld from './components/HelloWorld';
import CV from './components/CV';
import CVAPI from './components/CVAPI';

Vue.config.productionTip = false

// App Routes:

const routes = [
    {
        path: '/login', component: Login, meta: { title: 'Login'} // Tablet, Laptop, Laptop(L)
    },
    {
        path: '/', redirect: '/login', meta: { title: 'Login'}
    },
    {
        path: '/home', component: HelloWorld, meta: { title: 'Home'}
    },
    {
        path: '/cv', component: CV, meta: { title: 'Curriculam Vitae'}
    },
    {
        path: '/cv-api', component: CVAPI, meta: { title: 'CV API'}
    },
    {
        path: '/*', redirect: '/login', meta: { title: 'Login'}
    }
]

const router = new VueRouter({
routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
});

Vue.use(VueToastr);
Vue.use(VueRouter);

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
