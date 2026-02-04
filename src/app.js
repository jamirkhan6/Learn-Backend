const express = require('express');

const app = express();


app.get("/", (req, res) => {
    res.send("jamir khan")
})

app.get("/about", (req, res) => {
    res.send("about page")
})


module.exports = app;