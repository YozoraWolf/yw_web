<template>
    <div class="welcome-cont">
        <div class="welcome-head">
            <div class="welcome-text">
                <svg class="txt icon"></svg>
                <div class="txt title"> {{ $t('welcome.name') }}</div>
                <h2 class="txt sub">{{ $t('welcome.title') }}</h2>
            </div>template
        </div> 
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.welcome-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: black;

    overflow: hidden;

    .welcome-head {
        position: relative;
        width: 100%;
        height: 500px;
        background-color: black;

        display: flex;
        justify-content: center;
        align-items: center;


        &::before {
            content: '';
            position: absolute;
            top: -10%;
            left: 10%;
            width: 100%;
            height: 120%;
            background: linear-gradient(to right, black 0%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 90%, black 100%), url('./../assets/bgs/code_w.png') no-repeat;
            filter: blur(2px);
            background-size: 100% 100%;
            perspective: 50% 50%;
            transform: perspective(1000px) rotateY(15deg);
            z-index: 0;
        }

        .welcome-text {
            position: relative;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            z-index: 1;
            .icon {
                background-image: url("./../assets/wolf.svg");
                background-size: 100% 100%;

                color: white;

                text-shadow: 1px 1px 3px black;

                width: 120px;

                margin-left: 10px;
            }

            .title, .sub {
                margin: 5px;
                background-color: transparent;
            }

            .title {
                color: white;
                font-family: $ffamily;
                font-size: 60px;
                font-weight: 300;

                text-align: center;

                text-shadow: 0px 0px 4px white;
            }

            .sub {
                @extend .title;
                font-size: 40px;
                font-weight: normal;
            }
        }
    }


    
}
</style>