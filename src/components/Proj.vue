<template>
    <div class="proj_main">
        <h1>Projects</h1>
        <div class="grid">
            <div class="box-cont" v-for="(project, code) in projects" :key="project.id">
                <div class="box" @click.stop="showDesc(code)"
                    :style="{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), ${getImageURL(project.img_url)}` }">
                    <div ref="bcnts" class="box-content" @click.stop="showDesc(code)">
                        <div class="proj-label">
                            {{ $t(`projects.${code}.title`) }}
                        </div>
                        <div class="proj-desc">
                            {{ $t(`projects.${code}.desc`)  }}
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

let projects = ref([]);
const bcnts = ref([]);

onMounted(() => {
    // Fetch data from "data/projects.json" and assign it to the projects ref
    projects.value = Object.keys(projectsData).reduce((acc, key) => {
        acc[key] = { ...projectsData[key], showDesc: false };
        return acc;
    }, {});
});

const getImageURL = (img) => {
    return `url('src/assets/bgs/${img}')`;
}

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
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
        margin-bottom: 5%;
    }

    .box-cont {
        position: relative;
        width: auto;
        overflow: hidden;

        margin: 0 auto;


        .box {

            width: 450px;
            height: 450px;

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
                    font-size: 35px;
                    font-weight: bold;
                    text-align: center;
                    left: 50%;
                    white-space: nowrap;
                }

                .proj-desc {
                    left: 150%;
                    width: 90%;
                    font-size: 25px;
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