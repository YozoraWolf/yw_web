<template>
    <div class="lang-select" ref="langSelect">
        <img src="https://flagcdn.com/w80/us.png" @click="changeLang('en')" class="lang">
        <img src="https://flagcdn.com/w80/mx.png" @click="changeLang('es')" class="lang">
        <img src="https://flagcdn.com/w80/fr.png" @click="changeLang('fr')" class="lang">
        <img src="https://flagcdn.com/w80/jp.png" @click="changeLang('jp')" class="lang">
        <img :src="getFlag(selLang)" class="sel-lang" @click="toggleLangs">
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, ref } from 'vue';
import anime from 'animejs';



let selLang = ref('en');
let showLangs = ref(true);

// generate changeLang method
const { locale } = useI18n({ useScope: 'global' });

const changeLang = (lang) => {
    selLang.value = lang;
    locale.value = lang;
    localStorage.setItem('lang', lang);

    // Custom event: changeLang

    dispatchEvent(new CustomEvent('changeLang', {
        detail: {
            lang: lang
        }
    }));
    document.documentElement.style.setProperty('--def-font',
        lang === 'jp' ? 'Zen Maru Gothic' : 'Lato')
    toggleLangs();
}

const flags = {
    en: 'us',
    es: 'mx',
    fr: 'fr',
    jp: 'jp'
}

const getFlag = (lang) => {
    return `https://flagcdn.com/w80/${flags[lang]}.png`;
}

const toggleLangs = () => {
    // Use animejs to animate fade in all class 'lang' from right
    showLangs.value = !showLangs.value;
    if (showLangs.value) {
        anime({
            targets: '.lang-select > .lang',
            translateX: 0,
            opacity: 1,
            duration: 50,
            easing: 'linear',
        });
    } else {
        anime({
            targets: '.lang-select > .lang',
            translateX: 100,
            opacity: 0,
            duration: 50,
            easing: 'linear'
        });
    }
}

let langSelect = ref(null);

onMounted(() => {
    const lang = localStorage.getItem('lang');

    if (lang) {
        locale.value = lang;
        selLang.value = lang;
    }

    initLangUI();


});

const initLangUI = () => {
    langSelect.value.querySelectorAll('.lang').forEach((el) => {
        el.classList.add('hidden');
    });


    setTimeout(() => {
        toggleLangs();
    }, 10);



    setTimeout(() => {
        langSelect.value.querySelectorAll('.lang').forEach((el) => {
            el.classList.remove('hidden');
        });
    }, 1000);
}

</script>

<style lang="scss">
.hidden {
    display: none;
}

.lang-select {

    position: fixed;
    bottom: 30px;
    right: 15px;
    z-index: 7;

    display: flex;
    flex-direction: column;
    flex-grow: 0;

    img {
        margin-bottom: 15px;
    }

    .sel-lang {

        background-image: url("https://flagcdn.com/w80/us.png");
        transition: 0.3s ease-in-out;

        &:hover {
            scale: 1;
            transition: 0.3s ease-in-out;
        }
    }

    .lang,
    .sel-lang {
        height: 60px;
        width: 80px;
        cursor: pointer;
        user-select: none;

        background-position: center;
        background-size: inherit;
        background-repeat: no-repeat;
        border-radius: 20%;

        transition: 0.3s ease-in-out;

        &:hover {
            scale: 1.2;
            transition: 0.3s ease-in-out;
        }
    }
}
</style>
