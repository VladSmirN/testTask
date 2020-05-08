let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let schema = new Schema({
  id_user: {
    type: Schema.ObjectId ,
    requsired: true,
  },
  text: {
    type: String,
    required: true,
  },
});

mongoose.model("news", schema);
