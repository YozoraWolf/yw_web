<template>
    <div class="cont">
        <div class="section_one">
            <div class="contact_info">
                <span class="txt name"> {{ $t('welcome.name') }}</span>
                <span class="txt ps">{{ $t('welcome.title') }}</span>
                <span class="txt contact">
                    <EmailIcon class="icon" />
                    <span>E-Mail:</span> <span class="email" v-tooltip="{ content: tip, theme: 'wolf'}"
                        @click="onEmailClick">yozorawolf@gmail.com</span>
                </span>
            </div>
        </div>
        <div class="hr"></div>
        <div class="txt copy_cont">
            <GitHubIcon v-tooltip="{content: 'View on GitHub!', theme: 'wolf'}" class="icon github" @click="openGithub" />
            <span class="txt copyr">{{ $t('welcome.name') }} © 2024</span>
        </div>
    </div>
</template>

<script setup>
import EmailIcon from '@assets/envelope-solid.svg'
import GitHubIcon from '@assets/github.svg'

// TODO: Fix tooltip
import { createTooltip, destroyTooltip } from 'floating-vue'
import { ref } from 'vue'

const clicked = ref(false)
const tip = "Click to copy my email!"

const onEmailClick = (event) => {
    clicked.value = true;

    const tooltip = createTooltip(event.target, {
        triggers: [],
        content: 'Copied!',
        theme: 'wolf'
    });
    tooltip.show()
    setTimeout(() => {
        tooltip.hide()
        // Transition
        setTimeout(() => {
            destroyTooltip(event.target)
        }, 2000)
    }, 2200)
    navigator.clipboard.writeText("yozorawolf@gmail.com");
}

const openGithub = () => {
    window.open('https://www.github.com/YozoraWolf', '_blank')
}
</script>

<style lang="scss">

.cont {
    background-color: $primary-color;
    height: auto;
    padding-bottom: 10px;

    .icon {
        width: 25px;
        height: 25px;
    }


        .section_one {
            .contact_info {
                margin-left: 15px;
                display: flex;
                flex-direction: column;

                .name {
                    font-family: $ffamily;
                    font-size: 40px;
                    margin-top: 10px;
                }

                .ps {
                    font-size: 25px;
                    margin-top: -5px;
                }

                .contact {
                    margin-top: 5px;

                    display: flex;
                    flex-direction: row;
                    justify-content: left;
                    align-items: center;

                    .icon {
                        margin-right: 10px;
                    }

                    span {
                        font-size: 20px;
                    }

                    .email {
                        font-size: 25px;
                        color: $text-color;
                        cursor: pointer;

                        margin-left: 5px;

                        &:hover {
                            color: $text-color;
                            text-decoration: underline;
                        }
                    }
                }
            }
        }

        .copy_cont {
            display: flex;
            justify-content: end;
            align-items: center;

            .icon {
                margin-right: 10px;
                width: 30px;
                height: 30px;
            }

            .github {

                &:hover {
                    cursor: pointer;
                }
            }

            .copyr {
                font-style: italic;
                font-size: 25px;
                margin-right: 10px;
            }
        }

        .empty {
            height: 5px;
        }
    }</style>