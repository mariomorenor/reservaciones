const router = require("express").Router()

const Laboratory = require("../models/laboratory")

router.get("/laboratories", async (req, res) => {
    const laboratories = await Laboratory.find();
    res.json(laboratories)
});

router.post("/laboratories", async (req, res) => {

    try {
        const laboratory = await Laboratory.create(req.body);
        res.json(laboratory)
    } catch (error) {
        res.status(500).json(error)
    }

});

router.put("/laboratories/:id", async (req, res) => {
    try {

        const laboratory = await Laboratory.updateOne(
            { _id: req.params.id },
            req.body
        );
        res.json(laboratory)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.delete("/laboratories/:id", async (req, res) => {
    try {

        const laboratory = await Laboratory.deleteOne({ _id: req.params.id });
        res.json(laboratory)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;