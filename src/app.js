const express = require('express');

const app = express();
app.use(express.json())

const notes = []

//send to server
app.post('/notes', (req, res) => {
    notes.push(req.body)

    res.status(201).json({ massage : "note created successfully"})
})

// get to server
app.get('/notes', (req, res) => {
    
    res.status(200).json({
        massage : "notes fetched successfully",
        notes : notes
    })

})

// delete in server
app.delete('/notes/:index', (req, res) => {

    const index = req.params.index

    delete notes[ index ]

    res.status(200).json({
        message: "note deleted successfully"
    })

})

// update in server
app.patch('/notes/:index', (req, res) => {

    const index = req.params.index
    const description = req.body.description

    notes [ index ].description = description

    res.status(200).json({
        message: "notes updated successfully"
    })

})


module.exports = app;