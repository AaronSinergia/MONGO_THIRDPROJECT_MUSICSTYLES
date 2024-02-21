const Label = require('../models/label');

const getLabel = async (req, res, next) => {
  try {
    const labels = await Label.find().populate('bands');
    return res.status(200).json(labels);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const postLabel = async (req, res, next) => {
  try {
    const newlabel = new Label(req.body);
    const labelSaved = await newlabel.save();

    return res.status(201).json(labelSaved);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

const getAndModifyLabel = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newLabel = new Label(req.body);
    newLabel._id = id;

    if (req.file) {
      newLabel.img = req.file.path;
    }

    const labelUpdated = await Label.findByIdAndUpdate(id, newLabel, {
      new: true,
    });
    return res.status(200).json(labelUpdated);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

const deleteLabel = async (req, res, next) => {
  try {
    const { id } = req.params;
    const labelDeleted = await Label.findByIdAndDelete(id);

    deleteFile(labelDeleted.img);

    return res
      .status(200)
      .json({ message: 'Label Already Deleted', labelDeleted });
  } catch (error) {
    return res.status(400).json('Ha fallado la petición');
  }
};

module.exports = { getLabel, postLabel, getAndModifyLabel, deleteLabel };
