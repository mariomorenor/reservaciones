const { default: mongoose, Schema } = require("mongoose")

const EventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("event", EventSchema)