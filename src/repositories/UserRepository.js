class UserRepository {
    constructor(model) {
        this._model = model
    }

    async create_user(user) {
        return await this._model.create(user)
    }
}

export default UserRepository