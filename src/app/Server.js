import express from "express"
import router from "../routes/UserRoute.js"

class Server{
    constructor() {
        this.app = express()
        this.PORT = process.env.PORT

        this.middlewares()

        this.routes()
    }
    middlewares(){
        this.app.use(express.json())
    }
    routes(){
        this.app.use(router)
    }
    listen(){
        this.app.listen(this.PORT, () =>{
            console.log(`Running om port ${this.PORT}`)
        })
    }
}

export default Server