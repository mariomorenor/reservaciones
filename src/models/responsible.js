const { default: mongoose, Schema } = require("mongoose")

const ResponsibleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: String

});

module.exports = mongoose.model("responsible", ResponsibleSchema)