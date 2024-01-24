import User from "../models/UserModel.js"

class UserRepository {
    constructor() {
    }

    async create_user(user) {
        console.log('ola3')
        return await User().create(user)
    }
}

export default UserRepository