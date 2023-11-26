const Image = require("../models/image.model");
const path = require('path');

exports.uploadImage = async (request, response) => {
  try {
    const { filename } = request.file;
    const { description } = request.body;

    await Image.create({ filename, desc:description });

    response.status(200).json({ message: "Uploaded successfully", filename, description });
  } catch (err) {
    console.error(err);
    response.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getImage = async (req, res) => {
  try {
    const images = await Image.findAll();

    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.images = async (req, res) => {
  try {
    const { filename } = req.params;
    const imagePath = path.resolve(__dirname, '..', 'public', 'images', filename);

    const image = await Image.findOne({ where: { filename } });

    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    // Kirim gambar sebagai respons
    res.sendFile(imagePath);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
