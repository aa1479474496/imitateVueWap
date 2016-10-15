//require('./assets/css/bootstrap.min.css')
require('./assets/css/main.css')
//require('bootstrap')
require("jquery.cookie")
Vue.use(require('vue-resource'))

//开启debug模式
Vue.config.debug = true

//directives
require('./components/common/directives.js')

//vue-router
const VueRouter = require('vue-router')
Vue.use(VueRouter)
const router = new VueRouter({
    history: true, //html5 mode (remove /#!/)
    saveScrollPosition: true
})

router.map({
    '': {
        name: 'home', component: function (resolve) {
            require(['./components/home/home.vue'], resolve)
        }
    },
    '/home': {
        name: 'home', component: function (resolve) {
            require(['./components/home/home.vue'], resolve)
        }
    },
    'login': {   
        name: 'login', component: function (resolve) {
            require(['./components/login/Login.vue'], resolve)
        }
    },
    '/*any': {
        component: function (resolve) {
            require(['./components/404.vue'], resolve)   
        }
    },
})
import {sync} from 'vuex-router-sync'
/*import store from './vuex/store'
sync(store, router)*/    
router.start(require('./App'), '#app')  

