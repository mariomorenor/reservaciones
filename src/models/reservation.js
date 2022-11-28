const { default: mongoose, Schema } = require("mongoose")

const ReservationSchema = new Schema({
    date_start: {
        type: Date,
        required: true
    },
    date_end: Date,
    time_start: {
        type: String,
        required: true
    },
    time_end: String,
    event: {
        type: Schema.Types.ObjectId,
        ref: 'event',
        required: true
    },
    responsible: {
        type: Schema.Types.ObjectId,
        ref: 'responsible',
        required: true
    },
    laboratory: {
        type: Schema.Types.ObjectId,
        ref: "laboratory"
    },
    event_type: String,
    section: String,

});

module.exports = mongoose.model("reservation", ReservationSchema)