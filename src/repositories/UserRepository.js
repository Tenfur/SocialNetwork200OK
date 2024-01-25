import User from "../models/UserModel.js"

class UserRepository {
    constructor(conn) {
        this._conn = conn;
    }

    async create_user(user) {
        console.log('ola3')
        return await User(this._conn).create(user)
    }
}

export default UserRepository