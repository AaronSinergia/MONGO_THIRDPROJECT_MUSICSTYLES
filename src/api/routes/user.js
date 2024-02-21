const { isAuth, isAdmin } = require('../../middlewares/auth');
const {
  register,
  login,
  deleteUser,
  getUsers,
  getAndModifyUsers,
} = require('../controllers/user');

const upload = require('../../middlewares/file');

const usersRoutes = require('express').Router();

usersRoutes.post('/register', register);
usersRoutes.post('/login', login);
usersRoutes.get('/', [isAuth], getUsers);
usersRoutes.put('/:id', upload.single('img'), [isAuth], getAndModifyUsers);
usersRoutes.delete('/:id', [isAdmin], deleteUser);

module.exports = usersRoutes;
