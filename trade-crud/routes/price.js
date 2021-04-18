const router = require("express").Router()
const controllerGet = require("../controllers/get/getPrice")
const controllerPost = require("../controllers/post/postPrice")

router.get("/",controllerGet.getPrice)
router.post("/",controllerPost.postPrice)

module.exports = router