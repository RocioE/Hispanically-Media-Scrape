var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    // `username` must be of type String
    // `username` will trim leading and trailing whitespace before it's saved
    // `username` is a required field and throws a custom error message if not supplied
    username: {
      type: String,
      trim: true,
      required: "Username is Required"
    },
    //   required: "Username is Required"



    // This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;