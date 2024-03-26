<template>
    <div class="main-div">
        <perfect-scrollbar>
            <LangSelect/>
            <Welcome/>
            <AboutMe/>
            <Skills/>
            <Proj/>
            <Footer/>
        </perfect-scrollbar>
    </div>
</template>

<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import { loadDefaultFont } from './yw_utils';

import Welcome from './components/Welcome.vue';
import AboutMe from './components/AboutMe.vue';
import Skills from './components/Skills.vue';
import Proj from './components/Proj.vue';
import Footer from './components/Footer.vue';
import LangSelect from './components/LangSelect.vue';


</script>

<style scoped lang="scss">
@import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
</style>