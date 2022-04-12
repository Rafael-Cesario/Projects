const express = require("express");
const router = express.Router();

const { register, login, refresh_token, logout } = require("../Controllers/Auth.Controller");

router.post("/register", register);

router.post("/login", login);

router.post("/refresh-token", refresh_token);

router.delete("/logout", logout);

module.exports = router;
