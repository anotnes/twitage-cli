<template>
<transition name="basic" appear>
  <div class="project-overview">
    <div class="task-list">
      <div class="list-title">
        やる人が決まっていないタスク
      </div>
      <div class="task-item create-task">
        <img src="../../assets/images/taskcard.png">
        <div class="plus"></div>
      </div>
      <div class="task-item" v-bind:id="'task-' + task.id" v-for="(task, index) in taskList" :key="index">
        <img src="../../assets/images/taskcard.png">
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
</transition>
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
