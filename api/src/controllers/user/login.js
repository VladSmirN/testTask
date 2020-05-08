var userModel = require("../../models/user/index.js");
const { check, validationResult } = require("express-validator");
var multer = require("multer");
var jwt = require("jsonwebtoken");


let login = [
  multer().none(),
  check("password").isLength({ min: 10 }),
  check("email").isEmail(),

  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else next();
  },
];


login.push(async function (req, res, next) {
  let user = await userModel.get(req.body.email);
  if (user.length == 0) res.status(401).json({ message: "no such user found" });

  if (user[0].password === req.body.password) {
    var payload = { email: user[0].email };
    var token = jwt.sign(payload, "secretOrKey");
    res.json({ message: "OK", token: token });
  } else {
    res.status(401).json({ message: "passwords did not match" });
  }
});

module.exports = { login };
