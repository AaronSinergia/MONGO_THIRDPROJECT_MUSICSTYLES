const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storageBands = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'storageBands ',
    allow: ['jpg', 'jpeg', 'gif', 'png', 'webp'],
  },
});

const storageLabels = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'storageLabels',
    allow: ['jpg', 'jpeg', 'gif', 'png', 'webp'],
  },
});

const storageUsers = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'storageUsers',
    allow: ['jpg', 'jpeg', 'gif', 'png', 'webp'],
  },
});

const uploadBandsIMG = multer({ storage: storageBands });
const uploadLabelsIMG = multer({ storage: storageLabels });
const uploadUsersIMG = multer({ storage: storageUsers });

module.exports = { uploadBandsIMG, uploadLabelsIMG, uploadUsersIMG };
