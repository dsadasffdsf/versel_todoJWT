const Router = require('express').Router;
const { body } = require('express-validator');
const userController = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const postController = require('../controllers/post-controller');
const router = new Router();

router.post(
  '/registration',
  [
    body('email').isEmail(),
    body('password').isLength({
      min: 4,
      max: 32,
    }),
  ],
  userController.registration,
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.users);
router.post('/addPost', postController.addPost);
router.get('/getPosts', postController.getPost);
router.post('/remPost', postController.removePost);
router.post('/updatePost', postController.updatePost);

module.exports = router;
