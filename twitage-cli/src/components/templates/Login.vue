<template>
<div class="top">
  <div class="content">
    <h1>ログイン</h1>
    <span>{{msg}}</span><br>
    <label>TwitterID:</label><input type="text" id="id"><br/>
    <label>Password:</label><input type="password" id="pass"><br/>
    <button v-on:click="login()">ログイン</button>
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
      msg: ''
    }
  },
  methods: {
      login() {
        // ログイン結果をAXIOSにて取得
        // todo
        //const resultData = {};
        // 動確のためベタがき
        const resultData = {
            result:true, 
            err_msg:"IDもしくはパスワードが間違っています", 
            user_info:{
                name:"秋津燈太郎", 
                twi_account:"@Heartxland", 
                icon_url:"https://pbs.twimg.com/profile_images/1124962230993162240/wWzsssdN_400x400.jpg",
                limit:"3", 
                project_list:[
                    {name:"秋津家", id:"1"},
                    {name:"anotnes", id:"2"}
                ],
                imposed_tasks:[
                    {name:"課せられたタスク1", id:"1", limit:'2019/06/01'},
                    {name:"課せられたタスク2", id:"2", limit:'2019/06/02'}
                ],
                create_tasks:[
                    {name:"作成したタスク1", id:"3"},
                    {name:"作成したタスク1", id:"4"}
                ]
            }
        };
        if (resultData.result) {
            this.$store.commit('setUserInfo', resultData.user_info);
            router.push("/main");
        } else {
            this.msg = resultData.errMsg;
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
