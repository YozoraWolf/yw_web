<template>
    <div class="prog_main">
        <div class="prog_container">
            <div class="prog_section" v-for="section in sections" :key="section.id">
                <!-- Frontend -->
                <h3>{{ $t(`skills.${section.toLowerCase()}`) }}</h3>
                <div class="prog_category">
                    <div class="prog" v-for="prog in getSkillsByCategory(section.toLowerCase())" :key="prog.idx">
                        <RadialProgress :diameter="100" :completedSteps="prog.proficiency" :totalSteps="100"
                            :startColor="'var(--stroke-color)'" :stopColor="'var(--stroke-color)'"
                            :innerStrokeColor="'var(--inner-stroke-color)'">
                            <i :class="getIcon(prog.id)"></i>
                        </RadialProgress>
                        <div class="prog_txt">
                            <h4 class="prog_prof">{{ prog.proficiency }}%</h4>
                            <h4 class="prog_title">{{ prog.name }}</h4>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
import RadialProgress from 'vue3-radial-progress'
import skills from '@data/programming.json';

const sections = ["Programming", "Frontend", "Backend", "DB", "Tools", "Cloud", "Others",];

const getSkillsByCategory = (category) => {
    return skills.filter(prog => prog.cat === category);
};

const getIcon = (icon) => icon[0] === '.' ? `devicon-${icon.substring(1)}-original` : `devicon-${icon}-plain`;

// Add other categories as needed
</script>

<style scoped lang="scss">
:root {
    --stroke-color: #{$stroke-color};
    --inner-stroke-color: #{$inner-stroke-color};
}

.prog_main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h3 {
        width: fit-content;
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 10px;
        flex: 0;
    }

    .prog_section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        .prog_category {
            margin-bottom: 20px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: center;

            flex-wrap: wrap;

            .prog {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                margin: 25px;


                i {
                    font-size: 40px;
                }

                .prog_txt {

                    margin-top: 10px;

                    .prog_prof {
                        text-align: center;
                        font-size: 1.2rem;
                        font-weight: 700;
                        margin: 0;
                    }

                    .prog_title {
                        text-align: center;
                        font-size: 1.2rem;
                        margin: 0;
                    }
                }


            }

        }
    }
}
</style>