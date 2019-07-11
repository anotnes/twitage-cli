
/**
 * タスク情報を保持する
 */
class TaskInfo {
    constructor (id, name, staff, limit, report, chkResult) {
        this.id = id
        this.name = name;
        this.staff = staff;
        this.limit = limit;
        this.report = report;
        this.chkResult = chkResult;
    }

    get id () {
        return this.id;
    }

    get name () {
        return this.name;
    }

    get staff () {
        return this.staff;
    }

    get limit () {
        return this.limit;
    }

    get report () {
        return this.report;
    }

    get chkResult () {
        return this.chkResult;
    }
}