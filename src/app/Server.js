import express from "express"
import {connect_database} from "../config/DatabaseConnection.js"
import UserRoutes from "../routes/UserRoute.js"

class Server{
    constructor() {
        this.app = express()
        this.PORT = process.env.PORT
        
        this.middlewares()

        this.routes()
    }
    async middlewares(){
        this.app.use(express.json())
        await connect_database()

    }
    routes(){
        this.app.use(new UserRoutes().router)
    }
    listen(){
        this.app.listen(this.PORT, () =>{
            console.log(`Running on port ${this.PORT}`)
        })
    }
}

export default Server