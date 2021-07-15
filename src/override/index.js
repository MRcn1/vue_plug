import Vue from 'vue'
import App from './Override.vue'
// Vue.prototype.$config = config

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})
