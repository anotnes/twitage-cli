
/**
 * ユーザーの情報を保持する
 */
class UserInfo {
    constructor (name, twiAccount, tasks) {
        this.name = name;
        this.twiAccount = twiAccount;
        this.tasks = tasks;
    }

    get name () {
        return this.name;
    }

    get twiAccount () {
        return this.twiAccount;
    }

    get tasks () {
        return this.tasks;
    }
}