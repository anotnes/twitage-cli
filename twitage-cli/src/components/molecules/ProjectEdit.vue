<template>
  <div class="content">
    <div class="form-component project-name-area">
        プロジェクト名<br>
        <input type="text" v-bind:value="projectName" name="project-name"/>
    </div>
    <div class="form-component project-extension-area">
        プロジェクトの説明<br>
        <input type="textarea" v-bind:value="extension" name="extension" />
    </div>
    <div class="form-component project-member-area">
        プロジェクトに招待するひとたち<br>
        <input type="text" name="project-name"/>
    </div>
    <div class="form-component button-area">
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
  computed: {
    projectName() {
      return this.$store.getters.projectInfo.name;
    },
    extension() {
      return this.$store.getters.projectInfo.extension;
    },
    projectMemberList() {
      return this.$store.getters.projectInfo.memberList;
    },
  },
  data () {
    return {

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
  text-align:left;
  padding: 0px;
  margin: 0px;
  background-color:#FCF8EA;
  width:100%;
  height:100%;
}

.form-component {
  height:100px;
}
</style>
