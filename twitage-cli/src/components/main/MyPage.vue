<template>
  <div class="my-page">
    <h1>MyPage</h1>
  </div>
</template>

<script>
import store from '@/store'
import router from '@/router/index'

export default {
  name: 'MyPage',
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
