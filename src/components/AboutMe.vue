<template>
    <div class="container">
        <inline-svg src="../assets/user-solid.svg" width="50" height="50" fill="black" aria-label="My image"
                    class="txt user_i"></inline-svg>
        <h1 class="txt am_title">{{ $t('aboutme.title') }}</h1>
        <div class="grid">
            <div class="grid-item">
                <Personal/>
            </div>
            <div class="grid-item">
                <TechStack/>
            </div>
        </div>
    </div>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import Personal from '@components/AboutMe/Personal.vue';
import TechStack from './AboutMe/TechStack.vue';

import { watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from '../i18n';

const { locale } = useI18n({ useScope: 'global' });
watch(locale, (val) => {
    setI18nLanguage(val);
});

onMounted(() => {
    AOS.init({
        once: true
    });
});
</script>

<style lang="scss">
.container {
    width: 100%;
    height: auto;

    background-color: $bg-color;

    display: flex;
    flex-direction: column;

    align-items: center;

    
    .grid {
        display: grid;
        width: 100%;
        height: 100%;

        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;


        
        .grid-item {
            display: flex;
            justify-content: center;

            width: 100%;
            height: 100%;
            background-color: $bg-color;
        }
    }


    .user_i {
        background-image: url("../assets/user-solid.svg");
        background-size: 100% 100%;
        fill: $text-color;
        width: 50px;
        height: 50px;
        margin-top: 20px;
    }
}
</style>

