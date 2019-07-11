
/**
 * storeオブジェクトでデータを一元管理する
 */
export default {
    state: {
        userInfo: {
            id: '',
            name: '',
            iconUrl: '',
            twiAccount: '',
            projectList: [],
            imposedTasks: [],
            createTasks: []
        },
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
        projectInfo: {
            id: '',
            name: '',
            extension: '',
            adminId: '',
            taskList: [],
            memberList: []
        }
    },
    setUserInfo (user) {
        this.state.userInfo.id = user.id;
        this.state.userInfo.name = user.name;
        this.state.userInfo.iconUrl = user.icon_url;
        this.state.userInfo.twiAccount = user.twi_account;
        this.state.userInfo.projectList = user.project_list;
        this.state.userInfo.imposedTasks = user.imposed_tasks;
        this.state.userInfo.createTasks = user.create_tasks;
    },
    setTaskInfo (task) {
        this.state.taskInfo.id = task.id;
        this.state.taskInfo.name = task.name;
        this.state.taskInfo.limitDate = task.limitDate;
        this.state.taskInfo.createStaffId = task.createStaffId;
        this.state.taskInfo.imposedStaffId = task.imposedStaffId;
        this.state.taskInfo.createStaff = task.createStaff;
        this.state.taskInfo.imposedStaff = task.imposedStaff;
        this.state.taskInfo.report = task.report;
        this.state.taskInfo.state = task.state;
    },
    setProjectInfo (project) {
        this.state.projectInfo.id = project.id;
        this.state.projectInfo.name = project.name;
        this.state.projectInfo.extension = project.extension;
        this.state.projectInfo.adminId = project.adminId;
        this.state.projectInfo.taskList = project.task_list;
        this.state.projectInfo.memberList = project.member_list;
    }
}
