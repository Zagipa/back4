const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home_controller');

// Existing routes...

// Directly render the stock page
router.get('/stock', (req, res) => {
    res.render('stock', { title: 'Stock Market Trends' });
});

module.exports = router;