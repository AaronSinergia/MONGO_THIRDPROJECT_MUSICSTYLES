const { isAuth, isAdmin } = require('../../middlewares/auth');
const {
  getLabel,
  postLabel,
  getAndModifyLabel,
  deleteLabel,
} = require('../controllers/label');

const upload = require('../../middlewares/file');

const labelRoutes = require('express').Router();

labelRoutes.post('/', postLabel);
labelRoutes.put('/:id', upload.single('img'), [isAuth], getAndModifyLabel);
labelRoutes.get('/', getLabel);
labelRoutes.delete('/:id', [isAdmin], deleteLabel);

module.exports = labelRoutes;
