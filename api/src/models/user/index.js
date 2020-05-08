var mongoose = require("mongoose");

require("./schema.js");

const userModel = mongoose.model("user");

exports.create = function (data) {
  let user = new userModel(data);
  return user.save();
};

exports.get = function (email) {
  return userModel.find({ email: email });
};

exports.getAll = function (email) {
  return userModel.find({});
};
