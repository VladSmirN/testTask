require('./bootstrap');
window.Vue = require('vue');


Vue.component('show-component', require('./components/ShowComponent.vue').default);

const app = new Vue({
    el: '#app',
});