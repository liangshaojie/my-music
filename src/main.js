//为了用Es6 import
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import store from './store'
import VueLazyload from 'vue-lazyload'

import './common/stylus/index.styl'

fastclick.attach(document.body)
Vue.config.productionTip = false

Vue.use(VueLazyload, {
    loading: require('./common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

console.log(44444);
