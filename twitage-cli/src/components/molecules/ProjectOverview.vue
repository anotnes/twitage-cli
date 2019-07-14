<template>
  <div class="content">
    <div class="task-list">
      <div class="list-title">
        やる人が決まっていないタスク
      </div>
      <div class="task-item create-task">
        <img src="../../assets/taskcard.png">
        <div class="plus"></div>
      </div>
      <div class="task-item" v-bind:id="'task-' + task.id" v-for="(task, index) in taskList" :key="index">
        <img src="../../assets/taskcard.png">
        <span>{{task.title}}</span>
      </div>
    </div>
    <div class="member-list">
      <div class="list-title">
        <span>メンバー</span>
      </div>
      <div class="member-item" v-bind:id="'member-' + member.id" v-for="(member, index) in memberList" :key="index">
        <div class="member-icon">
          <img :src="member.icon_url">
          <div class="member-name">{{member.name}}</div>
        </div>
        <div class="member-task">
          <div class="task-title">タイトル：{{member.task.title}}</div>
          <div class="task-limit">期限：{{member.task.limit}}</div>
        </div>
      </div>
      </div>
  </div>
</template>


<script>
import store from '@/store'
import router from '@/router/index'
export default {
  name: 'Top',
  mounted () {
    // メンバーアイテムのドロップイベントを追加
    const icons = document.getElementsByClassName("member-icon");
    for (let icon of icons) {
      // アイコンエリア内に入ってきたとき
      icon.addEventListener('dragenter', () => {
        const img = icon.getElementsByTagName("img");
        img[0].style.width = "50px";
      }, false);

      // アイコンエリアから離れたとき
      icon.addEventListener('dragleave', () => {
        const img = icon.getElementsByTagName("img");
        img[0].style.width = "";
      }, false);

      // ドロップされたとき
      icon.addEventListener('drop', () => {
        const content = document.getElementsByClassName("content");
        content.style.display = none;
      }, false);
    }
  },
  data () {
    return {
      userName: store.state.userInfo.name,
      taskList: store.state.projectInfo.taskList,
      memberList: store.state.projectInfo.memberList,
      modal: false
    }
  },
  methods: {

    /**
     * タスクの詳細画面に遷移
     */
    dispTaskDetail: function() {
      // idをキーにAPIからタスク詳細情報を取得
      const taskInfo = {}
      store.setTaskInfo(taskInfo);
      router.push("/taskDetail");
    },
    /**
     * タスクの編集画面に遷移
     */
    dispTaskEdit: function() {
      // idをキーにAPIからタスク詳細情報を取得
      const taskInfo = {}
      store.setTaskInfo(taskInfo);
      router.push("/taskEdit");
    }, 
    closeModal: function() {
      this.modal = false;
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}

.content {
  display:flex;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  background-color:#FCF8EA;
}

/* SP対応 */
@media screen and (max-width: 500px){
  .content .task-list {
    width:80%;
  }
}

/* PC対応 */
@media screen and (min-width: 501px){

  .task-list {
    width:50%;
    height: 100%;
    overflow:auto;
  }

  .member-list {
    width:50%;
    height: 100%;
    overflow:auto;
  }

  .list-title {
    height: 40px;
    margin:auto;
    align-items: center;
  }

  .task-item {
    width: 50%;
    height: auto;
    background-size: cover;
    position: relative;
    margin: auto;
    padding: 30px;
    text-align: center;
  }

  .create-task{
    opacity: 0.6;
  }

  .task-item span {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    margin:0;
    padding:0;
  }

  .member-item {
    display: flex;
    width: 80%;
    height: 200px;
    background-color: white;	
    text-align: center;	
    margin: 20px auto;
    margin-bottom: -1px;
  }

  .member-icon {
    width: 30%;
    font-size: 12px;
    background-color: #381713;
    color: #FCF8EA;
    border: 1px solid #381713;
    border-radius: 10px 0 0 10px;
    text-align: center;	
    align-items: center;
  }

  .member-icon img{
    width: 40%;
    margin: 0 auto;
  }

  .member-task {
    width: 100%;
    height: auto;
    border: 1px solid #381713;
    border-left: 0px;
    background-size: cover;
    position: relative;
  }

  .member-task .task-title {

  }

  .member-task .task-limit {

  }

}
</style>
