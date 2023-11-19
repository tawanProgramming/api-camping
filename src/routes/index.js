const { create , getAll } = require("../controller/photosController")

const routes = require("express").Router()


routes.post("/", create)
routes.get("/", getAll)



module.exports = {routes}