const express = require("express");
var morgan = require("morgan");



const app = express();
app.use(morgan("default"));


app.get("/", (req, res) => {
    res.send("<h1>Howdy</h1>")
})

app.listen(3000, () => {
    console.log("Server is currently listening on port " + 3000)
})