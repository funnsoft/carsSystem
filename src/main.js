import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

//开启debug模式
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResource);

import login from './components/login.vue'
import home from './components/home.vue'
import addCustomer from './components/addCustomer.vue'
import account from './components/account.vue'
import borrowingInfo from './components/account/borrowingInfo.vue'
import customerInfo from './components/account/customerInfo.vue'
import carInfo from './components/account/carInfo.vue'
import operatorInfo from './components/account/operatorInfo.vue'
import findPwd from './components/findPwd.vue'


// 配置路由规则
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: home//,alias: '/d'//,地址栏输入/d的时候跳转到a
        },
        {
            path: '/home',
            component: home//,alias: '/d'//,地址栏输入/d的时候跳转到a
        },{
            path: '/login',
            component: login
        },{
            path: '/addCustomer',
            component: addCustomer
        },{
            path: '/account',
            component: account
        },
        {
            path: '/borrowingInfo',
            component: borrowingInfo
        },
        {
            path: '/customerInfo',
            component: customerInfo
        },
        {
            path: '/carInfo',
            component: carInfo,
        },
        {
            path: '/operatorInfo',
            component: operatorInfo
        },
        {
            path: '/findPwd',
            component: findPwd
        }


    ]
});


new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
