//require('./bootstrap');
window.Vue = require('vue');
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify);
Vue.component('show-component', require('./components/ShowComponent.vue').default);
 
const app = new Vue({
    el: '#app',
});