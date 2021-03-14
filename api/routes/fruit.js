const router = require("express").Router()
const { getFruits } = require("../controllers/fruit")

router.use("/", getFruits)

module.exports = router
