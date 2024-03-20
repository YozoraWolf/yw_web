<template>
    <div class="cont">
        <div class="section_one">
            <div class="contact_info">
                <b class="txt name">YozoraWolf</b>
                <i class="txt ps">Full Stack Programmer</i>
                <span class="txt contact">
                    <b>E-Mail:</b> <span class="email"
                    v-tooltip="{ content: tip }" @click="onEmailClick($event)">yozorawolf@gmail.com</span>
                </span>

              
            </div>
        </div>
        <div class="hr"></div>
        <div class="txt copy_cont">
            <span class="txt copyr">YozoraWolf © 2024</span>
        </div>
      
  </div>
</template>

<script>
import { createTooltip, destroyTooltip } from 'floating-vue'


export default {
    name: "Footer",
    data() {
        return {
            clicked: false,
            tip: "Click to copy my email!"
        }
    },
    methods: {
        onEmailClick(event) {
            this.clicked = true;
            
            const tooltip = createTooltip(event.target, {
                triggers: [],
                content: 'Copied!',
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
    }
}
</script>

<style lang="scss">
@import "./../vars.scss";


    .cont {
        background-color: $primary-color;
        height: auto;

        .section_one {
            .contact_info {
                margin-left: 15px;
                display: flex;
                flex-direction: column;

                .name {
                    font-family: $ffamily;
                    font-size:25px;
                    margin-top: 10px;

                }

                .ps {
                    font-family: $ffamily;
                    font-size: 15px;

                    margin-top: -5px;


                }

                .contact {
                    font-family: $ffamily;
                    
                    margin-top: 5px;


                    .email {
                        font-family: $ffamily;
                        font-size: 15px;
                        color: $text-color;
                        cursor: pointer;

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


            .copyr {
                font-family: $ffamily;
                font-style: italic;
                margin-right: 10px;
            }
        }

        .empty {
            height: 5px;
        }
        
    }
</style>