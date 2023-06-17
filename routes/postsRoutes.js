const express = require("express")
const router = express.Router()
const authenticateToken = require("../middlewares/authToken")
const { getPosts , login } = require("../controllers/postsController")

router.get("/posts",authenticateToken, getPosts)
router.post("/login", login)

module.exports = router