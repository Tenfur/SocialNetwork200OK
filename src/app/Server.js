import express from "express"
import UserRoutes from "../routes/UserRoute.js"
import { create_connection, sync_database } from "../config/DatabaseConnection.js"

class Server{
    constructor() {
        this.app = express()
        this.PORT = process.env.PORT
        
        this.middlewares()

        this.routes()
    }
    async middlewares(){
        this.app.use(express.json())
        this.conn = create_connection()
        sync_database(this.conn)

    }
    routes(){
        this.app.use(new UserRoutes(this.conn).router)
    }
    listen(){
        this.app.listen(this.PORT, () =>{
            console.log(`Running on port ${this.PORT}`)
        })
    }
}

export default Server