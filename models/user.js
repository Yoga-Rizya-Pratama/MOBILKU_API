const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    usia: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User);
