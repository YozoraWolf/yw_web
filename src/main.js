import { createApp } from "vue";
import App from './App.vue';
import RadialProgress from "vue3-radial-progress";
import InlineSvg from 'vue-inline-svg';
import FloatingVue from 'floating-vue'
import i18n from './i18n';

const app = createApp(App);
app.use(RadialProgress);
app.use(FloatingVue);
app.use(i18n());
app.component('inline-svg', InlineSvg);
app.mount('#app');