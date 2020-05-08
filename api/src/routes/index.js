var express = require('express');
var router = express.Router();
const userController = require ('../controllers/user/index.js' ) ;
const newsController = require ('../controllers/news/index.js' ) ;

router.post('/user/create', userController.create);
router.get('/user/login', userController.login);
router.post('/user/profile', userController.profile);
router.get('/user', userController.getUser);
router.get('/users', userController.getUsers);

router.post('/news/create', newsController.create);
router.get('/news', newsController.getNews);
router.get('/newsAll', newsController.getAllNews);
router.get('/news/update', newsController.update);
router.post('/news/delete', newsController.deleteNews);

module.exports = router;
