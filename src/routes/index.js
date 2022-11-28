const router = require("express").Router()

const routes_responsibles = require("./responsible")
const routes_reservations = require("./reservation")
const routes_laboratories = require("./laboratory")

router.get("/", (req, res) => {
    res.send("Server Online");
});

router.use("/api", routes_responsibles)
router.use("/api", routes_reservations)
router.use("/api", routes_laboratories)

module.exports = router;