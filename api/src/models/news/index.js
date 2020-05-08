var mongoose = require("mongoose");

require("./schema.js");

const newsModel = mongoose.model("news");

exports.create = function (data) {
  let news = new newsModel(data);
  return news.save();
};

exports.get = function (id) {
  return newsModel.find({ _id: id});
};

exports.getAll = function () {
  return newsModel.find({});
};

exports.update = function (text,id) {
  return newsModel.updateOne({ _id: id }, { $set: { text: text } } );
};

exports.delete = function (id) {
  return newsModel.deleteOne({ _id: id });
};