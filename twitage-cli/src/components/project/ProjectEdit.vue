<template>
  <div class="content">
    <div class=""><h1>プロジェクトを作成する</h1></div>
  </div>
</template>


<script>
import store from '@/store'
import router from '@/router/index'
export default {
  name: 'Top',
  mounted () {
    
  },
  data () {
    return {
      userName: store.state.userInfo.name,
      taskList: store.state.projectInfo.taskList,
      memberList: store.state.projectInfo.memberList,
    }
  },
  methods: {

    
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
