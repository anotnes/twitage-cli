<template>
<div class="top">
  <div class="content">
    <div class="header">
      <span class="title">{{title}}</span>
      <router-link to="/login">ログイン</router-link>
  </div>
    <button v-on:click="moveUserRegist()">Twitageをはじめる</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      title: 'Twitage',
    }
  },
  methods: {
      moveUserRegist: function() {
          router.push("/userRegist");
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
h3 {
    width: 60%;
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

img {
  
}

button {
    background-color: white;
    border-color: #a02c58;
    color: #a02c58;
    font-size: 18px;
    width: 200px;
    height: 40px;
    border-radius: 6px;
}

.header {
    width: 100%;
    height: 40px;
    color: white;
    padding: 0px;
    margin: 0px;
}

.title {
    font-size: 24px;
}

.content {
    
}

.message {
    font-size: 12px;
}
</style>
