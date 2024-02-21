const Band = require('../models/band');

const getBands = async (req, res, next) => {
  try {
    const bands = await Band.find();
    return res.status(200).json(bands);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const postBands = async (req, res, next) => {
  try {
    const newBands = new Band(req.body);
    const bandSaved = await newBands.save();

    return res.status(201).json(bandSaved);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

const getAndModifyBands = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newBand = new Band(req.body);
    newBand._id = id;

    if (req.file) {
      newBand.img = req.file.path;
    }

    const bandUpdated = await Band.findByIdAndUpdate(id, newBand, {
      new: true,
    });
    return res.status(200).json(bandUpdated);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

const deleteBand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bandDeleted = await Band.findByIdAndDelete(id);

    deleteFile(bandDeleted.img);

    return res
      .status(200)
      .json({ message: 'Band Already Deleted', bandDeleted });
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

module.exports = { getBands, postBands, getAndModifyBands, deleteBand };
