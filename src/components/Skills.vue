<template>
    <div class="s_container">
        <h1 class="txt s_title">{{ $t('skills.title') }}</h1>
        <Programming />
        <h1 class="txt s_title">{{ $t('langs.title') }}</h1>
        <Langs />
    </div>
</template>

<script setup>
import Programming from "./skills/Programming.vue";
import Langs from "./skills/Langs.vue";
</script>

<style lang="scss">
.s_container {
    background-color: $bg-color;

    .lang_t,
    .lang_p {
        color: $text-color;
    }

    .s_title {
        text-align: center;
        font-family: $ffamily;
        margin-top: 40px;
    }
}
</style>