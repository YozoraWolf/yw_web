<template>
    <div class="welcome-cont">
        <div ref="starsCont" class="stars">
            <div v-for="star in stars" :key="star.id" :style="star.style" class="star">•</div>
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
import WolfLogo from '@assets/wolf_logo.svg';

import { ref, onMounted } from 'vue';
import anime from 'animejs';
import { getRandomNumber } from '@/yw_utils';

// Intro anim
const wolfLogoRef = ref(null);
const titleRef = ref(null);
const subRef = ref(null);


// TODO: Fix stars scale when resizing
// TODO: Fix star glow effect
// Stars gen related
const starsCont = ref(null);
const stars = ref([]);

// Function to create stars
const createStars = () => {

    // Scale cont to control padding of cont
    const contScale = 0.95;
    starsCont.value.style.transform = `scale(${contScale})`;

    const maxWidth = starsCont.value.offsetWidth;
    const maxHeight = starsCont.value.offsetHeight;
    console.log("maxHeight: ", maxHeight);

    const numStars = 50;
    for (let i = 0; i < numStars; i++) {
        const x = getRandomNumber(0, maxWidth);
        const y = getRandomNumber(0, maxHeight);
        stars.value.push({ id: i, style: { left: `${x}px`, top: `${y}px` } });
    }
};


onMounted(() => {
    setTimeout(() => {
        intro();
        createStars();
    }, 50);
});

const intro = () => {
    anime({
        targets: ".icon",
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeOutExpo',
    });

    anime({
        targets: titleRef.value,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 500,
        easing: 'easeOutExpo',
    });

    anime({
        targets: subRef.value,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 1000,
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
    width: 2px;
    height: 2px;
    animation: pulsate 1.5s linear infinite alternate;

    user-select: none;
}

@keyframes pulsate {
    0% {
        text-shadow: 0 0 3px rgba(255, 255, 255, 1);
    }

    100% {
        text-shadow: 0 0 50px rgba(255, 255, 255, 1);
    }
}

.welcome-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-image: linear-gradient(to top, #000040, #000010);

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