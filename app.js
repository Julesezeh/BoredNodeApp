const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Activity = require("./models/activity");
const app = express();

app.use(morgan("combined"));

app.use(express.json());


const dbURI = "mongodb://127.0.0.1:27017/BoredActivities"

mongoose.connect(dbURI).
    then((response) => console.log("Connected to the database successfully")).
    catch((error) => console.log(error))


app.get("/add_activity", (req, res) => {
    const act = new Activity({
        "title": "Ludo",
        "max_duration": "600",
        "category": "game"
    })
    act.save()
        .then((response) => res.send(response))
        .catch((error) => { console.log(error) })
})

app.get("/", (req, res) => {
    Activity.find()
        .then((response) => { res.send(response) })
        .catch((error) => console.log(error))
})

app.post("/add_activity", (req, res) => {
    const { title, max_duration, category } = req.body;
    if (title && max_duration && category) {
        const thing = {
            "title": title,
            "max_duration": max_duration,
            "category": category
        }
        const activity = new Activity(thing)
        activity.save()
            .then((response) => { res.send(response) })
            .catch((error) => { console.log(error) })

    } else {
        res.status(400).send("<h1>Invalid request</h1>")
    }
})

app.get("/activities", (req, res) => {
    Activity.find()
        .then((response) => { res.status(200).send(response) })
        .catch((error) => { console.log(error) })
})

app.get("/activities/:id", (req, res) => {
    const { id } = req.params
    Activity.findById(id)
        .then((response) => {
            res.send(response)
        })
        .catch((error) => {
            console.log(error)
        })
})


app.get("/hello", (req, res) => {
    res.send("<h1>hello world</h1>")
})



app.listen(3000, () => {
    console.log("Server is currently listening on port " + 3000)
})