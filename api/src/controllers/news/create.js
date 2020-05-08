var { auth } = require("../../middlewares/auth.js");
const { check, validationResult } = require("express-validator");
var multer = require("multer");
var newsModel = require("../../models/news/index.js");
let create = [
  multer().none(),
  check("text").isLength({ min: 3 }),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else next();
  },
  auth,
  async function (req, res, next) {
    let news = await newsModel.create({id_user:req.user._id,text:req.body.text})
    res.send(news);
  }
];

module.exports = { create };
