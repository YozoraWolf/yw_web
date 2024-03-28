<template>
    <div class="container">
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
import Personal from '@components/AboutMe/Personal.vue';
import TechStack from './AboutMe/TechStack.vue';
</script>

<style scoped lang="scss">
.container {
    width: 100%;
    height: auto;

    margin-top: 25px;

    background-color: $bg-color;

    display: flex;
    flex-direction: column;

    align-items: center;

    .am_title {
        font-size: $title-size;
    }


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

}
</style>

