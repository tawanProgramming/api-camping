const photoSchema = require("../models/photos")
const express = require("express")

async function create (req, res) {
    try {
        const { title, description, photo } = req.body;

        const photoExist = photoSchema.findOne({photo_url: photo})
        if (photoExist) {
            return res.status(400).json("Already exist this photo")
        }
        // Assuming 'Photo' is your Mongoose model
        const newPhoto = await photoSchema.create({
            title: title,
            description: description,
            photo_url: photo
        });

        return res.status(201).json(newPhoto);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAll(req, res) {
    try {
        const allPhotos = await photoSchema.find()
        return res.status(200).send(allPhotos)
    } catch(err) {
        console.log(err)
        return res.status(400).send("error")
    }
}

module.exports = { create, getAll }