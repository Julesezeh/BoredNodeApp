const { Schema, model } = require("mongoose")


const PeopleSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        reuired: true
    }
}, { timestamps: true })


const People = model("People", PeopleSchema);

module.exports = People;