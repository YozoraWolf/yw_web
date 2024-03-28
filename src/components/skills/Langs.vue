<template>
    <div class="lang_container">
        <div class="lang" :key="lang.id" v-for="(lang, code) in langs">
            <RadialProgress :diameter="100" :completedSteps="lang.proficiency" :totalSteps="100"
                :startColor="'var(--stroke-color)'" :stopColor="'var(--stroke-color)'"
                :innerStrokeColor="'var(--inner-stroke-color)'">
                <img :src="'https://flagcdn.com/h60/' + lang.country + '.png'">
            </RadialProgress>
            <div class="lang_txt">
                <span class="txt lang_p">{{ lang.proficiency }}%</span>
                <span class="txt lang_t">{{ $t(`langs.${code}`) }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import RadialProgress from 'vue3-radial-progress'
import langs from '@data/langs.json';

</script>

<style lang="scss">
.lang_container {



    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .lang {
        width: 80px;
        height: 80px;

        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: 65px;
        margin-right: 35px;
        margin-left: 30px;

        img {
            width: 50px;
            box-shadow: 0px 0px 3px 1px black;
        }

        i {
            font-size: 40px;
            margin: 15px;
        }

        .lang_txt {

            display: flex;
            flex-direction: column;

            margin-top: 10px;

            .lang_t {
                text-align: center;
                font-size: 1.2rem;
                font-weight: bold;
            }

            .lang_p {
                font-size: 1.2rem;
                text-align: center;
            }
        }

    }
}
</style>