const router = require("express").Router()

const Reservation = require("../models/reservation")

router.get("/reservations", async (req, res) => {
    const reservations = await Reservation.find().populate(["responsible","laboratory"]);
    res.json(reservations)
});

router.post("/reservations", async (req, res) => {

    try {
        const reservation = await Reservation.create(req.body);
        res.json(reservation)
    } catch (error) {
        res.status(500).json(error)
    }

});

router.put("/reservations/:id", async (req, res) => {
    try {

        const reservation = await Reservation.updateOne(
            { _id: req.params.id },
            req.body
        );
        res.json(reservation)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.delete("/reservations/:id", async (req, res) => {
    try {

        const reservation = await Reservation.deleteOne({ _id: req.params.id });
        res.json(reservation)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;