class UserService {
    constructor(repository) {
        this._repository = repository
    }

    async create_user(user) {
        return await this._repository.create_user(user)
    }
}

export default UserService