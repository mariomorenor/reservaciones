const mongoose = require("mongoose")

const { DB_HOST, DB_PORT, DB_NAME } = process.env

mongoose
    .connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
    .then(db => console.log("DB Connected"));


module.exports = mongoose