const mongoose = require("mongoose");


async function connectDB() {
    await mongoose.connect("mongodb+srv://learn-backend-one:learn-backend-one@learn-backend.6yknwrg.mongodb.net/helley")

    console.log("Connected to DB")
}

module.exports = connectDB

