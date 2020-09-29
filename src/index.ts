import express from "express"
import {router} from "./app";


const start = async () => {
    const app = express()

    app.use(router)

    app.listen(4000, () => {
        console.log("Server started on port 4000")
    })
}

start();
