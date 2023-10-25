const express = require("express");
const { check } = require("express-validator");

const usersontrollers = require("../controllers/users-controllers");
const router = express.Router();

router.get("/", usersontrollers.getUsers);

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersontrollers.signup
);

router.post("/login", usersontrollers.login);

module.exports = router;
// middleware
