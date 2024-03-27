import { createApp } from "vue";
import App from './App.vue';
import RadialProgress from "vue3-radial-progress";
import 'floating-vue/dist/style.css'
import FloatingVue from 'floating-vue'
import i18n from './i18n';
import Vue3PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
// Load dummy JSON for locale init check
import dummy from './locales/dummy.json';

const app = createApp(App);
app.use(RadialProgress);
app.use(FloatingVue, {
        themes: {
            wolf: {
                $extend: 'tooltip',
                triggers: ['hover'],
                autoHide: true
            },
        },
    });
app.use(Vue3PerfectScrollbar);
app.use(i18n(dummy));
app.mount('#app');