const { default: mongoose, Schema } = require("mongoose")

const LaboratorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    capacity: Number,
    available: Number
});

module.exports = mongoose.model("laboratory", LaboratorySchema)