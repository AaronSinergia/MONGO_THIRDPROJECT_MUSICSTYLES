const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storagePaquito = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'labelsAndMore',
    allow: ['jpg', 'jpeg', 'gif', 'png', 'webp'],
  },
});

const upload = multer({ storage: storagePaquito });

module.exports = upload;
