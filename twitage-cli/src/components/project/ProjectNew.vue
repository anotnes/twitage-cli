<template>
  <div class="content">
    <div class="project-name-area">
        プロジェクト名<br>
        <input type="text" name="project-name"/>
    </div>
    <div class="project-extension-area">
        プロジェクトの説明<br>
        <input type="textarea" name="extension" />
    </div>
    <div class="project-member-area">
        プロジェクトに招待するひとたち<br>
        <input type="text" name="project-name"/>
    </div>
    <div class="button-area">
        <button>キャンセル</button>
        <button>プロジェクトを作成する</button>
    </div>
  </div>
</template>


<script>
import store from '@/store'
import router from '@/router/index'
export default {
  name: 'ProjectNew',
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
.content {
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  background-color:#FCF8EA;
  width:1 00%;
}
</style>
