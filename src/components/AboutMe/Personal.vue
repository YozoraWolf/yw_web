<template>
    <div class="card">
        <div class="icon">
            <UserTieIcon class="icon" />
        </div>
        <div class="content">
            <h1>{{ $t('welcome.name') }}</h1>
            <div class="title">
                <CodeIcon class="ic" />
                <h3>{{ $t('aboutme.position') }}</h3>
            </div>
            <div class="title">
                <GlobeIcon class="ic" />
                <h3>{{ $t('aboutme.polyglot') }}</h3>
            </div>

            <div class="title">
                <BDayIcon class="ic" />
                <h3>{{ $t('aboutme.age') }}</h3>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import UserTieIcon from '@assets/user-tie-solid.svg';
import BDayIcon from '@assets/cake-candles-solid.svg';
import CodeIcon from '@assets/code-solid.svg';
import GlobeIcon from '@assets/globe-solid.svg';

</script>
  
<style scoped lang="scss">
.card {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
    margin: 10px;

    
    @media screen and (max-width: 670px) {
        flex-direction: column;

        .icon {
            margin-right: 0px !important;
            margin-bottom: 10px;
        }
    }

    .icon {
        width: 200px;
        height: 200px;
        margin-right: 50px;
    }

    .ic {
        display: inline;
        width: 32px;
        height: auto;
        margin-right: 20px;
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: left;

        h1  {
            font-size: 2.5rem;

            margin-top: 10px;
            margin-bottom: 10px;
        }
        
        h3 {
            font-size: 1.5rem; 
        }
         

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
}
</style>
  