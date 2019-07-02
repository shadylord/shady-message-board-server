const mongoose = require("mongoose");
const validator = require("validator");

const messageSchema = mongoose.Schema({
  username: {
    type: String,
    trim: true,
    default: "Anonymous"
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500
  },
  imageURL: {
    type: String,
    trim: true,
    default: "https://media.giphy.com/media/WTmXCoCf60MtW/giphy.gif",
    validate(value) {
      if (!validator.isURL(value)) {
        throw new Error("Invalid URL!");
      }
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
