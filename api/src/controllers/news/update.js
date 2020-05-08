var { auth } = require("../../middlewares/auth.js");
const { check, validationResult } = require("express-validator");
var multer = require("multer");
var newsModel = require("../../models/news/index.js");
let update = [
  multer().none(),
  check("text").isLength({ min: 3 }),
  check("id").isLength({ min: 3 }),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else next();
  },
  auth,
  async function (req, res, next) {
    try {
      let news = await newsModel.get(req.body.id);
      if (news.length == 0  )
        return res.status(401).json({ message: "no such news found" });
      if ( !news[0].id_user.equals(req.user._id))
        return res.status(401).json({ message: "Permission denied" });
       
      await newsModel.update(req.body.text, req.body.id);
      res.send("OK");
    } catch (error) {
      console.log(error)
      return res.status(401).json(error);
    }
  },
];

module.exports = { update };
