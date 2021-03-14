const router = require("express").Router()
const fruitRouter = require("./fruit")

router.use("/fruits", fruitRouter)

module.exports = router
