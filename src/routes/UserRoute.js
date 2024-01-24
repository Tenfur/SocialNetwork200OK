import { Router } from "express"
import UserService from "../services/UserService.js";

class UserRoutes {
    constructor() {
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
            console.log('ola')
            const {nombres, apellidos} = req.body;
            const user = await new UserService().create_user({nombres, apellidos});
            return res.json(user)
        }catch (e){
            res.status(500).send(`Error to create user: ${e}`);
        }
    }
}

export default UserRoutes
