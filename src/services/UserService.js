import UserRepository from "../repositories/UserRepository.js"

class UserService {
    constructor(conn) {
        this._conn = conn;
    }

    async create_user(user) {
        console.log('ola2')
        return await new UserRepository(this._conn).create_user(user)
        
    }
}

export default UserService