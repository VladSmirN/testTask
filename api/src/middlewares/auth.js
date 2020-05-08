var jwt = require("jsonwebtoken");
var userModel = require("../models/user/index.js");
var passport = require("passport");
var passportJWT = require("passport-jwt");
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromHeader("auth");
jwtOptions.secretOrKey = 'secretOrKey';

let strategy = new JwtStrategy(jwtOptions,async function(jwt_payload, next) {
 
  let user = await userModel.get(jwt_payload.email)  
  if (user[0]) {
    next(null, user[0]);
  } else {
    next(null, false);
  }
});
passport.use(strategy);

exports.auth  = passport.authenticate("jwt", { session: false })
