const { isAuth, isAdmin } = require('../../middlewares/auth');
const {
  register,
  login,
  deleteUser,
  getUsers,
} = require('../controllers/user');

const usersRoutes = require('express').Router();

usersRoutes.post('/register', register); // Este funciona
usersRoutes.post('/login', login);
usersRoutes.get('/', [isAuth], getUsers);
usersRoutes.delete('/:id', [isAdmin], deleteUser);

module.exports = usersRoutes;
