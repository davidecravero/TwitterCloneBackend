const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.get("/:id/messages", userController.getMessagesById);

module.exports = router;