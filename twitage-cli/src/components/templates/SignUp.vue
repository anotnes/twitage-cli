<template>
<div class="top">
  <div class="header">
  </div>
  <div class="content">
    <h1>{{title}}</h1>
    <div>{{errMsg}}</div>
    <label>ユーザー名</label><input type="text" id="name" v-model="name"><br/>
    <label>メールアドレス</label><input type="text" id="address" v-model="email"><br/>
    <label>本アプリへのログインパスワード</label><input type="password" id="appPass" v-model="password"><br/>
    <button @click="signUp()">SignUp</button>
  </div>
</div>
</template>

<script>
import store from '@/store'
import router from '@/router/index'
import modal from '@/assets/js/services/modal';
import firebase from 'firebase'
export default {
  name: 'Top',
  computed: {

  },
  data () {
    return {
      title: 'ユーザー登録',
      errMsg: '',
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
      signUp () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(res => {
            // 動作確認のため決め打ち
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
            this.$store.commit('setUserInfo', resultData.user_info);
            router.push("/main");
        }).catch(err => {
            this.errMsg = err.message;
        })
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
.top {
  background-color:#FCF8EA;
  color: #381713;
  text-align: left;
}
.required {
  color:red;
}
</style>
