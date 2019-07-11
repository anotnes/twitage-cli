<template>
<div class="top">
  <div class="header">
  </div>
  <div class="content">
    <h1>{{title}}</h1>
    <label>ユーザー名:</label><input type="text" id="name" v-bind:value="name"><br/>
    <label>本アプリへのログインパスワード:</label><input type="password" id="appPass" v-bind:value="appPass">（ログインに必要です）<br/>
    <label>人質にするTwitterID:</label><input type="text" id="twiId" v-bind:value="twiId">（ログインに必要です）<br/>
    <label>Twitterへのパスワード:</label><input type="password" id="twiPass" v-bind:value="twiPass"><br/>
    <button v-on:click="regist()">登録</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      title: 'ユーザー登録',
      name: store.state.userInfo.name,
      appPass: store.state.userInfo.appPass,
      twiId: store.state.userInfo.twiId,
      twiPass: store.state.userInfo.twiPass
    }
  },
  methods: {
      regist: function() {
          const resulData = {result:true};
          if (resulData.result) {

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
