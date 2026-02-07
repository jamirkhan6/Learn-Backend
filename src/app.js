const express = require('express');
const postModel = require("./models/post.model")
const multer = require('multer')
const uploadFile = require("./services/storage.service")

const app = express();
app.use(express.json())

const upload = multer({ storage : multer.memoryStorage() })

app.post("/create-post", upload.single("imaige"), async (req, res) => {

    const result = await uploadFile(req.file.buffer)

    const post = await postModel.create({
        image : result.url,
        caption : req.body.caption
    })

    return res.status(201).json({
        message : "post created successfully",
        post
    })
})

app.get("/posts", async (req, res) => {
    const posts = await postModel.find()

    return res.status(200).json({
        message : "Post fetched successfully",
        posts
    })
})

app.delete("/posts", async (req, res) => {
    const id = req.body._id

    const post = await postModel.findByIdAndDelete(id)

    return res.status(200).json({
        message : "this post deleted",
        post
    })
})

app.patch("/posts", async (req, res) => {
    const id = req.body._id

    const post = await postModel.findByIdAndUpdate(id , { "caption" : req.body.caption})

    return res.status(200).json({
        message : "this post updated",
        post
    })
})


module.exports = app;