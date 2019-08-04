<template>
<transition name="basic" appear>
  <div class="menu">
    <div class="user-name" v-on:click="dispMyPage()">
      <img :src="iconUrl">
      {{userName}}
    </div>
    <div class="search-task">
      <input type="text" class="input-box" placeholder="タスク検索"/>
    </div>
    <div class="project-list">
      <span class="list-title">プロジェクト一覧</span>
      <span class="project-create-icon" v-on:click="dispProjectNew()">[作成]</span>
      <div class="project-item" v-on:click="dispProjectOverView(project.id)" v-bind:id="project.id" v-for="(project, index) in projectList" :key="index">
        #<span class="project-name">{{project.name}}</span>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import store from '@/store'
import router from '@/router/index'

export default {
  name: 'Main',
  data () {
    return {
      
    }
  },
  computed: {
    projectList() {
      //return "aa"
      return this.$store.getters.userInfo.projectList;
    },
    userName() {
      //return "bbb"
      return this.$store.getters.userInfo.name;
    },
    iconUrl() {
      //return "cccc"
      return this.$store.getters.userInfo.iconUrl;
    }
  },
  methods: {
      dispProjectOverView(id) {
        // プロジェクト選択時、選択されたプロジェクトリストの背景色を変更する
        const projectItems = document.getElementsByClassName('project-item');
        for (let item of projectItems) {
          item.style.backgroundColor = "";
          item.style.color = "";
        }
        document.getElementById(id).style.backgroundColor = "#114f92";
        document.getElementById(id).style.color = "#fff";

        // 動作確認のため直書き
        const resultData = {
          result: true,
          err_msg: '',
          project_info: {
            name:'秋津家',
            extension: '秋津家のグループ（プロジェクトの説明などが入ります）',
            task_list:[
              {
                title:"ゴミを出しに行く",
                id:"1",
                limit:"2019-07-01"
              },
              {
                title:"数学の宿題を終わらせる",
                id:"2",
                imit:"2019-07-01"
              },
              {
                title:"牛乳と卵を買いに行く",
                id:"3",
                limit:"2019-07-01"
              }
            ],
            member_list:[
              {
                name:"秋津燈太郎",
                icon_url:"https://pbs.twimg.com/profile_images/1124962230993162240/wWzsssdN_400x400.jpg",
                task:{
                  title:"風呂掃除する",
                  id:"1",
                  limit:"2019-07-01 13:00"
                }
              },
              {
                name:"文字数が長い男の表示を確認したい",
                icon_url:"https://pbs.twimg.com/profile_images/580474841242955776/jhjovcAB_400x400.jpg",
                task:{
                  title:"犬の散歩",
                  id:"2",
                  limit:"2019-08-01 12:00"
                }
              },
              {
                name:"James",
                icon_url:"https://pbs.twimg.com/profile_images/1045400886275497984/2jKm3LK8_400x400.jpg",
                task:{
                  title:"朝ごはんの準備",
                  id:"2",
                  limit:"2019-08-01 12:00"
                }
              }
            ]
          }
        }
        if (resultData.result) {
          //store.setProjectInfo(resultData.project_info);
          this.$store.commit('setProjectInfo', resultData.project_info);
          router.push("/main/project/" + id);
        } else {
          // エラーメッセージ表示
        }
      },
      dispProjectNew () {
        // プロジェクト選択時、選択されたプロジェクトリストの背景色を変更する
        const projectItems = document.getElementsByClassName('project-item');
        for (let item of projectItems) {
          item.style.backgroundColor = "";
          item.style.color = "";
        }

        // プロジェクトの情報を初期化する
        const project_info = {
          name: '',
          extension: '',
          task_List: [],
          member_List: []
        }
        //store.setProjectInfo(projectInfo);
        this.$store.commit('setProjectInfo', project_info);
        router.push("/main/project");
      },
      dispMyPage () {
        router.push("/main");
      }
  },
}


</script>
