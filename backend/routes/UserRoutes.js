const express = require("express");
const { createUser, getUsers } = require("../controller/UserController");
const router = express.Router();

router.post("/post", createUser);
router.get("/get", getUsers);

module.exports = router;
 