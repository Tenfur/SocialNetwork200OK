import Server from "./app/Server.js"
import dotenv from "dotenv"

dotenv.config()

const server = new Server()

server.listen()