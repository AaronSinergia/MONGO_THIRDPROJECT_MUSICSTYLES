const { isAdmin } = require('../../middlewares/auth');
const { uploadLabelsIMG } = require('../../middlewares/file');
const {
  getLabel,
  postLabel,
  getAndModifyLabel,
  deleteLabel,
} = require('../controllers/label');

const labelRoutes = require('express').Router();

labelRoutes.post('/', [isAdmin], postLabel);
labelRoutes.put(
  '/:id',
  [isAdmin],
  uploadLabelsIMG.single('img'),
  getAndModifyLabel
);
labelRoutes.get('/', getLabel);
labelRoutes.delete('/:id', [isAdmin], deleteLabel);

module.exports = labelRoutes;
