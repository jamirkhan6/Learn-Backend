const express = require('express');
const noteModel = require("./models/note.model")

const app = express();
app.use(express.json())



//send to server
app.post('/notes', async (req, res) => {
    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message : "note created"
    })
})

// get to server
app.get('/notes', async (req, res) => {
    const notes =  await noteModel.find()

    res.status(200).json({
        message : "notes fetched successfully",
        notes : notes
    })
})

// delete in server
app.delete('/notes/:id', async (req, res) => {

    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id : id
    })

    res.status(200).json({
        message : "note deleted successfully"
    })
})



// update in server
app.patch('/notes/:id', async (req, res) => {

    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({
        _id: id
    }, {
        description : description
    })

    res.status(200).json({
        message : "updated successfully"
    })

})


module.exports = app;