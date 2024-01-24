import express from "express"
import Database from "../config/DatabaseConnection.js"
import User from "../models/UserModel.js"
import UserRepository from "../repositories/UserRepository.js"
import UserService from "../services/UserService.js"
import UserRoutes from "../routes/UserRoute.js"

class Server{
    constructor() {
        this.database = new Database()
        this.user_model = User(this.database.sequelize)
        this.user_repository = new UserRepository(this.user_model)
        this.user_service = new UserService(this.user_repository)
        this.user_routes = new UserRoutes(this.user_service)
        this.database.sync_database()

        this.app = express()
        this.PORT = process.env.PORT
        
        this.middlewares()

        this.routes()
    }
    middlewares(){
        this.app.use(express.json())
    }
    routes(){
        this.app.use(this.user_routes.router)
    }
    listen(){
        this.app.listen(this.PORT, () =>{
            console.log(`Running on port ${this.PORT}`)
        })
    }
}

export default Server