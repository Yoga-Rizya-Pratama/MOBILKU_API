const sharp = require("sharp");

exports.processImage = (inputPath, outputPath, size) => {
  return sharp(inputPath)
    .resize({ width: size })
    .toFile(outputPath)
    .then((info) => outputPath);
};
