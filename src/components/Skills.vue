<template>
    <div class="s_container">
        <h1 class="txt s_title">Skills</h1>
        <Programming/>
        <h1 class="txt s_title">Languages</h1>
        <Langs :langs="langs" />
    </div>
</template>

<script>
import Programming from "./skills/Programming.vue";
import Langs from "./skills/Langs.vue";

import skills from "./../data/programming.json";
import langs from "./../data/langs.json";

export default {
    name: "Skills",
    setup() {
        return {
            skills: skills,
            langs: langs
        }
    },
    components: {
        Programming,
        Langs
    }
}
</script>

<style lang="scss">


.s_container {
    background-color: $bg-color;

    .lang_t, .lang_p {
        color: $text-color;
    }

    .s_title {
        text-align: center;
        font-family: $ffamily;
        margin-top: 40px;
    }
}
</style>