const mongoose = require("mongoose");
const { Schema, Model } = mongoose;



const ActivitySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    max_duration: {
        type: String,
        required: true
    }

}, { timestamps: true });


const Activity = Model("Activity")