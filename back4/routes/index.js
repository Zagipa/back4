const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home_controller');
const weatherController = require('../controllers/weather');
// console.log("router loaded");






router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/posts',require('./posts'));
router.use('/comments',require('./comments'));
router.get('/weather', weatherController.weather);



router.get('/weather', (req, res) => {
    res.render('weather', { title: 'weather' });
});
router.get('/stock', (req, res) => {
    res.render('stock', { title: 'Stock Market Trends' });
});

module.exports = router;
