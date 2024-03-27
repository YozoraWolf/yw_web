<template>
    <div class="container">
        <UserSolid class="txt user_i"/>
        <h1 class="txt am_title">{{ $t('aboutme.title') }}</h1>
        <div class="grid">
            <div class="grid-item">
                <Personal />
            </div>
            <div class="grid-item">
                <TechStack />
            </div>
        </div>
    </div>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import UserSolid from '@assets/user-solid.svg';
import Personal from '@components/AboutMe/Personal.vue';
import TechStack from './AboutMe/TechStack.vue';
import { onMounted } from 'vue';

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

