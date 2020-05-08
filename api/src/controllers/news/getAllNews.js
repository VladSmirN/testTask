
var newsModel = require("../../models/news/index.js");
let getAllNews = [

  async function (req, res, next) {

      let news = await newsModel.getAll();
      res.send(news)
     
  }
];

module.exports = { getAllNews };
