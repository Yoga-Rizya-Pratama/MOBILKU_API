const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    tanggal: {
      type: String,
      required: true,
    },
    usia: {
      type: Number,
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
    image_500px: {
      type: Object,
      required: true,
    },
    image_1000px: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User);
