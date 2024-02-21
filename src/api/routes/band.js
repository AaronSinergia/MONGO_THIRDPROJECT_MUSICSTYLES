const { isAuth, isAdmin } = require('../../middlewares/auth');
const {
  postBands,
  getBands,
  getAndModifyBands,
  deleteBand,
} = require('../controllers/band');

const upload = require('../../middlewares/file');

const bandsRoutes = require('express').Router();

bandsRoutes.post('/', postBands);
bandsRoutes.get('/', getBands);
bandsRoutes.put('/:id', upload.single('img'), getAndModifyBands);
bandsRoutes.delete('/:id', [isAdmin], deleteBand);

module.exports = bandsRoutes;
