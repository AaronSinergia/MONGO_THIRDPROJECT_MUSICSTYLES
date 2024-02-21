const mongoose = require('mongoose');

const bandSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    bandName: { type: String, required: true },
    bandStyle: { type: String, required: true },
    yearOfFundation: { type: Number, required: true },
  },
  { timestamps: true, collection: 'bands' }
);

const Band = mongoose.model('bands', bandSchema, 'bands');

module.exports = Band;
