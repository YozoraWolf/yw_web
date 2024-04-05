<template>
    <div class="cont">
        <div class="section_one">
            <div class="contact_info">
                <span class="txt name"> {{ $t('welcome.name') }}</span>
                <span class="txt ps">{{ $t('welcome.title') }}</span>
                <span class="txt contact">
                    <EmailIcon class="icon" />
                    <span>E-Mail:</span> <span class="email" v-tooltip="{ content: $t('footer.email'), theme: 'wolf'}"
                        @click.stop="onEmailClick">yozorawolf@gmail.com</span>
                </span>
            </div>
        </div>
        <div class="hr"></div>
        <div class="txt copy_cont">
            <GitHubIcon v-tooltip="{content: $t('footer.github'), theme: 'wolf'}" class="icon github" @click="openGithub" />
            <span class="txt copyr">{{ $t('welcome.name') }} © 2024</span>
        </div>
    </div>
</template>

<script setup>
import EmailIcon from '@assets/envelope-solid.svg'
import GitHubIcon from '@assets/github.svg'

import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
import { createTooltip, destroyTooltip } from 'floating-vue'
const { t } = useI18n();    

let clicked = ref(false);

const onEmailClick = (event) => {
    clicked.value = true;

    const tooltip = createTooltip(event.target, {
        triggers: [],
        content: t('footer.copied'),
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
                display: flex;
                flex-direction: column;

                margin-left: 15px;
                margin-bottom: 20px;

                .name {
                    font-family: $ffamily;
                    font-size: 2.5rem;
                    margin-top: 10px;
                }

                .ps {
                    font-size: 2rem;
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
                        font-size: 2rem;
                    }

                    .email {
                        font-size: 2rem;
                        color: $text-color;
                        cursor: pointer;

                        margin-left: 5px;

                        &:hover {
                            color: $text-color;
                            text-decoration: underline;
                        }
                    }
                }

                @media screen and (max-width: 550px) {
                    .name {
                        font-size: 2rem;
                    }

                    .ps {
                        font-size: 1.5rem;
                    }

                    .contact {
                        .icon {
                            margin-right: 5px;
                        }

                        span {
                            font-size: 1rem;
                        }

                        .email {
                            font-size: 1rem;
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

            @media screen and (max-width: 550px) {
                margin-bottom: 50px;

                .copyr {
                    font-size: 1rem;
                }
            }
        }
    }</style>