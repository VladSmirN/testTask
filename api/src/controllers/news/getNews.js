const { check, validationResult } = require("express-validator");
var multer = require("multer");
var newsModel = require("../../models/news/index.js");
let getNews = [
  multer().none(),
  check("id").isLength({ min: 3 }),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else next();
  },

  async function (req, res, next) {
    try {
      let news = await newsModel.get(req.body.id);
      if (news.length == 0)
       return res.status(401).json({ message: "no such news found" });

      res.send(news[0]);
    } catch (error) {
      return res.status(401).json({ message: "no such news found" });
    }
  },
];

module.exports = { getNews };
