import Vue from 'vue'
import App from './App.vue'

import vuejquery from 'vue-jquery'
Vue.use(vuejquery)
Vue.config.productionTip = false
//bootraps
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//end-bootraps
new Vue({
  render: h => h(App),
}).$mount('#app')
