import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        // ログインユーザの情報
        userInfo: {
            id: '',
            name: '',
            iconUrl: '',
            twiAccount: '',
            projectList: [],
            imposedTasks: [],
            createTasks: []
        },
        // プロジェクトのタスク情報
        taskInfo: {
            id: '',
            name: '',
            limitDate: '',
            createStaffId: '',
            imposedStaffId: '',
            createStaff: '',
            imposedStaff: '',
            report: '',
            state: ''
        },
        // プロジェクトの情報
        projectInfo: {
            id: '',
            name: '',
            extension: '',
            adminId: '',
            taskList: [],
            memberList: []
        },
        // モーダルウィンドウ
        modals: []
    },
    mutations: {
        setUserInfo (state, user) {
            state.userInfo.id = user.id;
            state.userInfo.name = user.name;
            state.userInfo.iconUrl = user.icon_url;
            state.userInfo.twiAccount = user.twi_account;
            state.userInfo.projectList = user.project_list;
            state.userInfo.imposedTasks = user.imposed_tasks;
            state.userInfo.createTasks = user.create_tasks;
        },
        setTaskInfo (state, task) {
            state.taskInfo.id = task.id;
            state.taskInfo.name = task.name;
            state.taskInfo.limitDate = task.limitDate;
            state.taskInfo.createStaffId = task.createStaffId;
            state.taskInfo.imposedStaffId = task.imposedStaffId;
            state.taskInfo.createStaff = task.createStaff;
            state.taskInfo.imposedStaff = task.imposedStaff;
            state.taskInfo.report = task.report;
            state.taskInfo.state = task.state;
        },
        setProjectInfo (state, project) {
            state.projectInfo.id = project.id;
            state.projectInfo.name = project.name;
            state.projectInfo.extension = project.extension;
            state.projectInfo.adminId = project.adminId;
            state.projectInfo.taskList = project.task_list;
            state.projectInfo.memberList = project.member_list;
        },
        openModal(state, modal) {
            state.modals.push(modal);
        },
        closeModal(state) {
            state.modals.pop();
        }
    },
    getters: {
        userInfo(state) {
            return state.userInfo;
        },
        taskInfo(state) {
            return state.taskInfo;
        },
        projectInfo(state) {
            return state.projectInfo;
        },
        modals(state) {
            return state.modals;
        }
    },
    actions: {
        openModal({commit}, params) {
            commit('openModal', params);
        },
        
        closeModal({commit}) {
            commit('closeModal');
        },
    }
});

export default store

/**
 * storeオブジェクトでデータを一元管理する
 */
// export default {
//     state: {
//         userInfo: {
//             id: '',
//             name: '',
//             iconUrl: '',
//             twiAccount: '',
//             projectList: [],
//             imposedTasks: [],
//             createTasks: []
//         },
//         taskInfo: {
//             id: '',
//             name: '',
//             limitDate: '',
//             createStaffId: '',
//             imposedStaffId: '',
//             createStaff: '',
//             imposedStaff: '',
//             report: '',
//             state: ''
//         },
//         projectInfo: {
//             id: '',
//             name: '',
//             extension: '',
//             adminId: '',
//             taskList: [],
//             memberList: []
//         }
//     },
//     setUserInfo (user) {
//         this.state.userInfo.id = user.id;
//         this.state.userInfo.name = user.name;
//         this.state.userInfo.iconUrl = user.icon_url;
//         this.state.userInfo.twiAccount = user.twi_account;
//         this.state.userInfo.projectList = user.project_list;
//         this.state.userInfo.imposedTasks = user.imposed_tasks;
//         this.state.userInfo.createTasks = user.create_tasks;
//     },
//     setTaskInfo (task) {
//         this.state.taskInfo.id = task.id;
//         this.state.taskInfo.name = task.name;
//         this.state.taskInfo.limitDate = task.limitDate;
//         this.state.taskInfo.createStaffId = task.createStaffId;
//         this.state.taskInfo.imposedStaffId = task.imposedStaffId;
//         this.state.taskInfo.createStaff = task.createStaff;
//         this.state.taskInfo.imposedStaff = task.imposedStaff;
//         this.state.taskInfo.report = task.report;
//         this.state.taskInfo.state = task.state;
//     },
//     setProjectInfo (project) {
//         this.state.projectInfo.id = project.id;
//         this.state.projectInfo.name = project.name;
//         this.state.projectInfo.extension = project.extension;
//         this.state.projectInfo.adminId = project.adminId;
//         this.state.projectInfo.taskList = project.task_list;
//         this.state.projectInfo.memberList = project.member_list;
//     }
// }
