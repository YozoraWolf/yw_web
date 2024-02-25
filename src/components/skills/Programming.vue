<template>

  <div class="prog_container">
      
      <div class="prog" :key="prog.idx" v-for="prog in programming">
            <RadialProgress :diameter="100"
                       :completedSteps="prog.proficiency"
                       :totalSteps="100"
                       :startColor="'var(--stroke-color)'"
                       :stopColor="'var(--stroke-color)'"
                       :innerStrokeColor="'var(--inner-stroke-color)'">
                       <i :class="getIcon(prog.id)"></i>
            </RadialProgress>
            <span class="txt prog_p">{{prog.proficiency}}%</span>
            <span class="txt prog_t">{{prog.name}}</span> 
      </div>
  </div>
</template>

<script setup>
import RadialProgress from 'vue3-radial-progress'
const props = defineProps(['programming']);

const getIcon = (icon) => {
    switch(icon) {
        case "azure":
        case "json":
        case "xml":
            return 'devicon-devicon-plain';
        case "raspberrypi":
            return 'devicon-'+icon+'-line';
        default:
            return 'devicon-'+icon+'-plain';
    }
}
</script>

<style lang="scss">
@import "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"; 


:root {
    --stroke-color: #{$stroke-color};
    --inner-stroke-color: #{$inner-stroke-color};
}

.prog_container {

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .prog {
        width: 80px;
        height: 80px;
        
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: 65px;
        margin-right: 35px;
        margin-left: 30px;

        .prog_t, .prog_p {
            text-align: center;
            font-family: $ffamily;
            color: $text-color;
        }

        .prog_t {
            font-weight: bold;
        }

        i {
            font-size: 40px;
            color: $text-color;
        }

    }
}

</style>