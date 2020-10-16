const express = require("express");
const router = express.Router();
const tweetController = require('../controllers/tweetController');

router.get("/", tweetController.getAll);
router.get("/:id", tweetController.getById);

module.exports = router;