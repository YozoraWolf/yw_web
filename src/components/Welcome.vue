<template>
    <div ref="welcomeCont" class="welcome-cont">
        <div ref="starsCont" class="stars">
            <div v-for="star in stars" :key="star.id" :style="star.style" :class="star.class"></div>
        </div>
        <div class="welcome-head">
            <div class="welcome-text">
                <WolfLogo ref="wolfLogoRef" class="intro icon" />
                <div ref="titleRef" class="intro txt title"> {{ $t('welcome.name') }}</div>
                <h2 ref="subRef" class="intro txt sub">{{ $t('welcome.title') }}</h2>
            </div>
        </div>
    </div>
</template>

<script setup>
import WolfLogo from '@assets/logo/wolf_logo_w.svg';

import { ref, onMounted, nextTick, toRaw } from 'vue';
import { promiseAnime } from '@/yw_utils';
import { getRandomNumber } from '@/yw_utils';

// Intro anim
const wolfLogoRef = ref(null);
const titleRef = ref(null);
const subRef = ref(null);


// Stars gen related
const welcomeCont = ref(null);
const starsCont = ref(null);
const stars = ref([]);

const getStarLangClass = () => localStorage.getItem('lang') === 'jp'
    ? 'star star-jp' : 'star star-lat';


// Function to create stars
const createStars = () => {

    /* Note: I was about to implement another algorithm to check for adjacent 
        stars, but decided against it as it would be too taxing for such a
        simple effect. Plus we keep complexity to a minimum.
    */
    stars.value = [];

    // Scale cont to control padding of cont
    const contScale = 0.9;
    const starSize = 4; // In pixels
    starsCont.value.style.transform = `scale(${contScale})`;

    let maxWidth = welcomeCont.value.offsetWidth;
    let maxHeight = welcomeCont.value.offsetHeight;


    const numStars = 50;
    for (let i = 0; i < numStars; i++) {
        const x = getRandomNumber(0, maxWidth);
        const y = getRandomNumber(0, maxHeight);
        stars.value.push({ id: i, class: ['star', getStarLangClass()], style: { width: `${starSize}px`, height: `${starSize}px`, left: `${x}px`, top: `${y}px`, "animation-delay": `${getRandomNumber(0, 3000)}ms` } });
    }
};

// Listen to lang change event to set the star font-size
addEventListener('changeLang', (e) => {
    if (starsCont.value === null) return;
    for (const child of starsCont.value.children) {
        child.className = [getStarLangClass()];
    }
});


onMounted(async () => {
    await nextTick();
    intro();
    createStars();
    window.addEventListener('resize', createStars);
});

const intro = async () => {
    await promiseAnime({
        targets: ".icon",
        opacity: [0, 1],
        duration: 500,
        easing: 'linear',
    });

    await promiseAnime({
        targets: titleRef.value,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 500,
        delay: 500,
        easing: 'easeOutExpo',
    });

    await promiseAnime({
        targets: subRef.value,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 500,
        delay: 500, 
        easing: 'easeOutExpo',
    });
}
</script>



<style lang="scss" scoped>
// Intro init
.intro {
    opacity: 0;
}

// Welcome stars anim css
.stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
}

.star {
    position: absolute;
    animation: pulsate 1.5s linear infinite alternate;
    border-radius: 50%;
    background-color: white;

    user-select: none;
}

.star-lat {
    font-size: 4px;
}

.star-jp {
    font-size: 8px;
}

@keyframes pulsate {
    0% {
        box-shadow: 0 0 0px 0px rgba(255, 255, 255, .3);
    }

    100% {
        box-shadow: 0 0 15px 5px rgba(255, 255, 255, .3);
    }
}

.welcome-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: linear-gradient(to top, #000040, #000010);

    overflow: hidden;

    height: 100vh;

    .welcome-head {
        position: relative;
        width: 100%;
        height: 500px;

        display: flex;
        justify-content: center;
        align-items: center;


        .welcome-text {
            position: relative;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            z-index: 1;

            .icon {

                color: white;
                fill: white;

                width: 240px;
                height: 240px;

                margin-left: 10px;
            }

            .title,
            .sub {
                margin: 5px;
                background-color: transparent;

                text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.7);
            }

            .title {
                color: white;
                font-family: $ffamily;
                font-size: 120px;
                font-weight: 300;

                text-align: center;
            }

            .sub {
                @extend .title;
                font-size: 80px;
                font-weight: normal;
            }
        }
    }



}
</style>