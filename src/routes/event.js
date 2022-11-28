const router = require("express").Router()

const Event = require("../models/event")

router.get("/events", async (req, res) => {
    const events = await Event.find();
    res.json(events)
});

router.post("/events", async (req, res) => {

    try {
        const event = await Event.create(req.body);
        res.json(event)
    } catch (error) {
        res.status(500).json(error)
    }

});

router.put("/events/:id", async (req, res) => {
    try {

        const event = await Event.updateOne(
            { _id: req.params.id },
            req.body
        );
        res.json(event)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.delete("/events/:id", async (req, res) => {
    try {

        const event = await Event.deleteOne({ _id: req.params.id });
        res.json(event)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;