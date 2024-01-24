import UserRepository from "../repositories/UserRepository.js"

class UserService {
    constructor() {
    }

    async create_user(user) {
        console.log('ola2')
        return await new UserRepository().create_user(user)
        
    }
}

export default UserService