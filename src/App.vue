<template>
    <div class="main-div">
        <perfect-scrollbar>
            <LangSelect />
            <Welcome />
            <AboutMe />
            <Skills />
            <Proj/>
            <Footer />
        </perfect-scrollbar>
    </div>
</template>

<script>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

import Welcome from './components/Welcome.vue';
import AboutMe from './components/AboutMe.vue';
import Skills from './components/Skills.vue';
import Proj from './components/Proj.vue';
import Footer from './components/Footer.vue';
import LangSelect from './components/LangSelect.vue';

export default {
    name: 'App',
    metaInfo: {
        title: 'YozoraWolf'
    },
    components: {
        Welcome,
        AboutMe,
        Skills,
        Proj,
        Footer,
        LangSelect,
        PerfectScrollbar
    },
    methods: {
    }
};
</script>

<style lang="scss">
@import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";

body {
    margin: 0;
    padding: 0;
}

p,
h1,
h2,
h3,
h4,
.main-div {
    color: $text-color;
    background-color: $bg-color;
}

.main-div {
    height: 100vh; 
    overflow: auto;
}
</style>