<template>
    <div class="header">
      <div v-if="projectName != ''" class="project-name">{{projectName}}</div>
      <div v-if="projectName == ''" class="project-name">プロジェクトの新規作成</div>
      <div v-if="extension != ''" class="project-extension">{{extension}}</div>
    </div>
</template>

<script>
import store from '@/store'
import router from '@/router/index'

export default {
  name: 'Project',
  computed: {
    projectName() {
      return this.$store.getters.projectInfo.name;
    },
    extension() {
      return this.$store.getters.projectInfo.extension;
    }
  },
  methods: {
      
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* SP対応 */
@media screen and (max-width: 479px){

}

/* PC対応 */
@media screen and (min-width: 480px){
  .header {
    width: 100%;
    height: 60px;
    background-color:#FCF8EA;
    color: #381713;
    padding: 0px;
    margin: 0px;
  }

  .project-name {
    text-align: left;
  }

  .project-extension {
    text-align: left;
    font-size: 12px;
  }
}
</style>
