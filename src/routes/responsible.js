const router = require("express").Router()

const Responsible = require("../models/responsible")

router.get("/responsibles", async (req, res) => {
    const responsibles = await Responsible.find();
    res.json(responsibles)
});

router.post("/responsibles", async (req, res) => {

    try {
        const responsible = await Responsible.create(req.body);
        res.json(responsible)
    } catch (error) {
        res.status(500).json(error)
    }

});

router.put("/responsibles/:id", async (req, res) => {
    try {

        const responsible = await Responsible.updateOne(
            { _id: req.params.id },
            req.body
        );
        res.json(responsible)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.delete("/responsibles/:id", async (req, res) => {
    try {

        const responsible = await Responsible.deleteOne({ _id: req.params.id });
        res.json(responsible)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;