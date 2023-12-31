const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { Schema } = mongoose
const app = express();
app.use(morgan("combined"));


const Things = new Schema({
    title: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },

});

const dbURI = "mongodb://localhost:27017/BoredActivities"

mongoose.connect(dbURI).
    then((response) => console.log("Connected to the database successfully")).
    catch((error) => console.log(error))


app.get("/", (req, res) => {
    res.send("<h1>Howdy</h1>")
})

app.listen(3000, () => {
    console.log("Server is currently listening on port " + 3000)
})