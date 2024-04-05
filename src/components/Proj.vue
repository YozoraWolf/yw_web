<template>
    <div class="proj_main">
        <h1>Projects</h1>
        <div class="grid">
            <div class="box-cont" v-for="(project, code) in projects" :key="project.id">
                <div class="box" @click.stop="showDesc(code)"
                    :style="{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${getImageURL(project.img_url)})` }">
                    <div ref="bcnts" class="box-content" @click.stop="showDesc(code)">
                        <div class="proj-label">
                            {{ $t(`projects.${code}.title`) }}
                        </div>
                        <div class="proj-desc">
                            {{ $t(`projects.${code}.desc`) }}
                        </div>
                    </div>
                </div>
                <div class="proj-icon">
                    <i v-for="lang in code.langs" :key="lang" :class="`devicon-${lang}-plain box-icon-devicon`"></i>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, toRaw } from 'vue';
import anime from 'animejs';
import projectsData from '@data/projects.json';

import downlooruBg from "@assets/bgs/code0.jpg";
import csflopappBg from "@assets/bgs/code1.jpg";
import csfhazappBg from "@assets/bgs/code2.jpg";
import botbricoBg from "@assets/bgs/chatbot.jpg";
import acuacarBg from "@assets/bgs/meter.jpg";
import smartgreenBg from "@assets/bgs/sprinklers.jpg";
import firaBg from "@assets/bgs/live.jpg";
import ofmsBg from "@assets/bgs/main5.jpg";

let bgs = {
    "code0.jpg": downlooruBg,
    "code1.jpg": csflopappBg,
    "code2.jpg": csfhazappBg,
    "chatbot.jpg": botbricoBg,
    "meter.jpg": acuacarBg,
    "sprinklers.jpg": smartgreenBg,
    "live.jpg": firaBg,
    "main5.jpg": ofmsBg
};

let projects = ref([]);
const bcnts = ref([]);

onMounted(() => {
    // Fetch data from "data/projects.json" and assign it to the projects ref
    projects.value = Object.keys(projectsData).reduce((acc, key) => {
        acc[key] = { ...projectsData[key], showDesc: false };
        return acc;
    }, {});
});

const getImageURL = (imgName) => {
    return bgs.hasOwnProperty(imgName) ? bgs[imgName] : null;
};

const showDesc = (id) => {

    // Get the project and the container by their respective key and idx
    const proj = toRaw(projects.value)[id];
    const bcnt = toRaw(bcnts.value)[Object.keys(projects.value).indexOf(id)];

    proj.showDesc = !proj.showDesc;

    const containerWidth = bcnt.offsetWidth;

    anime({
        targets: bcnt,
        translateX: proj.showDesc ? [0, -containerWidth] : [-containerWidth, 0],
        duration: 500,
        easing: 'easeInOutQuad'
    });

}
</script>

<style lang="scss">
.proj_main {
    margin-left: 5px;
    margin-right: 5px;

    h1 {
        text-align: center;
        font-size: $title-size;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(500px, 100%), 1fr));
        grid-gap: 3px;
        grid-auto-flow: row;
        margin-bottom: 5%;
    }

    .box-cont {
        position: relative;
        width: auto;
        overflow: hidden;


        .box {

            width: 450px;
            max-width: 100%;
            height: 450px;

            @media screen and (max-width: 550px) {
                width: 100vw;
                max-width: 80vw;
            }

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border-radius: 30%;

            background-repeat: no-repeat;
            background-size: cover;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);


            padding: 20px;
            margin: 20px;
            overflow: hidden;

            user-select: none;
            cursor: pointer;

            .box-content {
                display: block;
                min-width: 100%;
                text-align: center;
                padding: 0;
                margin: 0;

                width: 100%;
                height: 100%;
                will-change: transform;
                /* Prevents transformation bug when anim starts */

                .proj-label,
                .proj-desc {
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
                    text-align: center;
                    display: inline-block;
                    position: absolute;
                    width: auto;
                    height: auto;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .proj-label {
                    font-size: 2.5rem;
                    font-weight: bold;
                    text-align: center;
                    left: 50%;
                    white-space: nowrap;
                }

                .proj-desc {
                    left: 150%;
                    width: 90%;
                    font-size: 2rem;
                }

                @media screen and (max-width: 550px) {
                    .proj-label {
                        font-size: 2rem;
                    }

                    .proj-desc {
                        font-size: 1rem;
                        margin-left: 5px;
                    }
                }

            }


        }

        .proj-icon {
            font-size: 24px;
            margin-bottom: 5px;
            text-align: center;

            i {
                margin-left: 10px;
                margin-right: 10px;
                font-size: 40px;

            }
        }


    }
}
</style>