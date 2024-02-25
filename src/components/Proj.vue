<template>
    <div class="grid" >
        <div class="box-cont" v-for="(project, idx) in projects" :key="project.id">
            <div class="box" @click.stop="showDesc(idx)" :style="{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), ${getImageURL(project.img_url)}` }">
                <div ref="bcnts" class="box-content" @click.stop="showDesc(idx)">
                    <div class="proj-label" >
                        {{ project.title }}
                    </div>
                    <div class="proj-desc">
                        {{ project.desc }}
                    </div>
                </div>
            </div>
            <div class="proj-icon">
            <i v-for="lang in project.langs" :key="lang" :class="`devicon-${lang}-plain box-icon-devicon`"></i>
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
    projects.value = projectsData.map(project => ({
        ...project,
        showDesc: false
    }));
});

const getImageURL = (img) => {
    return `url(@/../assets/bgs/${img})`;
}

const showDesc = (id) => {

    const proj = toRaw(projects.value[id]);
    const bcnt = bcnts.value[id];

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

// TODO: Y - Axis bugs when animejs starts.

// styles

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 5%;
}

.box-cont {
    position: relative;
    width: 100%;
    overflow: hidden;

    .box {
        
        width: 400px;
        height: 400px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 25%;

        background-repeat: no-repeat;
        background-size: cover;

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
            will-change: transform; /* Prevents transformation bug when anim starts */

            .proj-label, .proj-desc {
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
                font-family: "Lato", sans-serif;
                font-size: 24px;
                font-weight: bold;
                text-align: center;
                left: 50%;
            }

            .proj-desc {
                left: 150%;
                width: 90%;
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

</style>