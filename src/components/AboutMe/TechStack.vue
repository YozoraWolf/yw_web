<template>
    <div class="card">
        <div class="icon">
            <inline-svg :src="layer_group" width="50" height="50" fill="black" aria-label="" class="icon"></inline-svg>
        </div>
        <div class="content">
            <h1 class="title">{{ $t('aboutme.techstack') }}</h1>
            <div class="stacks">
                <div class="frontend-stack">
                    <h3>{{ $t('aboutme.frontend') }}</h3>
                    <div class="icon-row">
                        <i v-for="icon in frontendIcons" :key="icon" :class="`devicon-${icon}-plain colored`"></i>
                    </div>
                </div>
                <div class="backend-stack">
                    <h3>{{ $t('aboutme.backend') }}</h3>
                    <div class="icon-row">
                        <i v-for="icon in backendIcons" :key="icon" :class="`${getIcon(icon)} colored`"></i>
                    </div>
                </div>
                <div class="cloud-stack">
                    <h3>{{ $t('aboutme.cloud') }}</h3>
                    <div class="icon-row">
                        <i v-for="icon in cloudIcons" :key="icon" :class="`${getIcon(icon)} colored`"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import layer_group from '@assets/layer-group-solid.svg';

const frontendIcons = ['angularjs', 'vuejs'];
const backendIcons = ['nodejs', '.express', 'spring'];
const cloudIcons = ['amazonwebservices', 'azure'];

/* Could've created a class check for the icons but it's best
just to place a dot at the beginning of the icon name and get
the right icon instead of creating a class check which would
take a lot of loops to just find the right class + could be
deprecated in the future. */
const getIcon = (icon) => icon[0] === '.' ? `devicon-${icon.substring(1)}-original` : `devicon-${icon}-plain`;

</script>
  
<style scoped lang="scss">
.card {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
    margin: 10px;

    .icon {
        width: 128px;
        height: 128px;
        margin-right: 50px;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title {
            @extend .txt;
            margin: 5px 0;
            font-weight: bold;
            text-align: center;
        }

        .stacks {
            display: flex;
            justify-content: space-between;

            white-space: nowrap;

            .frontend-stack,
            .backend-stack {
                margin-left: 20px;
                margin-right: 20px;
                flex: 1;
            }

            h3 {
                margin-top: 10px;
                font-size: 1rem;
                text-align: center;
                margin-bottom: 15px;
            }

            .icon-row {
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-top: 5px;

                i {
                    font-size: 24px;
                    margin-left: 5px;
                    margin-right: 5px;
                }
            }
        }
    }

    h1,
    h2,
    h3 {
        margin: 0;
    }
}
</style>
  