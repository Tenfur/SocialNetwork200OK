import {Router} from "express"
import users from "../data/Users.js"

const router = Router()

router.get("/users", (req, res) => {
    res.json(users)
})

router.get("/users/:id", (req, res) => {
    console.log("Params:", req.params)
})

router.post("/users", (req, res) => {
    console.log("BODY:", req.body)
    return res.json({
        "message": "Correct!",
        "data": req.body
    })
})
// express-validator

export default router
