import {Router} from "express"

class UserRoutes {
    constructor(service) {
        this._service = service;
        this._router = Router();
        this.initialize_routes();
    }

    get router() {
        return this._router;
    }

    initialize_routes() {
        this._router.post('/users', this.create_user.bind(this));
    }

    async create_user(req, res) {
        try {
            const {nombres, apellidos} = req.body;
            const user = await this._service.create_user({nombres, apellidos});
            return res.json(user)
        }catch (e){
            res.status(500).send(`Error to create user: ${e}`);
        }
    }
}

export default UserRoutes
