const express = require("express");
const {
  getUserInformation,
  getUserMessages,
  sendUserMessage,
} = require("../../controllers//message");
const isAuthenticate = require("../../middleware/validation");
const router = express.Router();

router.get("/users", isAuthenticate, getUserInformation);
router.get("/:id", isAuthenticate, getUserMessages);
router.post("/send/:id", isAuthenticate, sendUserMessage);

module.exports = router;
