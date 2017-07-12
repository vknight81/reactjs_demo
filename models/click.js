var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var ClickSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: String
  },
  url: {
    type: String
  }
});


// Create the Model
var Click = mongoose.model("Click", ClickSchema);

// Export it for use elsewhere
module.exports = Click;