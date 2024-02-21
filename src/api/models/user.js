const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    img: { type: String, required: false },
    userName: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true, collection: 'user' }
);

// Función con bcrypt para encriptarla
userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model('user', userSchema, 'user');

module.exports = User;
