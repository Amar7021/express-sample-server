const express = require("express")
const router = express.Router()
const { getUser } = require("../controllers/postControllers")

router.get("/user", getUser)

module.exports = router
