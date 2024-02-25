<template>
    <div class="main-div">
        <LangSelect />
        <Welcome />
        <AboutMe />
        <Skills />
        
        <!--<Projects />-->
        <Proj />
        <Footer />
    </div>
</template>

<script>
import Welcome from './components/Welcome.vue';
import AboutMe from './components/AboutMe.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
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
        Projects,
        Proj,
        Footer,
        LangSelect
    },
    methods: {
    }
};
</script>

<style lang="scss">

body {
    margin: 0;
    padding: 0;
}

 p, h1, h2, h3, h4, .main-div {
    color: $text-color;
    background-color: $bg-color;
 }
</style>