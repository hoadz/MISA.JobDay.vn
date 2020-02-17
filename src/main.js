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

//ckeditor
import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use( CKEditor );
//end-checkediter

//button
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)
//end-button

//router
import VueRouter from 'vue-router'
import {routes} from './router.js'
Vue.use(VueRouter)

const  router = new VueRouter({
  mode: 'history',
  routes
})
//end-router

// crop image
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
Vue.component(VueCropper);
// end-crop image
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
