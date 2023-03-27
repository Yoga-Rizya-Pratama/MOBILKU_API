const User = require("../models/user");
const sharp = require("../helper/processImage");
const fs = require("fs");

exports.GET = (req, res, next) => {
  User.find()
    .then((data) => {
      res.status(200).json({
        data,
      });
    })
    .catch((error) => res.json({ error }));
};

exports.GETONE = (req, res, next) => {
  User.findOne({ _id: req.params.id })
    .then((data) => {
      res.status(200).json({
        data,
      });
    })
    .catch((error) => res.json({ error }));
};

exports.CREATE = (req, res, next) => {
  const inputFile = req.file;
  const inputPath = inputFile.path;
  const outputFolder = "./images/";

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }

  const promises = [
    sharp.processImage(inputPath, outputFolder + "image_500.jpg", 500),
    sharp.processImage(inputPath, outputFolder + "image_1000.jpg", 1000),
  ];

  Promise.all(promises)
    .then((result) => {
      const Data = new User({
        name: req.body.name,
        date: req.body.date,
        usia: req.body.usia,
        mobile: req.body.mobile,
        city: req.body.city,
        education: req.body.education,
        image1:
          `https://four-cosmic-balmoral.glitch.me` + result[0].replace(".", ""),
        image2:
          `https://four-cosmic-balmoral.glitch.me` + result[1].replace(".", ""),
      });

      Data.save()
        .then((data) => {
          res.status(201).json({
            data,
          });
        })
        .catch((error) => res.json({ error }));
    })
    .catch((error) => res.json({ error }));
};

exports.EDIT = (req, res, next) => {
  const id = req.params.id;

  const inputFile = req.file;
  const inputPath = inputFile.path;
  const outputFolder = "./images/";

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }

  const promises = [
    sharp.processImage(inputPath, outputFolder + "image_500.jpg", 500),
    sharp.processImage(inputPath, outputFolder + "image_1000.jpg", 1000),
  ];

  Promise.all(promises)
    .then((result) => {
      const newData = {
        name: req.body.name,
        date: req.body.date,
        usia: req.body.usia,
        mobile: req.body.mobile,
        city: req.body.city,
        education: req.body.education,
        image1:
          `https://four-cosmic-balmoral.glitch.me` + result[0].replace(".", ""),
        image2:
          `https://four-cosmic-balmoral.glitch.me` + result[1].replace(".", ""),
      };

      User.find({ _id: id })
        .then((data) => {
          if (data) {
            User.findByIdAndUpdate({ _id: id }, newData, { new: true })
              .then((success) => {
                res.status(200).json({ success });
              })
              .catch((error) => {
                res.json({ error });
              });
          } else {
            res.status(404).json({
              message: "data not found",
            });
          }
        })
        .catch((error) => {
          res.json({ error });
        });
    })
    .catch((error) => {
      res.json({ error });
    });
};
