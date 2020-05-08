var multer = require("multer");
var userModel = require("../../models/user/index.js");
const { check, validationResult } = require("express-validator");
let getUser = [

  multer().none(),

  check("email").isEmail(),

  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else next();
  },

  async function (req, res, next) {
    let user = await userModel.get(req.body.email)
    if(user.length == 0) res.status(401).json({ message: "no such user found" });
    res.send(user[0]);
  },
  
];

module.exports = { getUser };
