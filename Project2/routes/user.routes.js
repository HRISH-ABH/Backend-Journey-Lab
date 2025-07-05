const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

router.get("/test", (req, res) => {
  res.send("user test route");
});

router.get("/register", (req, res) => {
  res.render("register_page");
});

router.post(
  "/register",
  body("email").trim().isLength({ min: 13 }),
  body("password").trim().isLength({ min: 5 }),
  body("username").trim().isLength({ min: 3 }),
  async (req, res) => {
    console.log(req.body);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Invalid data!!!",
        errors: errors,
      });
    }
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    res.json(newUser);
  }
);

router.get("/login", (req, res) => {
  res.render("login_page");
});
router.post("/login", (req, res) => {
  const { email, password } = req.body;
   
});
module.exports = router;
