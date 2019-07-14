<template>
<div class="top">
  <div class="content">
    <div class="header">
      <span class="title">{{title}}</span>
      <router-link to="/signIn">ログイン</router-link>
    </div>
    <router-link to="/SignUp">Twitageをはじめる</router-link>
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
