import { createApp } from "vue";
import App from './App.vue';
import RadialProgress from "vue3-radial-progress";
import InlineSvg from 'vue-inline-svg';
import FloatingVue from 'floating-vue'
import i18n from './i18n';
import Vue3PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import yw_utils from "./yw_utils";

// i18n needs a default message object, so we load one and make it a dummy to avoid occupying too much space if it becomes too big in the future.
let defMess = yw_utils.emptyObject(
    await yw_utils.loadLocalJSONA(`src/locales/${localStorage.getItem('lang') || "en"}.json`)
);

const app = createApp(App);
app.use(RadialProgress);
app.use(FloatingVue);
app.use(Vue3PerfectScrollbar);
app.use(i18n(defMess));
app.component('inline-svg', InlineSvg);
app.mount('#app');