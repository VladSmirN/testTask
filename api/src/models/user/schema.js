let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let schema = new Schema({
  age: Number,
  firstName: String,
  lastName: String,
  avatar: String,
  password: {
    type: String,
    requsired: true,
  },
  email: {
    
    type: String,
    unique: true ,
    required: true,
  },
});

mongoose.model("user", schema);
