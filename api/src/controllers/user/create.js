var userModel = require("../../models/user/index.js");
var multer = require("multer");
var upload = multer({ dest: "./uploads/" });
const { check, validationResult } = require("express-validator");

let create = [
  
  upload.single("avatar"),

  check("password").isLength({
    min: 10,
  }),

  check("email")
    .isEmail()
    .custom(async function (value) {
      let user = await userModel.get(value);
      if (user.length) return Promise.reject("E-mail already in use");
    }),

  check("age").optional().isInt(),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else next();
  },

  function (req, res, next) {
    let data = { password: req.body.password, email: req.body.email };
  
    if (req.file && req.file.filename) data.avatar = req.file.filename;
    if (req.body.firstName) data.firstName = req.body.firstName;
    if (req.body.age) data.age = req.body.age;
    if (req.body.lastName) data.lastName = req.body.lastName;
    userModel.create(data);
    res.send("OK");
  }

];
 
module.exports = { create };
