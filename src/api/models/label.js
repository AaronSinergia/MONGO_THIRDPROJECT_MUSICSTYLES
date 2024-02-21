const mongoose = require('mongoose');

const labelSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    labelName: { type: String, required: true },
    bands: [{ type: mongoose.Types.ObjectId, ref: 'bands' }],
  },
  { timestamps: true, collection: 'labels' }
);

const Label = mongoose.model('labels', labelSchema, 'labels');

module.exports = Label;
