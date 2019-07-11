<template>
<div class="top">
  <div class="header">
  </div>
  <div class="content">
    <input type="hidden" id="id" v-bind:value="id">
    <label>タスク名：</label><input type="text" v-bind:value="name">
    <label>期限：</label><input type="text" v-bind:value="limit">
    <label>作成者：</label>
    <label>担当者：</label><input type="text" v-bind:value="imposedStaff">
    <label>報告：</label><input type="textarea" v-bind:value="report">
    <label>承認：</label>
    <button v-on:click="postTask()">登録</button>
  </div>
</div>
</template>

<script>
import store from '@/store'
import router from '@/router/index'
export default {
  name: 'Top',
  data () {
    return {
      title: 'タスク管理',
      id: store.state.taskInfo.id,
      name: store.state.taskInfo.name,
      limit: store.state.taskInfo.limitDate,
      createStaff: store.state.taskInfo.createStaff,
      imposedStaff: store.state.taskInfo.imposedStaff,
      report: store.state.taskInfo.report,
      state: store.state.taskInfo.state,
    }
  },
  methods: {
      postTask: function() {
          // axiosでAPIと連携
          let resultData = {result:true};

          if (resultData.result) {

          } else {
            
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
