require("dotenv").config()

const express = require("express")

 const cors = require("cors")
const {connecting } = require("./database/connect")
const { routes } = require("./routes")
const app = express()
connecting()
app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(process.env.PORT, () => console.log(`running in the port ${process.env.PORT}`))
