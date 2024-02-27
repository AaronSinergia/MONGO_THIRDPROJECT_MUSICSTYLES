const { isAdmin } = require('../../middlewares/auth');
const { uploadBandsIMG } = require('../../middlewares/file');
const {
  postBands,
  getBands,
  getAndModifyBands,
  deleteBand,
} = require('../controllers/band');

const bandsRoutes = require('express').Router();

bandsRoutes.post('/', [isAdmin], postBands);
bandsRoutes.get('/', getBands);
bandsRoutes.put(
  '/:id',
  [isAdmin],
  uploadBandsIMG.single('img'),
  getAndModifyBands
);
bandsRoutes.delete('/:id', [isAdmin], deleteBand);

module.exports = bandsRoutes;
