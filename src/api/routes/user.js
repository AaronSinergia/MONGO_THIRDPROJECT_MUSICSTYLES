const { isAuth, isAdmin } = require('../../middlewares/auth');
const { uploadUsersIMG } = require('../../middlewares/file');
const {
  register,
  login,
  deleteUser,
  getUsers,
  getAndModifyUsers,
} = require('../controllers/user');

const usersRoutes = require('express').Router();

usersRoutes.post('/register', register);
usersRoutes.post('/login', login);
usersRoutes.get('/', [isAuth], getUsers);
usersRoutes.put(
  '/:id',
  uploadUsersIMG.single('img'),
  [isAuth],
  getAndModifyUsers
);
usersRoutes.delete('/:id', [isAdmin], deleteUser);

module.exports = usersRoutes;
