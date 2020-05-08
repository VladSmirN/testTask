var { auth } = require("../../middlewares/auth.js");
var multer = require("multer");

let profile = [
  multer().none(),
  auth,
  function profile(req, res, next) {
    res.send(req.user);
  },
];

module.exports = { profile };
