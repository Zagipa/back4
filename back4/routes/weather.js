const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home_controller');

// Existing routes...

// Directly render the stock page
router.get('/weather', (req, res) => {
    res.render('weather', { title: 'weather' });
});

module.exports = router;