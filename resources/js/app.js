
window.Vue = require('vue');

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.component('show-component', require('./components/ShowComponent.vue').default);
Vue.component('card-component', require('./components/CardComponent.vue').default);
Vue.use(Vuetify);
const app = new Vue({
    vuetify: new Vuetify(),
    el: '#app',
});