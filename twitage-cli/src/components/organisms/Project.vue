<template>
  <div>
    <ProjectHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import store from '@/store'
import router from '@/router/index'
import ProjectHeader from '@/components/molecules/ProjectHeader'

export default {
  name: 'Project',
  components: {
    ProjectHeader
  },
  methods: {
      
  },
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
