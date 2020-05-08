var userModel = require("../../models/user/index.js");
let getUsers = [
  async function (req, res, next) {
    let users = await userModel.getAll();
    if (users.length == 0)
      res.status(401).json({ message: "no such user found" });
    res.send(
      users.map((user) => {
        let prop = ["_id", "email", "avatar", "firstName", "lastName", "about"];
        let publicUser = {};
        for (key in prop) {
          let item = prop[key];
          if (user[item]) publicUser[item] = user[item];
        }
        return publicUser;
      })
    );
  },
];

module.exports = { getUsers };
