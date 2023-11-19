const mongoose = require("mongoose")


const Photo = new mongoose.Schema({
    title: String,
    description: String,
    photo_url: String 
})

module.exports = mongoose.model("Photos", Photo)