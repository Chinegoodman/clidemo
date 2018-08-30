import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: '首页',
            meta: {
                bread: [
                    ['首页', '/']
                ]
            },
            component: resolve =>
                require(['./../components/homeWrap/home.vue'], resolve)
        },
        {
            path: '/content1',
            name: '标题1',
            meta: {
                bread: [
                    ['首页', '/'],
                    ['标题1', '/content1'],
                ]
            },
            component: resolve =>
                require(['./../components/homeWrap/content1.vue'], resolve)
        },
        {
            path: '/content2',
            name: '标题2',
            meta: {
                bread: [
                    ['首页', '/'],
                    ['标题2', '/content2'],
                ]
            },
            component: resolve =>
                require(['./../components/homeWrap/content2.vue'], resolve)
        },
    ]
})