const mongoose = require("mongoose");
const { Schema, model } = mongoose;



const ActivitySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    max_duration: {
        type: Number,
        required: true
    },
    category: {
        type: String
    }

}, { timestamps: true });


const Activity = model("Activity", ActivitySchema)


module.exports = Activity;