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

    let prop  = ["_id","email","avatar","firstName","lastName","about"]
    let publicUser ={}
    for(key in prop){
      let item  = prop[key]
      if(user[0][item])
      publicUser[item] = user[0][item]
    }
    res.send(publicUser);
  },
  
];

module.exports = { getUser };
