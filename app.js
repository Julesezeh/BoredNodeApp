const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { Schema } = mongoose
const app = express();
app.use(morgan("combined"));


const Things = new Schema({
    title: String,
    duration: String,

});

const dbURI =

    mongoose.connect("mongodb://localhost:27017/BoredActivities").
        catch((error) => handleError(error))


app.get("/", (req, res) => {
    res.send("<h1>Howdy</h1>")
})

app.listen(3000, () => {
    console.log("Server is currently listening on port " + 3000)
})