<template>
    <div class="card">
        <div class="icon">
            <inline-svg :src="user_tie" width="50" height="50" fill="black" aria-label="" class="icon"></inline-svg>
        </div>
        <div class="content">
            <h1>{{ $t('welcome.name') }}</h1>
            <div class="title">
                <inline-svg :src="code" width="50" height="50" fill="black" aria-label="" class="ic code"></inline-svg>
                <h3>{{ $t('aboutme.position') }}</h3>
            </div>
            <div class="title">
                <inline-svg :src="globe" width="50" height="50" fill="black" aria-label="" class="ic globe"></inline-svg>
                <h3>{{ $t('aboutme.polyglot') }}</h3>
            </div>

            <div class="title">
                <inline-svg :src="birthday" width="50" height="50" fill="black" aria-label=""
                    class="ic birthday"></inline-svg>
                <h3>{{ $t('aboutme.age') }}</h3>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import user_tie from '@assets/user-tie-solid.svg';
import birthday from '@assets/cake-candles-solid.svg';
import code from '@assets/code-solid.svg';
import globe from '@assets/globe-solid.svg';

</script>
  
<style lang="scss">
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

    .ic {
        display: inline;
        width: 16px;
        height: auto;
        margin-right: 10px;
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: left;

        .title {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 5px 0;
        }
    }

    h1,
    h2,
    h3 {
        margin: 0;
    }

    h3 {
        font-size: 1rem;
    }
}
</style>
  