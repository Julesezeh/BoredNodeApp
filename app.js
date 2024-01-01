const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Activity = require("./models/activity");
const app = express();

app.use(morgan("combined"));




const dbURI = "mongodb://127.0.0.1:27017/BoredActivities"

mongoose.connect(dbURI).
    then((response) => console.log("Connected to the database successfully")).
    catch((error) => console.log(error))


app.get("/", (req, res) => {
    const act = new Activity({
        "title": "Ludo",
        "max_duration": "600",
        "category": "game"
    })
    act.save().then((response) => res.send(response)).catch((error) => { console.log(error) })
})

app.listen(3000, () => {
    console.log("Server is currently listening on port " + 3000)
})