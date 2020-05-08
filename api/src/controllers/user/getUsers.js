var userModel = require("../../models/user/index.js");
let getUsers = [
  async function (req, res, next) {
    let user = await userModel.getAll()
    if(user.length == 0) res.status(401).json({ message: "no such user found" });
    res.send(user);
  },
];

module.exports = { getUsers };
