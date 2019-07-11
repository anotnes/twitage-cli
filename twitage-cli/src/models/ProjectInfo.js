
/**
 * プロジェクト情報を保持する
 */
class ProjectInfo {
    constructor (id, name, admin) {
        this.id = id
        this.name = name;
        this.admin = admin;
    }

    get id () {
        return this.id;
    }

    get name () {
        return this.name;
    }

    get admin () {
        return this.admin;
    }
}